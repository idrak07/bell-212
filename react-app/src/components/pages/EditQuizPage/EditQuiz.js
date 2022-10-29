import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { SERVER_URL } from '../../../constants';
import useFetch from '../../../hooks/useFetch';
import CreateEditQuizComp from '../../QuizComponents/CreateEditQuizComp';

const EditQuiz = () => {
  const params = useParams()
  const {type, topic, id} = params;

  const [{response, error, isLoading},doFetch] = useFetch(`${SERVER_URL}/questions/${id}`)

  // const { data, loading, error } = useAxiosFetch({
  //   method: "GET",
  //   mode: 'no-cors',
  //   url: '/questions',
  //   params: {
  //     topic: topic.toUpperCase()?.replace(' ', '_'),
  //   },
  // });
  useEffect(() => {
    doFetch()
  }, [])

  console.log({response,isLoading})

  return (
    <div>
      {isLoading ? (
        <div>Loading Questions</div>
      ) : error ? (
        <div> Error While Getting Questions </div>
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