import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import file from "../web/docs/electric.pdf";

const Elecoveriew = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div>
      {/* <Navbars></Navbars> */}
      <div>
        <Container>
          {/* <div className='row justify-content-center'>
              <div className='col-12 my-5'><h2>Contents- Air frame</h2></div>
            </div> */}
          <Row>
            {/* <Col xs={6} md={3}>
              <ElecSidebar></ElecSidebar>
            </Col> */}
            <Col xs={12}>
              <div className="pdf-container exra">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
                  <Viewer
                    fileUrl={file}
                    plugins={[defaultLayoutPluginInstance]}
                    initialPage={0}
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

export default Elecoveriew;
