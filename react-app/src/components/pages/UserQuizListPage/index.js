import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import UserQuizList from '../../QuizComponents/UserQuizList'

const UserQuizLisPage = () => {
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

export default UserQuizLisPage