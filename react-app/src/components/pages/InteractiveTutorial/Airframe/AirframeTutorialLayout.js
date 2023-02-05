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
                  <MenuItem value={10}>
                    <Link to="/interactive-tutorial/airframe/overview">Overview</Link>
                  </MenuItem>
                  <MenuItem value={20}>
                    <Link to="/interactive-tutorial/airframe/states">States of Overhauling</Link>
                  </MenuItem>
                  <MenuItem value={30}>
                    <Link to="/interactive-tutorial/airframe/process">Process of Overhauling</Link>
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </ListGroup.Item>
          <ListGroup.Item action variant="light">
            <Link to="/interactive-tutorial/airframe/publication">Publication</Link>
          </ListGroup.Item>
          <ListGroup.Item action variant="light">
            <Link to="/interactive-tutorial/airframe/Airworthiness">Airworthiness</Link>
          </ListGroup.Item>
          <ListGroup.Item action variant="light">
            <Link to="/interactive-tutorial/airframe/Schedule">Components Overhaul Schedule</Link>
          </ListGroup.Item>
          <ListGroup.Item action variant="light">
            <Link to="/interactive-tutorial/airframe/gdata">General Data</Link>
          </ListGroup.Item>
          <ListGroup.Item action variant="light">
            <Link to="/interactive-tutorial/airframe/mrotor"> Main Rotor</Link>
          </ListGroup.Item>
          <ListGroup.Item action variant="light">
            <Link to="/interactive-tutorial/airframe/trotor">Tail Rotor</Link>
          </ListGroup.Item>
          <ListGroup.Item action variant="light">
            <Link to="/interactive-tutorial/airframe/Transmission">Transmission Assembly</Link>
          </ListGroup.Item>
          <ListGroup.Item action variant="light">
            <Link to="/interactive-tutorial/airframe/Gearbox">Gearbox</Link>
          </ListGroup.Item>
          <ListGroup.Item action variant="light">
            <Link to="/interactive-tutorial/airframe/train">Power Train</Link>
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
