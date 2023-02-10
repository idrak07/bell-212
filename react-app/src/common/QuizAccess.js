import React from 'react'
import { Outlet } from 'react-router'

const QuizAccess = ({
    children
}) => {
  return children ? children : <Outlet />
}

export default QuizAccess