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
const Transmission = () => {
    
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
  <a class="active item" data-tab="first">Transmission System</a>
  <a class="item" data-tab="second">3D Models</a>
</div>
<div class="ui bottom attached active basic tab segment" data-tab="first">
  <h4 class="ui header">Transmission Assembly</h4>
  <p>This component is used to transmit power from the engine through the main driveshaft to drive the main rotor, tail rotor and all other accessory driven components. It is located in front of engine on structural support. It consists of top case, ring gear case, support case, main case and accessory sump case. Inside the transmission assembly main input quill, bevel gear, accessory drive quill, lower planetary gear, lower sun gear, upper sun gear, upper planetary gear, mast adapter, hydraulic pump quill, techo generator quill, transmission pump quill and tail rotor drive quill.</p>

  <h4 class="ui header">Transmission Oil System</h4>
  <p>Specified oil is used for lubricating the transmission assembly. Transmission sump case is used as the oil reservoir and two oil level gauge one indicates low level another indicates full level are located at the right side of the sump case. A geared pump and an internal filter are also located inside the sump case. When the transmission runs the pump also runs and it’s pressure range is 0-70 PSI. The pump pressure enter the internal filter and from the filter goes to bypass valve. When oil temperature is 54 degree centigrade or below the bypass valve will be will be fully opened and oil will go to the external filter without going to the cooler. When the oil temperature rises above 54 degree centigrade but bellow 79 degree centigrade the bypass valve will be partially opened and some portion of oil will go to cooler. When oil temperature rises above 79 degree centigrade, the bypass valve will be fully closed and oil will go to cooler. From the cooler oil will go to external filter then to the oil pressure manifold from where oil will go to different jets to lubricate the different gears and bearings. During rotation of different gears and bearings if any teeth of gears or any bearing is damaged then there are three chip detector to indicate the metal chip.</p>

  <h4 class="ui header">Mast Assembly</h4>
  <p>The mast assembly is installed on the transmission mast adapter to transmit power with reduced RPM of 324 to the main rotor hub & blade assembly and to rotate with the same RPM.</p>
</div>
<div class="ui bottom attached basic tab segment" data-tab="second">
  {/* <iframe id="canvas" src="models/xmission.html" style="height: 80vh; width: 100%; border: 0px" scrolling="no">
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

export default Transmission;