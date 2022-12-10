
import { Typography } from "@mui/material";
import React from "react";
import CustomButton from '../../../../ui/CustomButton'
import { useNavigate } from "react-router";
import CreateQuizSettingsForm from "./CreateQuizSettingsForm";
import AdminLayout from "../../../layouts/AdminLayout";

const CreateQuizSettings = () => {
  const navigate = useNavigate();
  return (
    <AdminLayout>
      <div style={{
        padding: '18px',
        marginLeft: '15px',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Typography
            variant="h5"
            id="tableTitle"
            component="div"
          >
            Create Quiz
          </Typography>

          <div>
          <CustomButton onClick={() => {navigate(-1)}} style={{
            padding: '8px 22px'
          }}>
              Go Back
          </CustomButton>
        </div>
        </div>
        
        <div style={{
            fontSize: '1.4rem',
            // borderBottom: '1px solid lightgrey',
            paddingBottom: '10px',
            borderBottom: '1px solid lightgrey',
            paddingBottom: '8px',
            marginBottom: '10px',
          }}></div>

        <CreateQuizSettingsForm />
      </div>
    </AdminLayout>
  )
};

export default CreateQuizSettings;
