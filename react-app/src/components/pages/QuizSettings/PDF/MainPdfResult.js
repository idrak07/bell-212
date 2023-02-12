import React, { useEffect } from 'react';
import { SERVER_URL } from '../../../../constants';
import useFetch from '../../../../hooks/useFetch';
import PdfResult from './index';

const MainPdfResult = ({quiz}) => {
  const [{ response, error, isLoading }, doFetch] = useFetch(
    `${SERVER_URL}/quizAssignees/users/${quiz.id}`
  );

  useEffect(() => {
    doFetch({
      method: "GET",
    });
    console.log({ response });
  }, []);

  return (
    <>
      {isLoading
        ? "getting Data"
        : error
        ? "error getting data"
        : response && <PdfResult data={response} quiz={quiz} />}
    </>
  );
}

export default MainPdfResult