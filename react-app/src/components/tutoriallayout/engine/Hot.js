import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Hot1 from "./Hot1";

const Hot = () => {
  return (
    <div>
      <div>
        <Container>
          <Row>
            <Col xs={12}>
              <Hot1></Hot1>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Hot;
