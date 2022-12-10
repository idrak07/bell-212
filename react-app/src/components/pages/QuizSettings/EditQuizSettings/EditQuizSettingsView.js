import { Button, Paper } from "@material-ui/core";
import React from "react";
import Controls from "../../../../ui/FormComponents/controls/Controls";
import CreateQuizSettingsForm from "../CreateQuizSettings/CreateQuizSettingsForm";
import QuestionStudentList from "./QuestionStudentList";

const EditQuizSettingsView = () => {
  return (
    <div>
      <CreateQuizSettingsForm />

      <Paper style={{padding: '25px 15px', marginTop: '1rem'}}>
          
      <QuestionStudentList />
      </Paper>
    </div>
  )
  
};

export default EditQuizSettingsView;
