import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Engine from "./engine/Engine";

const Sidebar = () => {
  return (
    <div>
      <Container>
        <Row>
          {/* <Col xs={6} md={4}>
      <br/>
      <h4>Contents</h4>
      <br/>
      <ListGroup>
      
      <ListGroup.Item action variant="secondary">
      <Link to="/layout">Overview</Link>
        
      </ListGroup.Item>
      <ListGroup.Item action variant="success">
      <Link to="/basic">Basic Turboshaft Operation</Link>
        
      </ListGroup.Item>
      <ListGroup.Item action variant="danger">
      <Link to="/cold">Cold Section</Link>
        
      </ListGroup.Item>
      <ListGroup.Item action variant="warning">
      <Link to="/hot">Hot Section</Link>
        
      </ListGroup.Item>
      <ListGroup.Item action variant="primary">
      <Link to="/turbine"> Compressor Turbine</Link>
      
      </ListGroup.Item>
      <ListGroup.Item action variant="dark">
      <Link to="/oil">  Oil System</Link>
       
      </ListGroup.Item>
    </ListGroup>
        </Col> */}
          <Col xs={12}>
            {/* <br/>
        <br/>
        <br/>
        <br/> */}

            <Engine></Engine>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Sidebar;
