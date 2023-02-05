import React from "react";
import { Outlet } from "react-router";
import ElecSidebar from "../../../tutoriallayout/electriccomp/ElecSidebar";

const ElectricComponentTutorialLayout = () => {
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "1fr 3fr", gap: "20px" }}
    >
      <div>
        <ElecSidebar />
      </div>

      <div
        style={{
          border: "1px solid lightgrey",
          borderRadius: "4px",
          background: "#fff",
        }}
      >
        <div style={{ padding: "5px" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ElectricComponentTutorialLayout;
