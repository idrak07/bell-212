import React, { useEffect } from "react";
import { useParams } from "react-router";
import { SERVER_URL } from "../../../constants";
import useFetch from "../../../hooks/useFetch";
import GiveOriginalQuizQuestions from "./GiveOriginalQuizQuestions";

const GiveOriginalQuiz = () => {
  const params = useParams();
  const { quizId } = params;
  const [{ response, error, isLoading }, doFetch] = useFetch(
    `${SERVER_URL}/quiz/${quizId}/questions`
  );
  
   const [{ response:quiz, error:quizE, isLoading:quizLoading }, fetchQuizInfo] = useFetch(
    `${SERVER_URL}/quiz/${quizId}`
  );

  useEffect(() => {
    doFetch({
      method: "GET",
    });
    console.log({ response });
  }, []);


  useEffect(() => {
    fetchQuizInfo({
      method: "GET",
    });
  }, []);

  return (
    <div
      style={{
        padding: "18px",
      }}
    >
      {isLoading ? (
        <div>Loading Quiz Questions</div>
      ) : error ? (
        <div> Error While Getting Questions </div>
      ) : response && response?.length == 0 ? (
        <div>
          <p>This quiz has no questions</p>
        </div>
      ) : response && quiz && (
        <>
          <GiveOriginalQuizQuestions quiz={quiz} allQuestion={response} />
        </>
      )}
    </div>
  );
};

export default GiveOriginalQuiz;
