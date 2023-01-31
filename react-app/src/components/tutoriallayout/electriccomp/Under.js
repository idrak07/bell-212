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

const Under = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div>
      <Navbars></Navbars>
      <div>
        <Container>
          <div className='row justify-content-center'>
              <div className='col-12 my-5'><h2>Contents- Air frame</h2></div>
            </div>
          <Row>
            <Col xs={6} md={3}>
              <ElecSidebar></ElecSidebar>
            </Col>
            <Col xs={12} md={9}>

            <div className="pdf-container exra">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
                  <Viewer
                    fileUrl={file}
                    plugins={[defaultLayoutPluginInstance]}
                    initialPage={40}
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

export default Under;
