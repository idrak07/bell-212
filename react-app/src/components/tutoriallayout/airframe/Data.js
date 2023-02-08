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
const Data = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const [page, setPage] = useState(1);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <div>
        <Container>
          <Row>
            <Col xs={12}>
              <div class="ui basic padded segment exra px-5">
                <h1 class="ui header mt-3 mb-5">General Data</h1>
                <table class="ui celled table">
                  <thead>
                    <tr>
                      <th>Attribute</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-label="Attribute">
                        Overall length (M/R fore & aft and T/R horizontal)
                      </td>
                      <td data-label="Value">41 Ft 8.17 In</td>
                    </tr>
                    <tr>
                      <td data-label="Attribute">
                        Fuselage length (Nose to T/R Gearbox)
                      </td>
                      <td data-label="Value">57 Ft 3.25 In</td>
                    </tr>
                    <tr>
                      <td data-label="Attribute">Width</td>
                      <td data-label="Value">9 Ft 0 In</td>
                    </tr>
                    <tr>
                      <td data-label="Attribute">Landing Gear Treat</td>
                      <td data-label="Value">9 Ft 4.48 In</td>
                    </tr>
                    <thead>
                      <tr>
                        <th>Main Rotor:</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tr>
                      <td data-label="Attribute">Number of blade</td>
                      <td data-label="Value">Two</td>
                    </tr>
                    <tr>
                      <td data-label="Attribute">Diameter</td>
                      <td data-label="Value">48 Ft</td>
                    </tr>
                    <tr>
                      <td data-label="Attribute">
                        Chord (Leading to trailing edge)
                      </td>
                      <td data-label="Value">48 23.38 In</td>
                    </tr>
                    <tr>
                      <td data-label="Attribute">Disc Area</td>
                      <td data-label="Value">1809 Sq Ft</td>
                    </tr>
                    <tr>
                      <td data-label="Attribute">Engine to Main Rotor Ratio</td>
                      <td data-label="Value">20.37:1</td>
                    </tr>
                    <tr>
                      <td data-label="Attribute">Main Rotor RPM</td>
                      <td data-label="Value">324</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Data;
