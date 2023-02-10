import { Typography } from '@material-ui/core';
import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import UserOriginalQuizList from './UserOriginalQuizList';

const UserOriginalQuiz = () => {
  return (
   <AdminLayout>
      <div
        style={{
          padding: "8px",
          marginLeft: "8px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" id="tableTitle" component="div">
            Quizzes
          </Typography>

        </div>

        <div
          style={{
            fontSize: "1.4rem",
            // borderBottom: '1px solid lightgrey',
            paddingBottom: "8px",
            marginBottom: "10px",
          }}
        ></div>
        <UserOriginalQuizList />
      </div>
    </AdminLayout>
  )
}

export default UserOriginalQuiz