import React, { useState, Component, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const InstSide = () => {

  return (
    <div>
      <ListGroup>
          <ListGroup.Item action variant="light">
            <Link  style={{display: "block", textDecoration: "none"}}
            className="text-secondary" to="/interactive-tutorial/instruments/overview">Overview</Link>
          </ListGroup.Item>
          <ListGroup.Item action variant="light">
            <Link  style={{display: "block", textDecoration: "none"}}
            className="text-secondary" to="/interactive-tutorial/instruments/finst">Flight instruments</Link>
          </ListGroup.Item>
          <ListGroup.Item action variant="light">
            <Link  style={{display: "block", textDecoration: "none"}}
            className="text-secondary" to="/interactive-tutorial/instruments/navinst">Navigation Instruments</Link>
          </ListGroup.Item>
          <ListGroup.Item action variant="light">
            <Link  style={{display: "block", textDecoration: "none"}}
            className="text-secondary" to="/interactive-tutorial/instruments/engp">Engine Propulsion</Link>
          </ListGroup.Item>
          <ListGroup.Item action variant="light">
            <Link  style={{display: "block", textDecoration: "none"}}
            className="text-secondary" to="/interactive-tutorial/instruments/ffi">Fuel Flow Indicator</Link>
          </ListGroup.Item>
          <ListGroup.Item action variant="light">
            <Link  style={{display: "block", textDecoration: "none"}}
            className="text-secondary" to="/interactive-tutorial/instruments/hydra">Hydraulic Instruments</Link>
          </ListGroup.Item>
          <ListGroup.Item action variant="light">
            <Link  style={{display: "block", textDecoration: "none"}}
            className="text-secondary" to="/interactive-tutorial/instruments/missint">Miscellaneous Instruments</Link>
          </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default InstSide;
