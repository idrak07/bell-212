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
import QuestionPopupContent from "./QuestionPopupContent";
// import { v4 as uuid } from 'uuid';

export const initialQuestion = {
  id: 1,
  questionType: "ORIGINAL",
  quiz: "",
  topic: "",
  question: {
    description: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    correctChoice: "",
    questionType: "ORIGINAL",
    topic: "",
    quiz: "",
  },
};

export default function AddQuestionPopup({questions, quiz, open, setOpen }) {
  const params = useParams();
  const navigate = useNavigate();
  const { topic } = params;
  const [allQuestions, setAllQuestions] = React.useState(
    questions?.length
      ? JSON.parse(JSON.stringify(questions))
      : [
          {
            ...initialQuestion,
            topic: topic.toUpperCase()?.replace(" ", "_"),
            quiz: quiz.id,
          },
        ]
  );

  const [scroll, setScroll] = React.useState("paper");

  const handleClose = () => {
    setOpen(false);
  };

  const [{ response, error, isLoading }, updatequiz] = useFetch(
    `${SERVER_URL}/quiz`
  );

  const handleSaveQuestions = async () => {
    const allQuestionList = !allQuestions.length ? [] : allQuestions.map(ques => {
      return {
        ...ques,
        question: {
          ...ques.question,
          topic: topic.toUpperCase()?.replace(" ", "_"),
          quiz: quiz.id,
        }
      }
    })
    try {
      const res = await updatequiz({
        method: "PUT",
        data: {
          ...quiz,
          questions: allQuestionList,
        },
      });
      console.log(res);
      toast.success("Successfully question saved");
    } catch (e) {
      console.log(e);
      toast.error("Couldn't save questions");
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
            <QuestionPopupContent
              allQuestions={allQuestions}
              setAllQuestions={setAllQuestions}
              quiz={quiz}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSaveQuestions}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
