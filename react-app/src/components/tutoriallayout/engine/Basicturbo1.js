import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Basicturbo from "./Basicturbo";

const Basicturbo1 = () => {
  return (
    <div>
      {/* <Navlay></Navlay> */}
      <div>
        <Container>
          <Row>
            <Col xs={12} >
              <Basicturbo></Basicturbo>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Basicturbo1;
