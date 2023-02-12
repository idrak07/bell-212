import React, { useEffect, useState } from "react";
import { SERVER_URL } from "../../../../../constants";
import useFetch from "../../../../../hooks/useFetch";
import Controls from "../../../../../ui/FormComponents/controls/Controls";
import AddQuestionPopup from "./AddQuestionPopup";
import QuestionList from "./QuestionList";

const QuestionArea = ({ quiz, isDisabled = false }) => {
  const [open, setOpen] = useState(false);
  const [shouldRefetch, setShouldRefetch] = useState(false);
  const [{ response, error, isLoading }, doFetch] = useFetch(
    `${SERVER_URL}/quiz/${quiz.id}/questions`
  );

  useEffect(() => {
    doFetch({
      method: "GET",
    });
    console.log({ response });
  }, [open, setOpen, shouldRefetch]);

  return (
    <>
      {isLoading ? (
        "Loading quiz questions"
      ) : error ? (
        "Error loading questions"
      ) : response && !!response?.length ? (
        <>
          {!isDisabled && (
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Controls.Button
                type="button"
                text="Add Question"
                variant="outlined"
                onClick={() => setOpen(true)}
              />
            </div>
          )}

          <QuestionList
            setShouldRefetch={setShouldRefetch}
            questions={response}
          />
        </>
      ) : (
        !isDisabled && (
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Controls.Button
              type="button"
              text="Add Question"
              variant="outlined"
              onClick={() => setOpen(true)}
            />
          </div>
        )
      )}

      {open && <AddQuestionPopup quiz={quiz} open={open} setOpen={setOpen} />}
    </>
  );
};

export default QuestionArea;
