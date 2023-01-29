import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { SERVER_URL } from "../../../../constants";
import useFetch from "../../../../hooks/useFetch";
import CustomButton from "../../../../ui/CustomButton";
import { convertMsToDate } from "../../../../util";
import AdminLayout from "../../../layouts/AdminLayout";
import AddEditUserForm, {
  userInitialFormValues,
} from "../AddUserPage/AddEditUserForm";

const EditUserPage = () => {
  const navigate = useNavigate();
  const params = useParams();

  const { id } = params;
  const [{ response, error, isLoading }, doFetch] = useFetch(
    `${SERVER_URL}/users/${id}`
  );

  useEffect(() => {
    doFetch({
      method: "GET",
    });
    console.log(response);
  }, []);

  return (
    <AdminLayout>
      <div
        style={{
          padding: "18px",
          marginLeft: "15px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: "1rem",
          }}
        >
          <Typography variant="h6" id="tableTitle" component="div">
            Edit User
          </Typography>
          <CustomButton
            style={{
              padding: "5px 14px",
            }}
            onClick={() => navigate("/users")}
          >
            Go Back
          </CustomButton>
        </div>

        {isLoading ? (
          "Loading user data.."
        ) : error ? (
          "Error getting user data"
        ) : response && (
          <AddEditUserForm isEdit={true} editData={{
            ...response, dob: new Date(convertMsToDate(response.dob)).toISOString().slice(0, 10)
          }} />
        )}
      </div>
    </AdminLayout>
  );
};

export default EditUserPage;
