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

const Publication = () => {

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

<h1 class="ui header">Publications & Bulletin Of Bell- 212 Helicopter</h1>

   <p>Different Manuals & Bulletins are used during maintenance of helicopter provided by the manufacturer. Following are the manuals and bulletins.</p>
   
   <ol class="ui list">
     <li>Maintainance Manual (MM): It contains the following-
       <ol>
         <li>Index of chapter with subject and revision chapter.</li>
         <li>List of mandatory airworthiness limited life components.</li>
         <li>Scheduled inspection after operating helicopter (Hours/Calender)</li>
         <li>List of components to be overhauled (Hours/Calender)</li>
         <li>Procedure of components removal, disassembly, inspection, rectification, replacement of parts, reassembly and reinstallation in the helicopter.</li>
         <li>Trouble shooting of different defects.</li>
       </ol>   
     </li>
     <li>Component Repair & Overhaul Manual (CR&O):  It provides the procedure to disassembly, inspection, data(range) for repair and reassembly of components.
     <br/>
     <b>Note:</b> The chapter and the section are the same for both maintenance manual and component repair & overhaul manual. 
     </li>
     <li>Ilustrated Parts Breakdown (IPB): It provides the part number quantity of item required for maintenance, repair or overhaul of helicopter components or single item including hardware  as per helicopter serial number.</li>
     <li>Aircraft Record (Log Book):  This is used to enter helicopter flying hrs, landings, major components replacement,  ASB or TB compliance and inspection carried out.</li>
     <li>Historical Service Record (Log Card):  It is used for life or major components to enter time since new, time since overhaul, frequency of overhaul (Operating hrs/Calendar), date & helicopter ser number installed and reason for removal.</li>
     <li>Service Instruction (SI):  This publication covers kits to be installed on the aircraft which are not the part of basic helicopter. The procedure for installation & removal, parts breakdown, operation and maintenance are illustrated.</li>
     <li>Structural Repair Manual (SRM):  This manual is used to repair structure of helicopter.</li>
     <li>Bulletin-
       <ol>
         <li>Technical Bulletin (TB): This used to provide operators with information of technical nature but does not affect flight safety. The TB is optional for compliance. Modifications to improve economy or facilitate maintenance, substitution of interchangeable parts and increase in time between inspection or overhaul and increase of service or retirement life of component.</li>
         <li>Alert Service Bulletin (ASB): This is approved by safety Board of Federal Aviation Administration (FAA) to notify the Bell helicopter operators of safety matters. It is mandatory and become inactive when it is complied and included in maintenance Manual.</li>
         <li>Operation Safety Notice (OSN): This is used to advise operators of safety condition that has come to manufacturer attention. Normally, technical compliance is not published. It is approved by Safety Board prior to release.</li>
         <li>Information Letter (IL): This document deals with non-technical in nature and inform the customer such as warranty procedure, property return etc.</li>
       </ol>   
     </li>
   </ol>


</div>
       
        
        </Col>
        
      </Row>

      
    </Container> 
        </div>
        </div>
    );
};

export default Publication;