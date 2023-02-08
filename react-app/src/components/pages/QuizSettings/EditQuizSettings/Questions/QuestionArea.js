import React, { useState } from "react";
import Controls from "../../../../../ui/FormComponents/controls/Controls";
import AddQuestionPopup from "./AddQuestionPopup";
import QuestionList from "./QuestionList";

const QuestionArea = ({quiz}) => {
  const [open, setOpen] = useState(false)
  return (
    <div>

      {quiz.questions.length !== 0 && (
        <QuestionList questions={quiz.questions} />
      )}


      {quiz.questions.length === 0 ? (
        <Controls.Button
          type="button"
          text="Add Questions"
          variant="outlined"
          onClick={() => setOpen(true)}
        />
      ) : (
        <Controls.Button
          type="button"
          text="Update Questions"
          variant="outlined"
          onClick={() => setOpen(true)}
        />
      )}

      {open && (
        <AddQuestionPopup quiz={quiz} open={open} setOpen={setOpen} />
      )}

    </div>
  );
};

export default QuestionArea;
