import React, { useEffect, useState } from "react";
import NavBar from "../layouts/NavBar";
import Login from "./SignIn";
import SignUp from "./SignUp";
import Customer from "../screens/Customer";
import Ui from "../DashboardUi/Ui";
import { Paper, makeStyles } from "@material-ui/core";
import LoginForm from "./LoginForm";
import useLocalStorage from "../../hooks/useLocalStorage";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

const AuthSetting = () => {
  const [authenticatedUser, setAuthenticatedUser] = useLocalStorage('user');
  console.log(authenticatedUser)

  return (
    <div>
      {authenticatedUser ? (
        <>
          <NavBar setUserState={() => setAuthenticatedUser(null)} />
          {/* <Customer/> */}
          <Ui />
        </>
      ) : (
        <>
          <LoginForm  />
        </>
      )}
    </div>
  );
};

export default AuthSetting;
