import React, { useState, Component, useEffect } from "react";
import Navlay from "../Navlay";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const ElecSidebar = () => {

  return (
    <div>
              <ListGroup>
                <ListGroup.Item action variant="warning">
                  <Link  style={{ textDecoration: 'none'}} className="text-secondary" to="/elecoverview">Overview</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="warning">
                  <Link  style={{ textDecoration: 'none'}} className="text-secondary" to="/powersupply">Power Supply System</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="warning">
                  <Link  style={{ textDecoration: 'none'}} className="text-secondary" to="/dcpowersupply">DC Power Supply System</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="warning">
                  <Link  style={{ textDecoration: 'none'}} className="text-secondary" to="/acpowersupply">AC Power Supply System</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="warning">
                  <Link  style={{ textDecoration: 'none'}} className="text-secondary" to="/busarng">Bus Arrangements</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="warning">
                  <Link  style={{ textDecoration: 'none'}} className="text-secondary" to="/intlight">Interior Lighting System</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="warning">
                  <Link  style={{ textDecoration: 'none'}} className="text-secondary" to="/extlight">Exterior Lighting System</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="warning">
                  <Link  style={{ textDecoration: 'none'}} className="text-secondary" to="/caution">Caution & Warning System</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="warning">
                  <Link  style={{ textDecoration: 'none'}} className="text-secondary" to="/enginecontrol">Engine Control & Accessories System</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="warning">
                  <Link  style={{ textDecoration: 'none'}} className="text-secondary" to="/flightcontrol">Flight Control System</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="warning">
                  <Link  style={{ textDecoration: 'none'}} className="text-secondary" to="/heating">Heating System</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="warning">
                  <Link  style={{ textDecoration: 'none'}} className="text-secondary" to="/miss">Miscellaneous Electrical System</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="warning">
                  <Link  style={{ textDecoration: 'none'}} className="text-secondary" to="/aircond">Air-conditioning System</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="warning">
                  <Link  style={{ textDecoration: 'none'}} className="text-secondary" to="/undersiling">Under Sling system</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="warning">
                  <Link  style={{ textDecoration: 'none'}} className="text-secondary" to="/hoisting">Hoisting System</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="warning">
                  <Link  style={{ textDecoration: 'none'}} className="text-secondary" to="/nite">Nite-sun SX-16</Link>
                </ListGroup.Item>
              </ListGroup>
    </div>
  );
};

export default ElecSidebar;
