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
import {StlViewer} from "react-stl-viewer";
import view from './models/bell212.stl';

const style = {
    top: 0,
    left: 0,
    width: '50vw',
    height: '50vh',
}

const Airframe = () => {

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
       
       
       
        <div class="ui basic segment exra">
<div class="ui top attached pointing secondary menu">
  <a class="active item" data-tab="first">Overview</a>
  <a class="item" data-tab="second">3D Model</a>
</div>
<div class="ui bottom attached active basic tab segment" data-tab="first">
  <h1 class="ui header">Introduction to Airframe</h1>

    <p>The Bell helicopter is a twin engine helicopter designer for high performance, low maintenance and maximum utility. It is manufactured by Bell Helicopter Textorn Incorporation, United States of America.</p>
    

    <p>Bangladesh Air Force purchased Bell Helicopter in 1977 to carry BAF personnel, load mission, patient mission, VIP and VVIP mission. Initially the major inspection (Overhauling) after operating 1000 hrs used to be done in abroad i e. in Singapore. In 1986 a contract was made in between Bangladesh Air Force and the then Heli Orient Pte Limited to train BAF personnel and to establish facilities for 1000 hrs (Bell-212) and 1200 hrs (Bell-206L series). In Oct' 1986 started overhaul of  helicopters i the name of bell tech project by the Heli Orient expert  & technician of BAF. After completion of 04X Bell-212 & 01X Bell 206 L series hel, BAF started overhauling by own tech man power in the name of 208 Maintenance Unit (MU) in Sep'1988. </p>
        
    <h4>Role of 208 MU, BAF</h4>
    <ol class="ui list">
      <li>3rd line servicing of Bell hel.</li>
      <li>Structural repair of damaged hel/ac.</li>
      <li>Exploring local resources to repair component.</li>
      <li>Providing general engineering support to other hel/ac.</li>
      <li>Painting & write up of other hel/ac.</li>
    </ol>

</div>
<div class="ui bottom attached basic tab segment" data-tab="second">
  <p align="middle">
    [Mouse Click to rotate, Scroll to zoom in and out, Shift + Click to move the model]</p>
</div>
  <StlViewer
            style={style}
            orbitControls
            shadows
            url={view}
        />

</div>
       
        
        </Col>
        
      </Row>

      
    </Container> 
        </div>
        </div>
    );
};

export default Airframe;