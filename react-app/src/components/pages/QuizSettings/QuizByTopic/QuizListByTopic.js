import React from 'react'
import QuizListItemByTopic from './QuizListItemByTopic'

export const quizzesByTopics = [
  {
    id: 1,
    title: 'Motor Chapter Quiz',
    startTime: new Date(),
    endTime: new Date(),
    points: 0,
    topic: 'Engine',
    questions: [],
    assigneeList:[],
    status: 'ACTIVE'
  },
  {
    id: 2,
    title: 'Motor Chapter-2 Quiz',
    startTime: new Date(),
    endTime: new Date(),
    points: 0,
    topic: 'Engine',
    questions: [],
    assigneeList:[],
    status: 'ACTIVE'
  },
  {
    id: 3,
    title: 'Motor Chapter-3 Quiz',
    startTime: new Date(),
    endTime: new Date(),
    points: 4,
    topic: 'Engine',
    questions: [],
    assigneeList:[],
    status: 'PUBLISHED'
  },
  {
    id: 5,
    title: 'Motor Chapter-4 Quiz',
    startTime: new Date(),
    endTime: new Date(),
    points: 0,
    topic: 'Engine',
    questions: [],
    assigneeList:[],
    status: 'CANCELED'
  }
]

const QuizListByTopic = () => {
  return (
   <div style={{display: 'grid', gap: '15px', gridTemplateColumns: 'repeat(auto-fit, minmax(275px, 1fr))'}}>
        {
            quizzesByTopics.map(quiz => (
                <QuizListItemByTopic quiz={quiz} />
            ))
        }
    </div>
  )
}

export default QuizListByTopic