import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// Import the main Viewer component
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
// default layout plugin
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// Import styles of default layout plugin
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const style = {
  top: 0,
  left: 0,
  width: "50vw",
  height: "50vh",
};
const Tail = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const [page, setPage] = useState(1);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      {/* <Navlay></Navlay> */}
      <div>
        <Container>
          <Row>
            {/* <Col xs={6} md={4}>
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
            </Col> */}
            <Col xs={12}>
              {/* <br />
              <br />
              <br /> */}

              <div class="ui basic segment exra">
                <div class="ui top attached pointing secondary menu">
                  <a class="active item" data-tab="first">
                    Tail Rotor System
                  </a>
                  <a class="item" data-tab="second">
                    3D Model
                  </a>
                </div>
                <div
                  class="ui bottom attached active basic tab segment"
                  data-tab="first"
                >
                  <p>
                    The tail rotor control system is used for directional
                    control ie turning to the left or to the right and it also
                    act as anti-torque control to counteract the main rotor
                    torque. It consists of tail rotor hub assembly, two tail
                    rotor blades, crosshead assembly with counter weights and
                    two pitch links.Two tail rotor blades are attached with tail
                    rotor hub assembly and installed on the tail rotor gearbox
                    output shaft. The crosshead assembly is installed on the TGB
                    output shaft over the tail rotor hub assembly and two pitch
                    links are attached with two pitch horns in the tail rotor
                    hub assembly.
                  </p>
                </div>
                <div
                  class="ui bottom attached basic tab segment"
                  data-tab="second"
                >
                  {/* <p align="middle">
    [Mouse Click to rotate, Scroll to zoom in and out, Shift + Click to move the model]
  <iframe id="canvas" src="models/viewstl.html?model=tailrotor.stl" style="height: 80vh; width: 100%; border: 0px" scrolling="no">
    </iframe></p> */}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Tail;
