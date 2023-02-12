import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { SERVER_URL } from '../../../constants';
import useFetch from '../../../hooks/useFetch';
import CreateEditQuizComp from '../../QuizComponents/CreateEditQuizComp';

const EditQuiz = () => {
  const params = useParams()
  const {id} = params;

  const [{response, error, isLoading},fetchQuestionDetail] = useFetch(`${SERVER_URL}/questions/${id}`)


  useEffect(() => {
    fetchQuestionDetail()
  }, [])

  console.log({response,isLoading})

  return (
    <div>
      {isLoading ? (
        <div>Loading Questions</div>
      ) : error ? (
        <div> Error While Getting Question detail </div>
      ) : response && (
        <>
          <CreateEditQuizComp isEdit={true} editQuestion={response}  />
        </>
      )}
      {/* {editQuestion ? (
        <CreateEditQuizComp isEdit={true} editQuestion={editQuestion}/>
      ) : 'Not found'} */}
    </div>
  )
}

export default EditQuiz