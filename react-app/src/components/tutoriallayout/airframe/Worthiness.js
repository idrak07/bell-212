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
import file from '../web/docs/airworthiness.pdf';
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
const Worthiness = () => {
    
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


                            <div className='pdf-container exra'>
           
                            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
            <Viewer fileUrl={file}
            plugins={[defaultLayoutPluginInstance]}></Viewer>
          </Worker>

                            </div>

                        </Col>

                    </Row>


                </Container>
            </div>
        </div>
    );
};

export default Worthiness;