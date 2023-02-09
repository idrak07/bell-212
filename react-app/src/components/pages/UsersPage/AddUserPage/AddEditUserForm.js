import { Paper } from "@material-ui/core";
import React from "react";

import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SERVER_URL } from "../../../../constants";
import useFetch from "../../../../hooks/useFetch";
import Controls from "../../../../ui/FormComponents/controls/Controls";
import { Form, useForm } from "../../../../ui/FormComponents/useForm";
import styles from "./UserForm.module.css";

export const allBloodGroups = [
  { id: "A_POSITIVE", title: "A-positive (A+)" },
  { id: "A_NEGATIVE", title: "A-negative (A-)" },
  { id: "B_POSITIVE", title: "B-positive (B+)" },
  { id: "B_NEGATIVE", title: "B-negative (B-)" },
  { id: "AB_POSITIVE", title: "AB-positive (AB+)" },
  { id: "AB_NEGATIVE", title: "AB-negative (AB-)" },
  { id: "O_POSITIVE", title: "O-positive (O+)" },
  { id: "O_NEGATIVE", title: "O-negative (O-)" },
];

export const allRoles = [
  {
    id: "ROLE_ADMIN",
    title: "Admin",
  },
  {
    id: "ROLE_USER",
    title: "User",
  },
];

export const allUnitList = [
  { title: "BAF BASE BASHAR", id: "BAF_BASE_BASHAR" },
  { title: "BAF BASE BANGABANDHU", id: "BAF_BASE_BANGABANDHU" },
  { title: "BAF BASE MATIUR", id: "BAF_BASE_MATIUR" },
  { title: "BAF BASE SHEIKH HASINA", id: "BAF_BASE_SHEIKH_HASINA" },
  { title: "BAF BASE ZAHUR", id: "BAF_BASE_ZAHUR" },
  { title: "BAF BASE PAHARKANCHANPUR", id: "BAF_BASE_PAHARKANCHANPUR" },
];

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

export const userInitialFormValues = {
  bdNo: "",
  svcNo: "",
  firstName: "",
  lastName: "",
  branch: "",
  unit: "",
  dob: "",
  bloodGroup: "",
  phoneNo: "",
  email: "",
  password: "",
  // photo: "",
  authority: "",
  activated: true,
};

export default function AddEditUserForm({
  isEdit = false,
  isProfileView = false,
  editData,
  isSignup = false,
  setCurrentPage,
}) {
  const navigate = useNavigate();
  console.log(editData);
  const validate = (fieldValues = values) => {
    console.log(fieldValues);
    let temp = { ...errors };
    // check validation for all input fileds
    Object.keys(fieldValues).forEach((key) => {
      if (
        fieldValues[key] ||
        key == "imageKey" ||
        (isSignup && key == "authority")
      ) {
        temp[key] = "";
      } else {
        temp[key] = "This field is required";
      }
    });

    if ("email" in fieldValues)
      temp.email =
        fieldValues.email && /$^|.+@.+..+/.test(fieldValues.email)
          ? ""
          : "Email is not valid.";
    if ("phoneNo" in fieldValues)
      temp.phoneNo =
        fieldValues.phoneNo.length < 11 ? "Minimum 11 numbers required." : "";

    setErrors({
      ...temp,
    });
    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(isEdit ? editData : userInitialFormValues, true, validate);

  const [{ response, error, isLoading }, addUser] = useFetch(
    `${SERVER_URL}/users`
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    console.log(validate());
    if (!validate()) {
      // const { email, password } = values;
      // handleSignUp(email, password);
      return;
    }
    try {
      if (isEdit) {
        const res = await addUser({
          method: "PUT",
          mode: "cors",
          data: {
            ...values,
          },
        });
      } else if (isSignup) {
        const res = await addUser({
          method: "POST",
          mode: "cors",
          data: {
            ...values,
            authority: "ROLE_USER",
            activated: false,
          },
        });
      } else {
        const res = await addUser({
          method: "POST",
          mode: "cors",
          data: {
            ...values,
          },
        });
      }
      resetForm();
      if (isProfileView) {
        toast.success("Profile updated successfully");
        return;
      } else if (isEdit) {
        toast.success("Profile Edited Successfully");
      } else if (isSignup) {
        setCurrentPage("Login");
        return;
      } else {
        toast.success("Profile Created Successfully");
      }
      navigate("/users");
    } catch (e) {
      toast.error("Something Went wrong");
    }
  };

  const handleSignUp = (email, password) => {
    // fire
    //   .auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((response) => {
    //     if (response) {
    //       props.toggle();
    //       toast.success("User Registered Successfully");
    //     }
    //   })
    //   .catch((error) => {
    //     switch (error.code) {
    //       case "auth/email-already-in-use":
    //         toast.error(error.message);
    //         break;
    //       case "auth/invalid-email":
    //         toast.error(error.message);
    //         break;
    //       case "auth/weak-password":
    //         toast.error(error.message);
    //         break;
    //     }
    //   });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <ToastContainer />
        <Paper style={{ padding: "25px 15px" }}>
          <div className={styles.container}>
            <div className={styles.item}>
              <Controls.Input
                id="bdNo"
                type="text"
                placeholder={"Enter BD No."}
                name="bdNo"
                label="BD No."
                value={values.bdNo}
                onChange={handleInputChange}
                error={errors.bdNo}
                disabled={isProfileView}
              />
              <Controls.Input
                id="svcNo"
                type="text"
                placeholder={"Enter SVC Id No."}
                label="SVC ID No."
                name="svcNo"
                value={values.svcNo}
                onChange={handleInputChange}
                error={errors.svcNo}
                disabled={isProfileView}
              />
              <Controls.Input
                id="firstName"
                type="text"
                placeholder={"Enter first name"}
                name="firstName"
                label="First Name"
                value={values.firstName}
                onChange={handleInputChange}
                error={errors.firstName}
                disabled={isProfileView}
              />
              <Controls.Input
                id="lastName"
                type="text"
                placeholder={"Enter second name"}
                name="lastName"
                label="Second Name"
                value={values.lastName}
                onChange={handleInputChange}
                error={errors.lastName}
                disabled={isProfileView}
              />
              <Controls.Input
                id="branch"
                type="text"
                placeholder={"Enter Branch Name"}
                name="branch"
                label="Branch"
                value={values.branch}
                onChange={handleInputChange}
                error={errors.branch}
                disabled={isProfileView}
              />
              <Controls.Select
                name="unit"
                label="Unit"
                value={values.unit}
                onChange={handleInputChange}
                options={allUnitList}
                error={errors.unit}
                disabled={isProfileView}
              />
            </div>
            <div className={styles.item}>
              <Controls.Input
                id="dob"
                type="date"
                name="dob"
                label="Date of Birth"
                value={values.dob}
                onChange={handleInputChange}
                error={errors.dob}
                disabled={isProfileView}
              />
              <Controls.Select
                name="bloodGroup"
                label="Blood Group"
                value={values.bloodGroup}
                onChange={handleInputChange}
                options={allBloodGroups}
                error={errors.bloodGroup}
                disabled={isProfileView}
              />

              <Controls.Input
                id="phoneNo"
                type="number"
                placeholder={"Enter phone number"}
                name="phoneNo"
                label="Phone No."
                value={values.phoneNo}
                onChange={handleInputChange}
                error={errors.phoneNo}
              />
              <Controls.Input
                id="email"
                type="email"
                placeholder={"Enter email"}
                name="email"
                label="Email"
                value={values.email}
                onChange={handleInputChange}
                error={errors.email}
              />
              {!isEdit && (
                <Controls.Input
                  id="password"
                  type="text"
                  placeholder={"Enter second name"}
                  name="password"
                  label="Password"
                  value={values.password}
                  onChange={handleInputChange}
                  error={errors.password}
                />
              )}

              {/* <Controls.Input
                id="photo"
                type="file"
                name="photo"
                label="Photo"
                value={values.photo}
                onChange={handleInputChange}
                error={errors.photo}
              /> */}

              {!isSignup ? (
                <Controls.Select
                  name="authority"
                  label="Authority"
                  value={values.authority}
                  onChange={handleInputChange}
                  options={allRoles}
                  error={errors.authority}
                  disabled={isProfileView}
                />
              ) : (
                <Controls.Input
                  id="hidden"
                  type="text"
                  style={{ opacity: 0, visibility: "hidden" }}
                  disabled
                />
              )}

              {/* <div style={{margin: '0 8px 8px 8px', width: '80%'}}>

                          <label>Upload Photo</label>
                          <br />
                          <input type={'file'} accept={'image'} />
                      </div> */}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "8px",
              marginTop: "8px",
            }}
          >
            <Controls.Button
              type="submit"
              text={`${isProfileView ? "Update Profile" : "Submit"}`}
            />
            {!isProfileView && (
              <Controls.Button
                text="Reset"
                color="default"
                onClick={resetForm}
              />
            )}
          </div>
        </Paper>
      </Form>
    </>
  );
}
