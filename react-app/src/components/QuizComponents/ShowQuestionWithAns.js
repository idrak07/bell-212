import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import CustomButton from '../../ui/CustomButton'
import '../pages/GiveTestPage/GiveTest.css'

const ShowQuestionWithAns = ({ question, handleDeleteQuestion}) => {
  const params = useParams();
  const navigation = useNavigate();
  const [questionChoices, setQuestionChoices] = useState([
    question.choice1,
    question.choice2,
    question.choice3,
    question.choice4
  ]);

  return (
    <div className='question_item_cont' style={{
      background: 'transparent',
      borderBottom: '1px solid lightgrey'
    }}>
      <div>
       <div>
          <span style={{
            fontWeight: 500
          }}>
            Question No-{question.id}.
          </span>
      </div>
      
      <div style={{
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'flex-start',
        gap: '8px'
      }}>
        
        <div>
          <p style={{
            fontSize: '1.02rem',
            fontWeight: 400
          }}>
            <span style={{
            fontWeight: 500,
            marginRight:'5px'
          }}>
              Description: 
            </span>
            {question.description}
          </p>

          <ul  style={{
            // listStyleType: 'A',
            listStyle: 'A',
            boxSizing: 'border-box',
            margin: '0 20px',
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            width: '100%'
          }}>
            {questionChoices.map(choice => (
              <li style={{
                listStyle: 'upper-latin'
              }}>
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  width: "100%"
                }}>
                  
                  <span style={{
                    fontWeight: 500,
                    fontSize: '1rem',
                    opacity: 0.99
                  }}>{choice}</span>
                </label>
              </li>
            ))}
   
          </ul>

          <div>
            Correct Choice: <strong style={{
              padding: '4px 6px',
              background: '#11e4116b',
              textAlign: 'center',
              borderRadius: '6px',
              color: 'black',
              fontWeight: 500,
              marginTop: '10px'
            }}>{question.correctChoice}</strong>
          </div>

          
          <div style={{
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            marginTop: '15px'
          }}>
            <CustomButton onClick={() => {
              navigation(`/quiz/${params?.topic}/${question.id}`)
            }} style={{
              fontSize: '0.9rem',
              height: '38px'
            }} variant={'primary'}>
              Edit
            </CustomButton>
            <CustomButton onClick={() => {
              const res= window.confirm('Are you sure, you want to delete this')
              if(res) {
                handleDeleteQuestion(question)
              }
            }} style={{
              fontSize: '0.9rem',
              height: '38px'
            }} variant={'danger'}>
              Delete
            </CustomButton>
          </div>
        </div>
      </div>


      </div>
    </div>
  )
}

export default ShowQuestionWithAns