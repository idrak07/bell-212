import React, { useState,Component,useEffect } from 'react'
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
import file from '../web/docs/overhaul-schedule.pdf';
import { StlViewer } from "react-stl-viewer";
import view from './models/bell212.stl';
import { Worker } from '@react-pdf-viewer/core';
// Import the main Viewer component
import { Viewer } from '@react-pdf-viewer/core';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
// default layout plugin
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// Import styles of default layout plugin
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const style = {
    top: 0,
    left: 0,
    width: '50vw',
    height: '50vh',
}
const Gearbox = () => {
    
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

    const [page, setPage] = useState(1);
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
                            <br />
                            <h4>Contents</h4>
                            <br />
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
                            
                            <br />
                            <br />
                            <br />


                            <div class="ui basic segment exra">

<div class="ui top attached pointing secondary menu">
  <a class="active item" data-tab="first">Gearbox System</a>
  <a class="item" data-tab="second">3D Models</a>
</div>
<div class="ui bottom attached active basic tab segment" data-tab="first">
  <h4 class="ui header">Intermediate gear box (42 degree)</h4>
  <p>This component is used to transmit the power taken from the transmission to the tail rotor gearbox through the tail rotor driveshaft by changing the direction of route to 42 degree as the vertical fin is attached on tail boom at 42 degree. In this gear box RPM remains the same i.e 4300 which was taken from transmission.</p>

  <h4 class="ui header">Tail rotor gearbox (90 degree gearbox)</h4>
  <p>This component is installed on the top of vertical fin. The output RPM of 4300 from the 42 degree gearbox enter into the 90 degree gearbox and it’s output provides reduced RPM to 1660. The tail rotor hub and blade assembly is installed on the output shaft of tail rotor gearbox, so the tail rotor hub and blade assembly also rotate at 1660 RPM.</p>

</div>
<div class="ui bottom attached basic tab segment" data-tab="second">
  {/* <iframe id="canvas" src="models/gearbox.html" style="height: 80vh; width: 100%; border: 0px" scrolling="no">
    </iframe> */}
</div>


</div>

                        </Col>

                    </Row>


                </Container>
            </div>
        </div>
    );
};

export default Gearbox;