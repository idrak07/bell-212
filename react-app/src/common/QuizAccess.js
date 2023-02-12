import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router';
import { SERVER_URL } from '../constants';
import useLocalStorage from '../hooks/useLocalStorage';
import { arrayToDate, getDateDiff } from '../util';
import QuizError from './QuizError';

const QuizAccess = ({
    children
}) => {
  const params = useParams();
  const {quizId} = params;
  console.log('quizId from quiz access', quizId)
  const [user, _] = useLocalStorage('user');
  const [errorMsg, setErrMsg] = useState('');
  const [isLoading, setIsLoading] = useState(true)

  const fetchUserQues = async () => {
    try {
      const res = await axios.get(`${SERVER_URL}/quizAssignees/quizzes/${user.id}`)
      const data = await res.data;
      const findQuiz = data.find(q => q.id == quizId);
      console.log(data, findQuiz)
      if(!findQuiz) {
        setErrMsg("You don't have access to this quiz!")
      } else if(findQuiz?.attended) {
        setErrMsg('You have already attended this quiz!')
      } else if(getDateDiff(new Date(), arrayToDate(findQuiz.startTime)) >= 0) {
        setErrMsg('This exam not yet started!')
      }
    } catch(e) {
      console.log(e)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchUserQues()
  }, [])

  if(isLoading) {
    return 'Loading...'
  }

  if(errorMsg) {
    return <QuizError error={errorMsg}/>
  }

  return children ? children : <Outlet />
}

export default QuizAccess