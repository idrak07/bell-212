import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import UserQuizList from '../../QuizComponents/UserQuizList'

const UserMockQuizPage = () => {
  return (
    <AdminLayout>
      <div style={{
        padding: '18px',
      }}>
        <UserQuizList />
      </div>
    </AdminLayout>
  )
}

export default UserMockQuizPage