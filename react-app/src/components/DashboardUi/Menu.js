import React, {useEffect, useState} from 'react';
import firebase from "firebase/app";
import "firebase/auth";

const Menu = () => {
  const user = firebase.auth().currentUser;
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
    useEffect(() => {
        
    if (user !== null) {
      const displayName = user.email;
      setName(displayName)
    }
    
    },[])
    return (
        <div>
<aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <a href="/" className="brand-link">
    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">Admin</span>
  </a>
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src='' className="img-circle elevation-2" alt='' />
      </div>
      <div className="info">
        <a href="#" className="d-block"> {name}</a>
      </div>
    </div>
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
        <li className="nav-item has-treeview menu-open">
          <a href="#" className="nav-link active">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Dashboard
             
            </p>
          </a>
        
        </li>
        <li className="nav-item">
          <a href="/profile" className="nav-link">
            <i className="nav-icon fas fa-th" />
            <p>
              My profile
            
            </p>
          </a>
        </li>
        <li className="nav-item has-treeview">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-edit" />
            <p>
              Start Tutorial
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="pages/forms/general.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Engine</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/forms/general.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>AirFrame</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/forms/general.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Electric Components</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/forms/general.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Instruments</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/forms/general.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Radio</p>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item has-treeview">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-table" />
            <p>
              Take a Quiz
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="/eq" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Engine</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="/eq" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>AirFrame</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="/eq" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Electric Components</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="/eq" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Instruments</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="/eq" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Radio</p>
              </a>
            </li>
          </ul>
        </li>
       
        <li className="nav-item has-treeview">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-book" />
            <p>
              LeaderBoard
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="pages/forms/general.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Engine</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/forms/general.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>AirFrame</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/forms/general.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Electric Components</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/forms/general.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Instruments</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/forms/general.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Radio</p>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item has-treeview">
          <a href="/" className="nav-link">
            <i className="nav-icon far fa-plus-square" />
            <p>
              Extras
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="/qn" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Add question</p>
              </a>
            </li>
            {/* <li className="nav-item">
              <a href="pages/examples/register.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Register</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/forgot-password.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Forgot Password</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/recover-password.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Recover Password</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/lockscreen.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Lockscreen</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/legacy-user-menu.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Legacy User Menu</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/language-menu.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Language Menu</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/404.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Error 404</p>
              </a>
            </li> */}
            {/* <li className="nav-item">
              <a href="pages/examples/500.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Error 500</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/pace.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Pace</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/blank.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Blank Page</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="starter.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Starter Page</p>
              </a>
            </li> */}
          </ul>
        </li>
        
        
        
            
             
            
      
      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>
</div>

      )
};

export default Menu;