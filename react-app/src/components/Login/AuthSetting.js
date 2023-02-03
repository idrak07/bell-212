import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ToastContainer } from "react-toastify";
import useLocalStorage from "../../hooks/useLocalStorage";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const AuthSetting = () => {
  const navigate = useNavigate();
  const [authenticatedUser, setAuthenticatedUser] = useLocalStorage('user');
  console.log(authenticatedUser)

  useEffect(()=> {
    if(authenticatedUser) {
      navigate('/dashboard')
    }
  }, [])

  const [currentPage, setCurrentPage] = useState('Login')

  return (
    <div>
      <ToastContainer />
      {currentPage === 'Login' ? (
        <LoginForm setCurrentPage={setCurrentPage}  />
      ) : (
        <SignupForm setCurrentPage={setCurrentPage} />
      )}
        

    </div>
  );
};

export default AuthSetting;
