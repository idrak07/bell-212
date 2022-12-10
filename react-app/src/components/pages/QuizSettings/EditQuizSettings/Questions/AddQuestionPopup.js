import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import QuestionPopupContent from './QuestionPopupContent';
// import { v4 as uuid } from 'uuid';

export const initialQuestion = {
    id: 1,
    description: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    correctChoice: "",
}


export default function AddQuestionPopup({open, setOpen}) {
  const [allQuestions, setAllQuestions] = React.useState([initialQuestion]);


  const [scroll, setScroll] = React.useState('paper');

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div >
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Questions</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
           <QuestionPopupContent allQuestions={allQuestions} setAllQuestions={setAllQuestions} />

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant='contained' onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}