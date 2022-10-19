import React from 'react';
import Navlay from '../Navlay';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Tirbine1 from './Tirbine1'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Turbine = () => {
    return (
        <div>
        <Navlay></Navlay>
        <div>
       <Container>
  <Row>
  <Col xs={6} md={4}>
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
    </Col>
    <Col xs={12} md={8}>
    <br/>
    <br/>
    <br/>
    <br/>
   
    <Tirbine1></Tirbine1>
    </Col>
    
  </Row>

  
</Container> 
    </div>
    </div>
    );
};

export default Turbine;