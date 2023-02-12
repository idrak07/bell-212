import React, { useState } from "react";
import { toast } from "react-toastify";
import { SERVER_URL } from "../../../../../constants";
import useFetch from "../../../../../hooks/useFetch";
import ShowQuestionWithAns from "../../../../QuizComponents/ShowQuestionWithAns";
import AddQuestionPopup from "./AddQuestionPopup";

const QuestionList = ({ questions, setShouldRefetch }) => {
  const [open, setOpen] = useState(false);
  const [selectedQues, setSelectedQues] = useState(null);
  const handleSelectQues = (ques, action) => {
    // action = 'edit' | 'delete'
    console.log(ques)
    setSelectedQues(ques);
    if (action === "edit") {
      setOpen(true);
    } else {
      handleDeleteOriginalQuestion(ques);
    }
  };

  const [{ response, error: deleteError, isLoading: deleteLoading }, deleteQ] =
    useFetch(`${SERVER_URL}/questions`);

  const handleDeleteOriginalQuestion = async (question) => {
    try {
      await deleteQ({
        method: "DELETE",
        mode: "no-cors",
        params: {
          id: question.id,
        },
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
      });
      toast.success('Successfully question deleted')
    } catch (e) {
      toast.error("Couldn't delete question");
    } finally {
      if(!deleteLoading) {
        setShouldRefetch(true)
      }
    }
  };

  return (
    <>
      {questions.map((question, idx) => (
        <ShowQuestionWithAns
          key={question.id}
          question={question}
          qIndex={idx+1}
          showActionButton={true}
          isFromOriginalQuiz={true}
          selectForOriginal={handleSelectQues}
        />
      ))}

      {open && selectedQues &&(
        <AddQuestionPopup
          open={open}
          setOpen={setOpen}
          isEdit={true}
          editQuestion={selectedQues}
          setShouldRefetch={setShouldRefetch}
        />
      )}
    </>
  );
};

export default QuestionList;
