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
const Data = () => {
    
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
                            
                            {/* <br />
                            <br />
                            <br /> */}


                            <div class="ui basic padded segment exra">

<h1 class="ui header">Airframe</h1>

   <table class="ui celled table">
   <thead>
     <tr><th>Attribute</th>
     <th>Value</th>
   </tr></thead>
   <tbody>
     <tr><td data-label="Attribute">Overall length (M/R fore & aft and T/R horizontal)</td><td data-label="Value">41 Ft 8.17 In</td></tr>
     <tr><td data-label="Attribute">Fuselage length (Nose to T/R Gearbox)</td><td data-label="Value">57 Ft 3.25 In</td></tr>
     <tr><td data-label="Attribute">Width</td><td data-label="Value">9 Ft 0 In</td></tr>
     <tr><td data-label="Attribute">Landing Gear Treat</td><td data-label="Value">9 Ft 4.48 In</td></tr>
     <thead>
     <tr><th>Main Rotor:</th>
     <th></th>
   </tr></thead>
     <tr><td data-label="Attribute">Number of blade</td><td data-label="Value">Two</td></tr>
     <tr><td data-label="Attribute">Diameter</td><td data-label="Value">48 Ft</td></tr>
     <tr><td data-label="Attribute">Chord (Leading to trailing edge)</td><td data-label="Value">48 23.38 In</td></tr>
     <tr><td data-label="Attribute">Disc Area</td><td data-label="Value">1809 Sq Ft</td></tr>
     <tr><td data-label="Attribute">Engine to Main Rotor Ratio</td><td data-label="Value">20.37:1</td></tr>
     <tr><td data-label="Attribute">Main Rotor RPM</td><td data-label="Value">324</td></tr>
     

   </tbody>
 </table>

</div>

                        </Col>

                    </Row>


                </Container>
            </div>
        </div>
    );
};

export default Data;