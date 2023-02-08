import React from "react";
import Controls from "../../../../../ui/FormComponents/controls/Controls";
import AddStudentPopup from "./AddStudentPopup";
import StudentList from "./StudentList";

const StudentsArea = ({quiz}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      {quiz.assigneeList.length !== 0 && (
        <StudentList />
      )}

      {quiz.assigneeList.length === 0 ? (
        <Controls.Button
          type="button"
          text="Add Students" 
          variant="outlined"
          onClick={() => setOpen(true)}
        />
      ) : (
        <Controls.Button
          type="button"
          text="Update Students" 
          variant="outlined"
          onClick={() => setOpen(true)}
        />
      )}

      {open && (
        <AddStudentPopup open={open} setOpen={setOpen}/>
      )}

  </div>
  );
};

export default StudentsArea;
