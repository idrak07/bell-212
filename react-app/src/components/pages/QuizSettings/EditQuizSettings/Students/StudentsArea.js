import React, { useEffect } from "react";
import { SERVER_URL } from "../../../../../constants";
import useFetch from "../../../../../hooks/useFetch";
import Controls from "../../../../../ui/FormComponents/controls/Controls";
import AddStudentPopup from "./AddStudentPopup";
import StudentList from "./StudentList";

const StudentsArea = ({ quiz }) => {
  const [open, setOpen] = React.useState(false);
  const [{ response, error, isLoading }, doFetch] = useFetch(
    `${SERVER_URL}/quizAssignees/users/${quiz.id}`
  );

  useEffect(() => {
    doFetch({
      method: "GET",
    });
    console.log({ response });
  }, [open, setOpen]);

  return (
    <div>
      {isLoading ? (
        "Loading students"
      ) : error ? (
        "Error loading students"
      ) : response && !!response?.length ? (
        <>
          <StudentList students={response} />
          <Controls.Button
            type="button"
            text="Update Students"
            variant="outlined"
            onClick={() => setOpen(true)}
          />
        </>
      ) : (
        <Controls.Button
          type="button"
          text="Add Students"
          variant="outlined"
          onClick={() => setOpen(true)}
        />
      )}

      {open && (
        <AddStudentPopup
          students={response}
          quiz={quiz}
          open={open}
          setOpen={setOpen}
        />
      )}
    </div>
  );
};

export default StudentsArea;
