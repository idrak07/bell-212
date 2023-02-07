import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

const EngineTutorialLayout = () => {
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "1fr 3fr", gap: "20px" }}
    >
      <div>
        <ListGroup>
          <ListGroup.Item action variant="light">
            <Link to="/interactive-tutorial/engine/overview" style={{display: "block"}}>Overview</Link>
          </ListGroup.Item>
          <ListGroup.Item action variant="light">
            <Link to="/interactive-tutorial/engine/basic" style={{display: "block"}}>
              Basic Turboshaft Operation
            </Link>
          </ListGroup.Item>
          <ListGroup.Item action variant="light">
            <Link to="/interactive-tutorial/engine/cold" style={{display: "block"}}>Cold Section</Link>
          </ListGroup.Item>
          <ListGroup.Item action variant="light">
            <Link to="/interactive-tutorial/engine/hot" style={{display: "block"}}>Hot Section</Link>
          </ListGroup.Item>
          <ListGroup.Item action variant="light">
            <Link to="/interactive-tutorial/engine/turbine" style={{display: "block"}}>Compressor Turbine</Link>
          </ListGroup.Item>
          <ListGroup.Item action variant="light">
            <Link to="/interactive-tutorial/engine/oil" style={{display: "block"}}> Oil System</Link>
          </ListGroup.Item>
        </ListGroup>
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

export default EngineTutorialLayout;
