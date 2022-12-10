import React from "react";
import Controls from "../../../../../ui/FormComponents/controls/Controls";
import AddStudentPopup from "./AddStudentPopup";
import StudentList from "./StudentList";

const StudentsArea = () => {
  const [open, setOpen] = React.useState(false);

  const studentCount = 5;
  return (
    <div>
      {studentCount !== 0 && (
        <StudentList />
      )}

      {studentCount == 0 ? (
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
