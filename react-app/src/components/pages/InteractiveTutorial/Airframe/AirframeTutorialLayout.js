import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from "@material-ui/core";
import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

const AirframeTutorialLayout = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "1fr 3fr", gap: "20px" }}
    >
      <div>
        <ListGroup>
          <ListGroup.Item action variant="light">
            <Box sx={{ minWidth: 70 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Introduction to Airframe
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10} style={{display: "block"}}>
                    <Link to="/interactive-tutorial/airframe/overview" style={{display: "block"}}>Overview</Link>
                  </MenuItem>
                  <MenuItem value={20} style={{display: "block"}}>
                    <Link to="/interactive-tutorial/airframe/states" style={{display: "block"}}>States of Overhauling</Link>
                  </MenuItem>
                  <MenuItem value={30} style={{display: "block"}}>
                    <Link to="/interactive-tutorial/airframe/process" style={{display: "block"}}>Process of Overhauling</Link>
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </ListGroup.Item>
          <ListGroup.Item action variant="light">
            <Link to="/interactive-tutorial/airframe/publication" style={{display: "block"}}>Publication</Link>
          </ListGroup.Item>
          <ListGroup.Item action variant="light">
            <Link to="/interactive-tutorial/airframe/Airworthiness" style={{display: "block"}}>Airworthiness</Link>
          </ListGroup.Item>
          <ListGroup.Item action variant="light">
            <Link to="/interactive-tutorial/airframe/Schedule" style={{display: "block"}}>Components Overhaul Schedule</Link>
          </ListGroup.Item>
          <ListGroup.Item action variant="light">
            <Link to="/interactive-tutorial/airframe/gdata" style={{display: "block"}}>General Data</Link>
          </ListGroup.Item>
          <ListGroup.Item action variant="light">
            <Link to="/interactive-tutorial/airframe/mrotor" style={{display: "block"}}> Main Rotor</Link>
          </ListGroup.Item>
          <ListGroup.Item action variant="light">
            <Link to="/interactive-tutorial/airframe/trotor" style={{display: "block"}}>Tail Rotor</Link>
          </ListGroup.Item>
          <ListGroup.Item action variant="light">
            <Link to="/interactive-tutorial/airframe/Transmission" style={{display: "block"}}>Transmission Assembly</Link>
          </ListGroup.Item>
          <ListGroup.Item action variant="light">
            <Link to="/interactive-tutorial/airframe/Gearbox" style={{display: "block"}}>Gearbox</Link>
          </ListGroup.Item>
          <ListGroup.Item action variant="light">
            <Link to="/interactive-tutorial/airframe/train" style={{display: "block"}}>Power Train</Link>
          </ListGroup.Item>
        </ListGroup>
      </div>

      <div style={{ border: "1px solid lightgrey", borderRadius: '4px', background: '#fff' }}>
        <div style={{ padding: "5px" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AirframeTutorialLayout;
