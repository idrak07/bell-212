import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import CreateEditQuizComp from '../../QuizComponents/CreateEditQuizComp'

const CreateQuizPage = () => {
  return (
    <AdminLayout>
      <div style={{
        paddingTop: '24px'
      }}>
        <CreateEditQuizComp />
      </div>
    </AdminLayout>
  )
}

export default CreateQuizPage