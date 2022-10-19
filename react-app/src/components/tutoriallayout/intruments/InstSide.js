import React, { useState, Component, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const InstSide = () => {

  return (
    <div>
      
        
              <br />
              <h4>Contents</h4>
              <br />
              <ListGroup>
                <ListGroup.Item action variant="success">
                  <Link to="/instoverview">Overview</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="danger">
                  <Link to="/finst">Flight instruments</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="warning">
                  <Link to="/navinst">Navigation Instruments</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="primary">
                  <Link to="/engp">Engine Propulsion</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="dark">
                  <Link to="/ffi">Fuel Flow Indicator</Link>
                </ListGroup.Item>

                <ListGroup.Item action variant="success">
                  <Link to="/hydra">Hydraulic Instruments</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="success">
                  <Link to="/missint">Miscellaneous Instruments</Link>
                </ListGroup.Item>
              </ListGroup>
    </div>
  );
};

export default InstSide;
