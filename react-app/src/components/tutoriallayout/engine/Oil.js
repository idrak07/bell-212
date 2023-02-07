import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Oil1 from "./Oil1";

const Oil = () => {
  return (
    <div>
      {/* <Navlay></Navlay> */}
      <div>
        <Container>
          <Row>
            <Col xs={12}>
              <Oil1></Oil1>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Oil;
