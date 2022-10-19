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
import file from "../web/docs/overhaul-schedule.pdf";
import { StlViewer } from "react-stl-viewer";
import view from "./models/bell212.stl";
import { Worker } from "@react-pdf-viewer/core";
// Import the main Viewer component
import { Viewer } from "@react-pdf-viewer/core";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
// default layout plugin
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// Import styles of default layout plugin
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const style = {
  top: 0,
  left: 0,
  width: "50vw",
  height: "50vh",
};
const Train = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const [page, setPage] = useState(1);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <Navlay></Navlay>
      <div>
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <br />
              <h4>Contents</h4>
              <br />
              <ListGroup>
                <ListGroup.Item action variant="secondary">
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
                          <Link to="/overview">Overview</Link>
                        </MenuItem>
                        <MenuItem value={20}>
                          <Link to="/States">States of Overhauling</Link>
                        </MenuItem>
                        <MenuItem value={30}>
                          <Link to="/process">Process of Overhauling</Link>
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </ListGroup.Item>
                <ListGroup.Item action variant="success">
                  <Link to="/publication">Publication</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="danger">
                  <Link to="/Airworthiness">Airworthiness</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="warning">
                  <Link to="/Schedule">Components Overhaul Schedule</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="primary">
                  <Link to="/gdata">General Data</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="dark">
                  <Link to="/mrotor"> Main Rotor</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="secondary">
                  <Link to="/trotor">Tail Rotor</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="success">
                  <Link to="/Transmission">Transmission Assembly</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="danger">
                  <Link to="/Gearbox">Gearbox</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="warning">
                  <Link to="/train">Power Train</Link>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col xs={12} md={8}>
              <br />
              <br />
              <br />

              <div class="ui basic segment exra">
                <div class="ui top attached pointing secondary menu">
                  <a class="active item" data-tab="first">
                    Powertrain
                  </a>
                  <a class="item" data-tab="second">
                    3D Models
                  </a>
                </div>
                <div
                  class="ui bottom attached active basic tab segment"
                  data-tab="first"
                >
                  <p>
                    To operate the Bell 212 Helicopter, twin engine is used as
                    the power source. The twin engine power is combined in
                    combining gearbox (CGB) it also called reduction gearbox
                    (RGB). From the CGB output shaft (6600 RPM) the power is
                    transmitted to transmission through the main driveshaft to
                    the transmission input quill (input drive gear). Inside the
                    transmission the input drive gear is attached with bevel
                    gear(attached with vertical shaft) where reduction takes
                    place 2.138: l ratio ie 6600 RPM to 3087 RPM and this is the
                    first stage reduction. With vertical shaft upper side lower
                    sun gear is attached and lower planetary gear is attached
                    with it and reduction takes place 3.087:1 ie 3087 RPM to
                    1000 RPM and this is the 2nd stage reduction. Lower
                    planetary gear upper side is attached with upper sun gear
                    upper side is attached with upper planetary gear where
                    reduction takes place 3.087:1 ie 1000 RPM to 324 RPM and
                    this is the 3rd stage reduction. Mast adapter is attached
                    with upper planetary gear and the mast is installed on the
                    mast adapter. Main Rotor hub and blade assembly is installed
                    on the mast upper side. So, when the mast rotates the main
                    rotor also rotate at 324 RPM. The total reduction from
                    engine to main rotor is 20.37:1 ie 6600 RPM to 324 RPM.
                  </p>

                  <p>
                    Again, in the sump case (transmission lower side) tail rotor
                    drive gear is installed which rotates at 4300 RPM. Tail
                    rotor driveshaft are installed with tail rotor drive gear
                    which are also rotate at 4300 RPM transmit the power to the
                    tail rotor gearbox input quill through intermediate gear box
                    (42 degree gear box). Tail rotor gearbox output shaft RPM is
                    1660 RPMie reduction ratio is 2.59:1. The tail rotor hub and
                    blade assembly is installed on output shaft of tail rotor
                    gearbox. So, tail rotor rotate at 1660 RPM and the total
                    reduction is 3.975:1 ie 6600 RPM to 1660 RPM.
                  </p>
                </div>
                <div
                  class="ui bottom attached basic tab segment"
                  data-tab="second"
                >
                  {/* <iframe id="canvas" src="models/powertrain.html" style="height: 80vh; width: 100%; border: 0px" scrolling="no">
    </iframe> */}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Train;
