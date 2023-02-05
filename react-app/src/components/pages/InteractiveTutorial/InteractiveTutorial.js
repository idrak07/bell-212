import React from "react";
import { Outlet, useLocation } from "react-router";
import AdminLayout from "../../layouts/AdminLayout";

const InteractiveTutorial = () => {
  const location = useLocation();
  const getPathName = (str) => location.pathname.includes(str);
  // const contentOf =
  const topic = getPathName("engine")
    ? "Engine"
    : getPathName("airframe")
    ? "Airframe"
    : getPathName("electric")
    ? "Electric Components"
    : getPathName("instruments")
    ? "Instruments"
    : getPathName("radio")
    ? "Radio"
    : "Not matched";
  return (
    <>
      <AdminLayout>
        <div style={{ padding: "20px" }}>
          <h4 style={{ marginBottom: "15px" }}>Contents - {topic}</h4>
          <Outlet />
        </div>
      </AdminLayout>
    </>
  );
};

export default InteractiveTutorial;
