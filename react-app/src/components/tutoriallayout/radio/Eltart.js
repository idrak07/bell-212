import React, { useState, Component, useEffect } from "react";
import Navlay from "../Navlay";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import file from "../web/docs/radio.pdf";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Radside from "./Radside";

const Eltart = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div>
      <Navlay></Navlay>
      <div>
        <Container>
          <Row>
            <Col xs={6} md={4}>
            <Radside></Radside>
            </Col>
            <Col xs={12} md={8}>

              <div className="pdf-container exra">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
                  <Viewer
                    fileUrl={file}
                    plugins={[defaultLayoutPluginInstance]}
                    initialPage={22}
                  ></Viewer>
                </Worker>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Eltart;
