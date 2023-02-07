import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Tirbine1 from "./Tirbine1";

const Turbine = () => {
  return (
    <div>
      {/* <Navlay></Navlay> */}
      <div>
        <Container>
          <Row>
            <Col xs={12}>
              <Tirbine1></Tirbine1>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Turbine;
