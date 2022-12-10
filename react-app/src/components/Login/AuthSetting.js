import React, {useEffect, useState} from 'react';
import NavBar from '../layouts/NavBar';
import Login from './SignIn';
import SignUp from './SignUp';
import Customer from '../screens/Customer';
import Ui from '../DashboardUi/Ui';
import { Paper,makeStyles } from '@material-ui/core';
import LoginForm from './LoginForm';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))



const AuthSetting = () => {
  const classes = useStyles();

  const [user, setUser] = useState('');
  const [toggleForm, setToggleForm] =  useState(true);
  const formMode = () => {
    setToggleForm(!toggleForm);
  }
  const userState = () => {
    const data = localStorage.getItem('user');
    const us = data !== null ? JSON.parse(data) : null;
    setUser(us);
  }

  useEffect(() => {
    userState();
  }, []);
    return (
        <div>
                 {user !== null ? (
        <>
        
        <NavBar setUserState={() => setUser(null)}/>
        {/* <Customer/> */}
        <Ui />
        </>
      ) : (
         <>
         <LoginForm loggedIn={(user) => setUser(user)}  />
          {/* {
            toggleForm ? 
              (<Login 
                loggedIn={(user) => setUser(user)} 
                toggle={() => formMode()}/>
              ) 
              : ( 
              <SignUp loggedIn={(user) => setUser(user)} 
              toggle={() => formMode()}/>
              )
            } */}
         </>
      )}  
        </div>
    );
};

export default AuthSetting;