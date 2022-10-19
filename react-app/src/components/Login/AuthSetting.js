import React, {useEffect, useState} from 'react';
import NavBar from '../layouts/NavBar';
import Login from './SignIn';
import SignUp from './SignUp';
import Customer from '../screens/Customer';
import Ui from '../DashboardUi/Ui';


const AuthSetting = () => {
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
         {toggleForm ? (<Login loggedIn={(user) => setUser(user)} toggle={() => formMode()}/>) 
         : ( <SignUp toggle={() => formMode()}/>)}
        
     </>
      )}  
        </div>
    );
};

export default AuthSetting;