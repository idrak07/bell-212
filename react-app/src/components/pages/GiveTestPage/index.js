import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { SERVER_URL } from '../../../constants';
import useFetch from '../../../hooks/useFetch';
import GiveTestDetail from './GiveTestDetail';

const GiveTestPage = () => {
  const params = useParams();
  const {type, topic} = params;

 
  const [{response, error, isLoading}, doFetch] = useFetch(`${SERVER_URL}/quiz`)
 
  useEffect(() => {
    doFetch({
      method: 'GET',
      params: {
        topic: topic.toUpperCase()?.replace(' ', '_'),
        questionType: type.toUpperCase(),
        limit: 20
      },
    });
  }, [])

  return (
    <div style={{
      padding: '18px',
    }} >
      {isLoading ? (
        <div>Loading Questions</div>
      ) : error ? (
        <div> Error While Getting Questions </div>
      ) : response &&  response?.length == 0 ? (
        <div>
          <p>This test has no question set</p>
        </div>
      ) : (
        <>
          <GiveTestDetail allQuestion={response} />
        </>
      )}
    </div>
  )
}

export default GiveTestPage 
    