import { Avatar } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router";
import { default as logo } from "../../assets/bell-logo2.jpg";
import { SidebarContext } from "../../context/context.";
import useLocalStorage from "../../hooks/useLocalStorage";
import { stringAvatar } from "../../util/string";
import "./DashboardSidebar.css";
import SidebarItem from "./SidebarItem";

// added more menuItems for testing
export const menuItems = [
  {
    name: "Dashboard",
    exact: true,
    to: "/dashboard",
    iconClassName: "bi bi-speedometer2",
  },
  {
    name: "Video Tutorial",
    exact: true,
    iconClassName: "bi bi-play-btn",
    subMenus: [
      { name: "Engine", to: "/tutorial/Engine" },
      { name: "Air Frame", to: "/tutorial/Air Frame" },
      { name: "Electronic Components", to: "/tutorial/Electronic Components" },
      { name: "Instruments", to: "/tutorial/Instruments" },
      { name: "Radio", to: "/tutorial/Radio" },
    ],
  },
  {
    name: "Set Quiz Questions",
    exact: true,
    iconClassName: "bi bi-puzzle",
    isAdminAccess: true,
    subMenus: [
      { name: "Engine", to: "/quiz/Engine" },
      { name: "Air Frame", to: "/quiz/Air Frame" },
      { name: "Electronic Components", to: "/quiz/Electronic Components" },
      { name: "Instruments", to: "/quiz/Instruments" },
      { name: "Radio", to: "/quiz/Radio" },
    ],
  },
  {
    name: "Leader Board",
    exact: true,
    iconClassName: "bi bi-clipboard-check",
    subMenus: [
      { name: "Engine", to: "/leaderboard/Engine" },
      { name: "Air Frame", to: "/leaderboard/Air Frame" },
      {
        name: "Electronic Components",
        to: "/leaderboard/Electronic Components",
      },
      { name: "Instruments", to: "/leaderboard/Instruments" },
      { name: "Radio", to: "/leaderboard/Radio" },
    ],
  },

  {
    name: "Quiz Settings",
    to: `/quiz-settings`,
    iconClassName: "bi bi-gear",
    isAdminAccess: true,
  },
  { name: "Users", to: `/users`, iconClassName: "bi bi-people", isAdminAccess: true },
  { name: "Quizzes", to: `/quiz-list`, iconClassName: "bi bi-card-list", isOnlyUserAccess: true },
  { name: "Profile", to: `/Profile`, iconClassName: "bi bi-person" },
  { name: "Logout", iconClassName: "bi bi-box-arrow-left" },
];

const DashboardSidebar = (props) => {
  const location = useLocation();
  const [inactive, setInactive] = useContext(SidebarContext);
  const [authUser, _] = useLocalStorage("user");
  useEffect(() => {
    if (location.pathname.includes("interactive-tutorial")) {
      setInactive(true);
    }
  }, [location.pathname]);
  
  let mainMenuItems;
  if(authUser.authority.includes('ROLE_ADMIN')) {
    mainMenuItems = menuItems.filter(i => !i.isOnlyUserAccess)
  } else {
    mainMenuItems = menuItems.filter(i => !i.isAdminAccess)
  }

  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo">
          <img src={logo} alt="bell-212" />
        </div>
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <i class="bi bi-arrow-right-square-fill"></i>
          ) : (
            <i class="bi bi-arrow-left-square-fill"></i>
          )}
        </div>
      </div>

      <div className="divider"></div>

      <div className="main-menu">
        <ul>
          {mainMenuItems.map((menuItem, index) => (
            <SidebarItem
              key={index}
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
              inactive={inactive}
              onClick={(e) => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}

          {/* <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-speedometer2"></i>
              </div>
              <span>Dashboard</span>
            </a>
          </li>
          <MenuItem
            name={"Content"}
            subMenus={[{ name: "Courses" }, { name: "Videos" }]}
          />
          <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-vector-pen"></i>
              </div>
              <span>Design</span>
            </a>
          </li> */}
        </ul>
      </div>

      <div className="side-menu-footer">
        <div className="avatar">
          {/* <img src={user} alt="user" /> */}
          <Avatar
            {...stringAvatar(`${authUser.firstName} ${authUser.lastName}`)}
          />
        </div>
        <div className="user-info">
          <h5>{`${authUser.firstName} ${authUser.lastName}`}</h5>
          <p>{`${authUser.email}`}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
