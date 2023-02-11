import React from 'react';
import { Outlet, useParams } from 'react-router';

const QuizAccess = ({
    children
}) => {
  const params = useParams();
  const {quizId} = params;
 
  console.log('quizId from quiz access', quizId)

  return children ? children : <Outlet />
}

export default QuizAccess