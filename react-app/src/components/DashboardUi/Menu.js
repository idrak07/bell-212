import "firebase/auth";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";

export const quizTopics = [
  "Engine",
  "Air Frame",
  "Electronic Components",
  "Instruments",
  "Radio",
];

const Menu = () => {
  const [authenticatedUser, setAuthenticatedUser] = useLocalStorage("user");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authenticatedUser) {
      navigate('/auth');
      // <RedirectComp to="/auth" />;
    }
  }, [authenticatedUser]);

  const handleClose = () => {
    localStorage.removeItem("user");
    // props.setUserState();
    setAnchorEl(null);
    window.location.href = "/auth";
  };

  return (
    <div>
      <aside className="main-sidebar sidebar-light elevation-4">
        {/* Brand Logo */}
        <a
          href="/auth"
          className="brand-link"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/bell-logo2.jpg"
            alt="AdminLTE Logo"
            style={{
              width: "40px",
              objectFit: "cover",
            }}
          />
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 d-flex">
            <div className="image">
              <img src="" className="img-circle elevation-2" alt="" />
            </div>
            <div className="info">
              <a
                href="/profile"
                className="d-block"
                style={{ textDecoration: "none", color: "black" }}
              >
                <b>
                  {authenticatedUser?.firstName +
                    " " +
                    authenticatedUser?.lastName}
                </b>
              </a>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
              <li className="nav-item has-treeview menu-open">
                <Link className="nav-link" to={"/dashboard/"}>
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>Dashboard</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/profile/"}>
                  <i className="nav-icon fas fa-th" />
                  <p>My profile</p>
                </Link>
              </li>
              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-edit" />
                  <p>
                    Video Tutorial
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  {quizTopics.map((item) => {
                    return (
                      <li className="nav-item" key={item}>
                        <Link to={"/tutorial/" + item}>
                          <a className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>{item}</p>
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>

              {authenticatedUser.authority === "ROLE_ADMIN" && (
                <li className="nav-item has-treeview">
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-table" />
                    <p>
                      Set Quiz Questions
                      <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    {quizTopics.map((item) => {
                      return (
                        <li className="nav-item" key={item}>
                          <Link to={"/quiz/" + item}>
                            <a className="nav-link">
                              <i className="far fa-circle nav-icon" />
                              <p>{item}</p>
                            </a>
                          </Link>
                        </li>
                      );
                    })}
                    {/* <li className="nav-item">
  
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
              </li> */}
                  </ul>
                </li>
              )}

              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-book" />
                  <p>
                    LeaderBoard
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  {quizTopics.map((item) => {
                    return (
                      <li className="nav-item" key={item}>
                        <Link to={"/leaderboard/" + item}>
                          <a className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>{item}</p>
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                  {/* <li className="nav-item">
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
            </li> */}
                </ul>
              </li>
              {authenticatedUser.authority === "ROLE_ADMIN" && (
                <>
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
                    </ul>
                  </li>
                </>
              )}

              {authenticatedUser.authority === "ROLE_ADMIN" && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/quiz-settings/"}>
                      <i className="nav-icon fas fa-th" />
                      <p>Quiz Settings</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/users/"}>
                      <i className="nav-icon fas fa-th" />
                      <p>Users</p>
                    </Link>
                  </li>
                </>
              )}

              <li className="nav-item">
                <a href="/quiz-list" className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p>Take a Quiz</p>
                </a>
              </li>

              <li className="nav-item">
                <a onClick={handleClose} className="nav-link" href="#">
                  <i className="nav-icon fas fa-th" />
                  <p>Sign out</p>
                </a>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </div>
  );
};

export default Menu;
