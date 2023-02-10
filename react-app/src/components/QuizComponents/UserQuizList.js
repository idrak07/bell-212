import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
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
  const [selectedType, setSelectedType] = useState('MOCK');
  const navigate = useNavigate()
  
  
  const handleStartExam = (topic) => {

    if(selectedType) {
      const time = JSON.parse(JSON.stringify(localStorage.getItem(`/mock/${selectedType}/${topic}`)))
      
      if(time) {
        console.log('inside if')
      } else {
        console.log('inside else')

        const currentDate = new Date();
        const twentyMinutesLater = new Date(currentDate.getTime() + (20 * 60 * 1000));
        console.log(selectedType, topic)
        localStorage.setItem(`/mock/${selectedType}/${topic}`, twentyMinutesLater)
      }
      
      // /test/quiz/engine/
      // navigate(`/test/${selectedType}/${topic}`)
      window.location.href = `/mock/${selectedType}/${topic}`
      // window.open(`http://localhost:3000/test/${selectedType}/${topic}`, '_blank');
      // window.close()
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.content}>

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