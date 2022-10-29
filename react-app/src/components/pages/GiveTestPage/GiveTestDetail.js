import React, { useState } from 'react'
import { useParams } from 'react-router'
import { useCountdown } from '../../../hooks/useCountDown'
import CustomButton from '../../../ui/CustomButton'
import './GiveTest.css'
import ShowQuestionComp from './ShowQuestionComp'

export const dummyQuestions = [
  {
      id: 1,
      topic: "Engine",
      questionType: "QUIZ", // MOCK or QUIZ
      description: "This is the question description",
      choice1: "option a",
      choice2: "option b",
      choice3: "option c",
      choice4: "option d",
      correctChoice: "option c",
      selectedChoice: ''
  },
  {
      id: 2,
      topic: "Engine",
      questionType: "QUIZ", // MOCK or QUIZ
      description: "This is the question description",
      choice1: "option a",
      choice2: "option b",
      choice3: "option c",
      choice4: "option d",
      correctChoice: "option c",
      selectedChoice: ''
  },
  {
      id: 3,
      topic: "Engine",
      questionType: "QUIZ", // MOCK or QUIZ
      description: "This is the another description",
      choice1: "option a",
      choice2: "option b",
      choice3: "option example",
      choice4: "option d",
      correctChoice: "option d",
      selectedChoice: ''
  },
  {
      id: 4,
      topic: "Engine",
      questionType: "QUIZ", // MOCK or QUIZ
      description: "TLorem ipsumhe question description",
      choice1: "option ipusm",
      choice2: "option b",
      choice3: "option c",
      choice4: "option d",
      correctChoice: "option c",
      selectedChoice: ''
  },
  {
      id: 5,
      topic: "Engine",
      questionType: "QUIZ", // MOCK or QUIZ
      description: "Tlorem ipsume dolar sitetion description",
      choice1: "option a",
      choice2: "option b",
      choice3: "dollar c",
      choice4: "option d",
      correctChoice: "option c",
      selectedChoice: ''
  },
  {
      id: 6,
      topic: "Engine",
      questionType: "QUIZ", // MOCK or QUIZ
      description: "Ipsum dolar lorem estion description",
      choice1: "option a",
      choice2: "option b",
      choice3: "option ipsum",
      choice4: "option d",
      correctChoice: "option c",
      selectedChoice: ''
  },
  {
      id: 7,
      topic: "Engine",
      questionType: "QUIZ", // MOCK or QUIZ
      description: "This is the question description",
      choice1: "option a",
      choice2: "option b",
      choice3: "option c",
      choice4: "option d",
      correctChoice: "option c",
      selectedChoice: ''
  },
  
]

const GiveTestDetail = ({allQuestion}) => {
  const params = useParams()
  const [questionList, setQuestionList] = useState(allQuestion);

  const time = localStorage.getItem(`/test/${params?.type}/${params?.topic}`)


  const handleSubmitResult = () => {
    console.log(questionList)
    const correctWrongCount = questionList.reduce((acc, currentQ) => {
      if(currentQ.selectedChoice && currentQ.correctChoice === currentQ.selectedChoice) {
        return {
          ...acc,
          totalCorrectAns: acc['totalCorrectAns'] + 1
        }
      } else {
        return {
          ...acc,
          totalWrongAns: acc['totalWrongAns'] + 1
        }
      }
    }, {
      totalCorrectAns: 0,
      totalWrongAns: 0
    })


    alert(`Total Correct Answer: ${correctWrongCount?.totalCorrectAns || 0}, Total Wrong Answer: ${correctWrongCount?.totalWrongAns || 0} `)
    localStorage.removeItem(`/test/${params?.type}/${params?.topic}`)
    window.location.href = '/quiz-list'
  }


  // console.log({time})
  const [days, hours, minutes, seconds] = useCountdown(time);


  return (
    <div className='d-container'>
        <div className="d-content" style={{
          width:'100%'
        }}>
          {/* countdown */}
          <div className='countdown'>
            <div>
              <p style={{
                textTransform: 'capitalize',
                margin: '5px 0',
                fontSize: '1.05rem'
              }}>Question Type: <strong>{params?.type}</strong></p>
              <p style={{
                textTransform: 'capitalize',
                margin: '5px 0',
                fontSize: '1.05rem'
              }}>Question Topic: <strong>{params?.topic}</strong></p>
            </div>
            <div className='timer'>
              <p>Time Remaining</p>
              <div className='times'>
                <span>{hours}</span>
                <span>:</span>
                <span>{minutes}</span>
                <span>:</span>
                <span>{seconds}</span>
              </div>
            </div>
          </div>


          <div className="question-list">
            {
              questionList?.map((question, idx) => (
                <ShowQuestionComp key={idx} sl={idx+1} question={question} setQuestionList={setQuestionList} questionList={questionList} />
              ))
            }
            {/* {questionList?.length === 0 ? 'This test has no question' : null} */}
          </div>

          
        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
        }}>
        <CustomButton onClick={handleSubmitResult} style={{
          marginTop: '15px',
          minWidth: '350px',
          height: '45px',
          marginBottom: '25px'
        }} variant={'primary'}>
          Submit
        </CustomButton>
        </div>
        </div>
    </div>
  )
}

export default GiveTestDetail