import React, { useState, Component, useEffect } from "react";
import Navlay from "../Navlay";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import file from "../web/docs/electric.pdf";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import ElecSidebar from "./ElecSidebar";
import Navbars from './../../Home/Navbars';

const Heat = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div>
      <div>
        <Container>
          <Row>
            <Col xs={12}>
            <div className="pdf-container exra">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
                  <Viewer
                    fileUrl={file}
                    plugins={[defaultLayoutPluginInstance]}
                    initialPage={35}
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

export default Heat;
