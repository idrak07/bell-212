import { Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import CustomButton from "../../../ui/CustomButton";
import AdminLayout from "../../layouts/AdminLayout";
import QuizSettingsList from "./QuizSettingsList";

const QuizSettings = () => {
  const navigate = useNavigate();
  return (
    <AdminLayout>
      <div
        style={{
          padding: "8px",
          marginLeft: "8px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" id="tableTitle" component="div">
            Quizzes List
          </Typography>

          <div>
            {/* <CustomButton
              onClick={() => {
                navigate("/quiz-settings/create");
              }}
              style={{
                padding: "8px 22px",
              }}
            >
              Create Quiz
            </CustomButton> */}
          </div>
        </div>

        <div
          style={{
            fontSize: "1.4rem",
            // borderBottom: '1px solid lightgrey',
            paddingBottom: "8px",
            marginBottom: "10px",
          }}
        ></div>

        <QuizSettingsList />
      </div>
    </AdminLayout>
  );
};

export default QuizSettings;
