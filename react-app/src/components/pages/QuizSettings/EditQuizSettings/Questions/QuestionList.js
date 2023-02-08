import React from "react";
import ShowQuestionWithAns from "../../../../QuizComponents/ShowQuestionWithAns";
import { dummyQuestions } from "../../../GiveTestPage/GiveTestDetail";

const QuestionList = ({questions}) => {
  return (
    <div>
      {
        dummyQuestions.map((question) => (
          <ShowQuestionWithAns key={question.id} question={question} showActionButton={false} />
        ))
      }
    </div>
  )
};

export default QuestionList;
