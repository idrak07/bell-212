import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import useLocalStorage from "../../hooks/useLocalStorage";
// import AdminLayout from '../layouts/AdminLayout';
import Dashboard from "./Dashboard";
import Menu from "./Menu";

const Ui = () => {
  const [authenticatedUser, setAuthenticatedUser] = useLocalStorage("user");
  const navigate = useNavigate();
  useEffect(() => {
    if (!authenticatedUser) {
      navigate("/auth");
      // <RedirectComp to="/auth" />;
    }
  }, []);

  return (
    <>
      <Menu />
      <Dashboard />
    </>
  );
};

export default Ui;
