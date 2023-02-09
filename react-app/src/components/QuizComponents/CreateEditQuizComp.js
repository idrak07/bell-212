import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { toast } from 'react-toastify'
import { SERVER_URL } from '../../constants'
import useFetch from '../../hooks/useFetch'

import CustomButton from '../../ui/CustomButton'
import { quizTopics } from '../DashboardUi/Menu'

import styles from './CreateQuiz.module.css'
import QuestionComp from './QuestionComp'

const questionInitialValue = {
    topic: "",
    questionType: "MOCK", // MOCK or ORIGINAL
    description: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    correctChoice: ""
}

export const capitalizedFirstLetter = (str) => str[0].toUpperCase() + str.slice(1)

const CreateEditQuizComp = ({isEdit=false, editQuestion}) => {
  const params = useParams();
  const navigate = useNavigate()
  
  const [questionState, setQuestionState] = useState( isEdit ? {
    ...editQuestion
  } : {
    ...questionInitialValue,
    topic: params?.topic.toUpperCase()?.replace(' ', '_') || ''
  });
  
  // console.log(isEdit, params.id,questionState)

  // api call instantiated
  const [{ response, error, isLoading }, doFetch] = useFetch(`${SERVER_URL}/questions`);
  const [{ response:editRes, error:editErr, isLoading:editIsLoading }, editQ] = useFetch(`${SERVER_URL}/questions`);

  const isQuizFieldValid = (question) => {
    const errors = []
    Object.keys(question).forEach((key) => {
      if(!question[key]) {
        errors.push(`${capitalizedFirstLetter(key)} cannot be empty`)
      } 
    })
    
    if(errors.length) {
      errors.forEach(e => {
        toast.error(e)
      })
      return false
    }
    return true
  }

  const handleCreateQuestion = async () => {
    if(!isQuizFieldValid(questionState)) {
      return;
    }

    console.log({questionState})

    if(isEdit) {
      // fetch(`${SERVER_URL}/questions`, {
      //   method: 'PUT',
      //   body: JSON.stringify(questionState)
      // }).then(res => res.json()).then(data => console.log({data})).catch(e => console.log(e));
     
      await editQ({
        method: 'PUT',
        data: {
          ...questionState
        }
      })
      if(editErr) {
        alert('Error editing question');
        return;
      }
      navigate(`/mock/${params?.topic}`)
    } else {
      await doFetch({
        method: 'POST',
        data: {
          ...questionState
        }
      })
      if(error) {
        alert('Error creating question');
        return;
      }
      navigate(`/mock/${params?.topic}`)
      
    }
  }

  const headerContent = isEdit ? 'Edit Question' : 'Create Question'
  const buttonContent = isEdit ? 'Edit & Save' : 'Create'

  const back = () => {
    navigate(-1)
  }

  return (
    <>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: '1rem',
        marginBottom: '15px',
        marginLeft: '2.2rem',
        marginRight: '2.2rem',
        fontSize: '1.6rem'
      }}>
        <h2 style={{
          fontSize: '1.2rem'
        }}>{headerContent}</h2>
        <CustomButton 
          style={{
            padding: '5px 14px'
          }} onClick={back}>
          Go Back
        </CustomButton>
      </div>
      
      <div className={styles.container}>
        <div className={styles.main_content}>
          <div className={styles.left_side}>
            <QuestionComp questionState={questionState} setQuestionState={setQuestionState}/>
          </div>

          <div className={styles.right_side}>
            <div>
            <label style={{
              fontWeight: 500,
              fontSize: '1rem'
            }} htmlFor="topic">Question Topic</label>

              <select name="topic" id="topic" style={{
                width: '100%',
                padding: '8px 4px',
                borderRadius: '6px'
              }}
                value={questionState.topic}
                onChange={(e) => {
                  setQuestionState({
                    ...questionState,
                    topic: e.target.value
                  })
                }}
              >
                {quizTopics.map(item => (
                  <option value={item.toUpperCase()?.replace(' ', '_')}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* <div>
              <label style={{
              fontWeight: 500,
              fontSize: '1rem'
            }} htmlFor="question_type">Question Type</label>
              <select name="question_type" id="question_type" style={{
                width: '100%',
                padding: '8px 4px',
                borderRadius: '6px'
              }}
                value={questionState.questionType}
                onChange={(e) => {
                  setQuestionState({
                    ...questionState,
                    questionType: e.target.value
                  })
                }}
              >
                <option value="ORIGINAL">Quiz</option>
                <option value="MOCK">Mock</option>
              </select>
            </div> */}
          </div>
        </div>
                

        <div style={{
          marginTop: '10px'
        }}> <CustomButton onClick={handleCreateQuestion} variant={'primary'}>
            {buttonContent}
          </CustomButton></div>
      </div>
    </>
  )
}

export default CreateEditQuizComp