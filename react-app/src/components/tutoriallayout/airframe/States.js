import React from 'react';
import Navlay from '../Navlay';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const States = () => {

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

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
        <Box sx={{ minWidth: 70 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Introduction to Airframe</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}><Link to="/overview">Overview</Link></MenuItem>
          <MenuItem value={20}><Link to="/States">States of Overhauling</Link></MenuItem>
          <MenuItem value={30}><Link to="/process">Process of Overhauling</Link></MenuItem>
        </Select>
      </FormControl>
    </Box>

        
      </ListGroup.Item>
      <ListGroup.Item action variant="success">
      <Link to="/publication">Publication</Link>
        
      </ListGroup.Item>
      <ListGroup.Item action variant="danger">
      <Link to="/Airworthiness">Airworthiness</Link>
        
      </ListGroup.Item>
      <ListGroup.Item action variant="warning">
      <Link to="/Schedule">Components Overhaul Schedule</Link>
        
      </ListGroup.Item>
      <ListGroup.Item action variant="primary">
      <Link to="/gdata">General Data</Link>
      
      </ListGroup.Item>
      <ListGroup.Item action variant="dark">
      <Link to="/mrotor"> Main Rotor</Link>
       
      </ListGroup.Item>
      <ListGroup.Item action variant="secondary">
      <Link to="/trotor">Tail Rotor</Link>
        
      </ListGroup.Item>
      <ListGroup.Item action variant="success">
      <Link to="/Transmission">Transmission Assembly</Link>
        
      </ListGroup.Item>
      <ListGroup.Item action variant="danger">
      <Link to="/Gearbox">Gearbox</Link>
        
      </ListGroup.Item>
      <ListGroup.Item action variant="warning">
      <Link to="/train">Power Train</Link>
        
      </ListGroup.Item>
    </ListGroup>
        </Col>
        <Col xs={12} md={8}>
        <br/>
        <br/>
        <br/>
        <br/>
       
       
       
     
  <div class="ui basic padded segment exra">

<h1 class="ui header">Stages of Helicopter Overhauling</h1>

   <p>To complete the Overhauling of Bell 212 helicopter a total of 140 working days and total of 120 working days are required for Bell 206L series  helicopters. Different stages are being followed during the Overhauling job. They are as follows.</p>
   <ol class="ui list">
     <li>When Bell-212 helicopter completes near about 1000 hrs flying and Bell 206L helicopter near about 1200 hrs, the pilot along with the technicians of 208 MU will go for a observation flight to note the instrument readings of engine system, hydraulic system, fuel system and flight controls behavior for future corrective action.</li>
     <li>After landing a thorough inspection is carried out for any  leakage, any physical damage of structural of component or panel and noted down.</li>
     <li>Then, engine fuel system preservation run is carried out.</li>
   </ol>


</div>
       
        
        </Col>
        
      </Row>

      
    </Container> 
        </div>
        </div>
    );
};

export default States;