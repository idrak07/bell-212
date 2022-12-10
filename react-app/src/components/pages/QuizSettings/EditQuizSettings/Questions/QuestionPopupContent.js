import { Divider, Grid } from "@material-ui/core";
import React from "react";
import Controls from "../../../../../ui/FormComponents/controls/Controls";
import { initialQuestion } from "./AddQuestionPopup";
import QuestionFormItem from "./QuestionFormItem";

const QuestionPopupContent = ({
  allQuestions, setAllQuestions
}) => {

  const addAnInitialQuestions = () => {
    setAllQuestions([
      ...allQuestions,
      {
        ...initialQuestion,
        id: allQuestions.length + 1
      }
    ])
  }

  return (
    <div>
      <p style={{opacity: 0, height: 0, margin: 0}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione tempora vero architecto, odit autem itaque.</p>
      <div style={{ display: 'grid', gap: '1.5rem' }}>
        {allQuestions.map((question, idx) => (
          <>
            <QuestionFormItem question={question} idx={idx+1} allQuestions={allQuestions} setAllQuestions={setAllQuestions} />
            <Divider />
          </>
        ))}
      </div>

      <div>
        <Controls.Button
          style={{ marginTop: '1rem' }}
          type="button"
          text="Add Another"
          variant="outlined"
          onClick={addAnInitialQuestions}
        />
      </div>

    </div>
  )
};

export default QuestionPopupContent;
