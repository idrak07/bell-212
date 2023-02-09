import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { SERVER_URL } from "../../../../../constants";
import useFetch from "../../../../../hooks/useFetch";
import { capitalizedFirstLetter } from "../../../../QuizComponents/CreateEditQuizComp";
import QuestionFormItem from "./QuestionFormItem";
// import { v4 as uuid } from 'uuid';

export const initialQuestion = {
  description: "",
  choice1: "",
  choice2: "",
  choice3: "",
  choice4: "",
  correctChoice: "",
  questionType: "ORIGINAL",
  topic: "",
  quizId: "",
};

export default function AddQuestionPopup({
  quiz,
  open,
  setOpen,
  isEdit = false,
  editQuestion,
}) {
  const params = useParams();
  const navigate = useNavigate();
  const { topic } = params;
  const [question, setQuestion] = React.useState(
    isEdit
      ? editQuestion
      : {
          ...initialQuestion,
          topic: topic.toUpperCase()?.replace(" ", "_"),
          quizId: quiz.id,
        }
  );

  const [scroll, setScroll] = React.useState("paper");

  const handleClose = () => {
    setOpen(false);
  };

  const isQuizFieldValid = () => {
    const errors = [];
    Object.keys(question).forEach((key) => {
      if (!question[key]) {
        errors.push(`${capitalizedFirstLetter(key)} cannot be empty`);
      }
    });

    if (errors.length) {
      errors.forEach((e) => {
        toast.error(e);
      });
      return false;
    }
    return true;
  };

  const [{ response, error, isLoading }, createQuestion] = useFetch(
    `${SERVER_URL}/questions`
  );

  const handleSaveQuestion = async () => {
    if (!isQuizFieldValid()) {
      return;
    }

    try {
      const res = await createQuestion({
        method: "POST",
        data: question,
      });
      console.log(res);
      toast.success("Successfully question saved");
    } catch (e) {
      console.log(e);
      toast.error("Couldn't save questions");
    }
  };

  const handleEditQuestion = async () => {
    if (!isQuizFieldValid()) {
      return;
    }

    try {
      const res = await createQuestion({
        method: "PUT",
        data: question,
      });
      console.log(res);
      toast.success("Successfully question Edited");
    } catch (e) {
      console.log(e);
      toast.error("Couldn't edit questions");
    }
  };

  const descriptionElementRef = React.useRef(null);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Questions</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {/* <QuestionPopupContent
              allQuestions={allQuestions}
              setAllQuestions={setAllQuestions}
              quiz={quiz}
            /> */}
            <QuestionFormItem
              questionState={question}
              setQuestionState={setQuestion}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            variant="contained"
            onClick={() => {
              if (isEdit) {
                handleEditQuestion();
              } else {
                handleSaveQuestion();
              }
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
