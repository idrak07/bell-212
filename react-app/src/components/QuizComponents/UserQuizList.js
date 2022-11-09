import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import useLocalStorage from '../../hooks/useLocalStorage'
import CustomButton from '../../ui/CustomButton'

import './Quiz.css'
import styles from './UserQuiz.module.css'



const quizLists = [
  {
    topic: 'Engine',
    totalQuiz: 20,
    length: 20
  },
  {
    topic: 'Air Frame',
    totalQuiz: 20,
    length: 20
  },
  {
    topic: 'Electronic Components',
    totalQuiz: 20,
    length: 20
  },
  {
    topic: 'Instruments',
    totalQuiz: 20,
    length: 20
  },
  {
    topic: 'Radio',
    totalQuiz: 20,
    length: 20
  },
]


const UserQuizList = () => {
  const [selectedType, setSelectedType] = useState('ORIGINAL');
  const navigate = useNavigate()
  
  
  const handleStartExam = (topic) => {

    if(selectedType) {
      const time = JSON.parse(JSON.stringify(localStorage.getItem(`/test/${selectedType}/${topic}`)))
      
      if(time) {
        console.log('inside if')
      } else {
        console.log('inside else')

        const currentDate = new Date();
        const twentyMinutesLater = new Date(currentDate.getTime() + (20 * 60 * 1000));
        console.log(selectedType, topic)
        localStorage.setItem(`/test/${selectedType}/${topic}`, twentyMinutesLater)
      }
      
      // /test/quiz/engine/
      // navigate(`/test/${selectedType}/${topic}`)
      window.location.href = `/test/${selectedType}/${topic}`
      // window.open(`http://localhost:3000/test/${selectedType}/${topic}`, '_blank');
      // window.close()
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <h2 style={{
            fontSize: '1.1rem'
          }} htmlFor="question_type">
            Select Question Type
          </h2>
          <div>
            <select name="question_type" id="question_type" style={{
              width: '100%',
              maxWidth: '300px',
              padding: '8px 4px',
              borderRadius: '6px',
              outline: 'none'
            }}
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="ORIGINAL">Quiz</option>
              <option value="MOCK">Mock</option>
            </select>
          </div>
        </div>

        <div>
          <h2 style={{
            fontSize: '1.1rem',
            textTransform: 'capitalize',
            marginBottom: '10px'
          }}>{selectedType} Lists</h2>
          <table>
            <thead>
              <tr>
                <th>Topic</th>
                <th className='remove-on-small'>Total Quiz</th>
                <th className='remove-on-small'>Length</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {quizLists.map(item => (
                <tr>
                  <th>{item.topic}</th>
                  <td className='remove-on-small'>{item.totalQuiz}</td>
                  <td className='remove-on-small'>{item.length}</td>
                  <td>
                    <span style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <CustomButton onClick={() => handleStartExam(item.topic)} variant={'primary'}>Start</CustomButton>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default UserQuizList