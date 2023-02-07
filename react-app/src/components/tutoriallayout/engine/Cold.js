import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Cold1 from "./Cold1";

const Cold = () => {
  return (
    <div>
      {/* <Navlay></Navlay> */}
      <div>
        <Container>
          <Row>
            <Col xs={12}>
              <Cold1></Cold1>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Cold;
