import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import * as React from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { SERVER_URL } from "../../../../../constants";
import StudentPopupContent from "./StudentPopupContent";

export default function AddStudentPopup({ students, quiz, open, setOpen }) {
  const [scroll, setScroll] = React.useState("paper");

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);

  const params = useParams();
  const navigate = useNavigate();
  const { topic } = params;
  const [allUsers, setAllUsers] = React.useState(
    students ? JSON.parse(JSON.stringify(students)) : []
  );
  const [isLoading, setIsLoading] = React.useState(false)


  // const [{ response, error, isLoading }, updatequiz] = useFetch(
  //   `${SERVER_URL}/quizAssignees/users/${quiz.id}`
  // );

  const handleSaveUsers = async () => {
    try {
      setIsLoading(true)
      const res = await axios({
        url: `${SERVER_URL}/quizAssignees/users/${quiz.id}`,
        method: "POST",
        data: allUsers,
      });
      toast.success("Successfully users added");
    } catch (e) {
      console.log(e);
      toast.error("Couldn't add user");
    } finally {
      setIsLoading(false)
      handleClose();
    }
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Add Students</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <StudentPopupContent
              quiz={quiz}
              allUsers={allUsers}
              setAllUsers={setAllUsers}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSaveUsers} disabled={isLoading}>
            {isLoading ? 'Saving...' : 'Save'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
