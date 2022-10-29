import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import Menu from '../DashboardUi/Menu'
import NavBar from './NavBar';

const AdminLayout = ({children}) => {
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
      <NavBar setUserState={() => setUser(null)}/>

      <Menu />

      <div className='content-wrapper'>
        {children}
      </div>
    </div>
  )
}

export default AdminLayout