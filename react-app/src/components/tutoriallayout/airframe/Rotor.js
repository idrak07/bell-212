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
const Rotor = () => {
    
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
  <a class="active item" data-tab="first">Main Rotor System</a>
  <a class="item" data-tab="second">3D Models</a>
</div>
<div class="ui bottom attached active basic tab segment" data-tab="first">
  <p>Main rotor system is used to move the helicopter to forward, backward, sidewise, upward & downward. It consists of main rotor hub assembly- two grips with two pitch horn, yoke with Trunnion & pillow blocks, stabilizer bar, swash plate assembly, collective sleeve & scissors assembly, two tension torsion strap, two adjustable drag brace and two main rotor blades assembly.</p>
<p>
The Swash plate& support assembly along with collective sleeve & scissors assembly are installed on the transmission assembly over the mast.The trunnion is attached with yoke assembly in conjunction with two pillow blocks to allow the main rotor to flap.Two tension torsion straps are installed inside two spindles of the yoke to counteract the aerodynamic forces which tend to change the blade pitch angle. Two main rotor grips with two horns are installed on both sides of the yoke spindles to install two main rotor blades. Two drag brace assemblies are installed at the trailing edge of the blade for blades alignment.After main rotor blade and hub assembly alignment & balancing it is installed on the mast assembly above the swash plate. Non-rotating part of the swash plate is connected with two hydraulic actuator (cyclic controls) and collective lever with collective hydraulic actuator. Stabilizer bar is assembly is installed over the yoke with the trunnion for better stability at all flight attitudes. Both pitch links are attached with both pitch horns and both control tubes attached with both scissors assembly.
</p>
</div>
<div class="ui bottom attached basic tab segment" data-tab="second">
  {/* <iframe id="canvas" src="models/rotor3D.html" style="height: 80vh; width: 100%; border: 0px" scrolling="no">
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

export default Rotor;