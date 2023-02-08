import React from "react";
import { Outlet } from "react-router";
import Radside from "../../../tutoriallayout/radio/Radside";

const RadioTutorialLayout = () => {
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "1fr 3fr", gap: "20px" }}
    >
      <Radside></Radside>

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

export default RadioTutorialLayout;
