import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import "./DashboardSidebar.css";

const SidebarItem = (props) => {
  const location = useLocation();
  const [user, setUser] = useLocalStorage('user')
  const { name, subMenus, iconClassName, onClick, to, exact } = props;
  const [expand, setExpand] = useState(
    subMenus &&
      subMenus.some((s) => s.to === location.pathname.replace("%20", " "))
  );

  useEffect(() => {
    setExpand(!props.inactive && subMenus &&
      subMenus.some((s) => s.to === location.pathname.replace("%20", " ")))
  }, [props.inactive]);
  const isOneOfSubmenuPage =
    subMenus &&
    subMenus.some((s) => s.to === location.pathname.replace("%20", " "));

  const isMenuActive = location.pathname === to || isOneOfSubmenuPage;

  return (
    <li onClick={props.onClick}>
      <Link
        exact
        to={to ?? "#"}
        onClick={() => {
          if(name === 'Logout') {
            setUser(null);
            window.location.href = '/auth'
            return;
          }
          if (subMenus) {
            setExpand((e) => !e);
          }
        }}
        className={`menu-item ${isMenuActive && "active"}`}
      >
        <div className="menu-icon">
          <i class={iconClassName}></i>
        </div>
        <span>{name}</span>

        {!!subMenus.length && !to && (
          <>
            {expand ? (
              <span style={{ position: "absolute", right: "10px" }}>
                <i class="bi bi-chevron-up"></i>
              </span>
            ) : (
              <span style={{ position: "absolute", right: "10px" }}>
                <i class="bi bi-chevron-down"></i>
              </span>
            )}
          </>
        )}
      </Link>
      {subMenus && subMenus.length > 0 ? (
        <ul className={`sub-menu ${expand && "active"}`}>
          {subMenus.map((menu, index) => (
            <li key={index}>
              <NavLink
                className={`${
                  location.pathname.replace("%20", " ") === menu.to && "active"
                }`}
                to={menu.to}
              >
                {menu.name}
              </NavLink>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default SidebarItem;
