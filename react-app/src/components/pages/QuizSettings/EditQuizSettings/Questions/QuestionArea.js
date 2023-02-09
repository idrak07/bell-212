import React, { useState } from "react";
import Controls from "../../../../../ui/FormComponents/controls/Controls";
import AddQuestionPopup from "./AddQuestionPopup";
import QuestionList from "./QuestionList";

const QuestionArea = ({quiz}) => {
  const [open, setOpen] = useState(false)
  // const [{ response, error, isLoading }, doFetch] = useFetch(
  //   `${SERVER_URL}/quizQuestions/questions/${quiz.id}`
  // );

  // useEffect(() => {
  //   doFetch({
  //     method: "GET",
  //   });
  //   console.log({ response });
  // }, []);
  const response = []
  return (
    <div>
      {/* paused */}
      {response.length !== 0 && (
        <QuestionList questions={response} />
      )}


      {response.length === 0 ? (
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
        <AddQuestionPopup questions={response} quiz={quiz} open={open} setOpen={setOpen} />
      )}

    </div>
  );
};

export default QuestionArea;
