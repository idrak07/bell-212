import React, { useState } from 'react'
import './GiveTest.css'

const ShowQuestionComp = ({sl, question, setQuestionList, questionList}) => {
  const [questionChoices, setQuestionChoices] = useState([
    question.choice1,
    question.choice2,
    question.choice3,
    question.choice4
  ])
  return (
    <div className='question_item_cont'>
      <div style={{
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'flex-start',
        gap: '8px'
      }}>
        <div>
          <span>
            {sl}.
          </span>
        </div>
        <div>
          <p style={{
            fontSize: '1.02rem',
            fontWeight: 400
          }}>{question.description}</p>

          <ul  style={{
            listStyleType: 'none',
            boxSizing: 'border-box',
            margin: 0,
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            width: '100%'
          }}>
            {questionChoices.map(choice => (
              <li>
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  width: "100%"
                }} htmlFor={`${sl}-${choice}`}>
                  <input 
                    checked={question.selectedChoice === choice} 
                    onChange={() => {
                      const updatedQ = [...questionList].map(q => {
                        if(q.id === question.id) {
                          return {
                            ...question,
                            selectedChoice: choice
                          }
                        } return q
                      })
                      setQuestionList(updatedQ)
                    }}
                    className='radio' type="radio" name={`${sl}-${question.description}`} id={`${sl}-${choice}`} />
                  <span style={{
                    fontWeight: 500,
                    fontSize: '1rem',
                    opacity: 0.99
                  }}>{choice}</span>
                </label>
              </li>
            ))}
   
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ShowQuestionComp