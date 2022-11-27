import { Typography } from "@mui/material";
import React from "react";
import AdminLayout from "../../layouts/AdminLayout";
import QuizSettingsList from "./QuizSettingsList";

const QuizSettings = () => {
  return (
    <AdminLayout>
      <div style={{
        padding: '18px',
        marginLeft: '15px',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div>
          <Typography
            variant="h5"
            id="tableTitle"
            component="div"
          >
            Quiz Settings
          </Typography>
        </div>
        <div style={{
            fontSize: '1.4rem',
            // borderBottom: '1px solid lightgrey',
            paddingBottom: '10px',
            borderBottom: '1px solid lightgrey',
            paddingBottom: '8px',
            marginBottom: '10px',
          }}></div>

        <QuizSettingsList />
      </div>
    </AdminLayout>
  )
};

export default QuizSettings;
