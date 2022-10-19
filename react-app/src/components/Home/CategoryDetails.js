import React from 'react';
import Navbars from './Navbars';
import Footer from './Footer'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import air from '../image/aircraft.jpg';
import unit from '../image/unit.jpg';
import occean from '../image/one.webp';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const CategooryDetails = () => {
    return (
        <div>
           <Navbars></Navbars>  
           
           <div className="container">
    <CardGroup>
      <Card>
      <Link to="/overview">
        <Card.Img variant="top" src={air}/>
        <Card.Body>
          <Card.Title>Engine</Card.Title>
          <Card.Text>
            Engine Related tutorial will be found here
          </Card.Text>
        </Card.Body>
        </Link>
      </Card>
      <Card>
      <Link to="/aircond">
        <Card.Img variant="top" src={unit} />
        <Card.Body>
          <Card.Title>Air Craft</Card.Title>
          <Card.Text>
          Air Craft Related tutorial will be found here
          </Card.Text>
        </Card.Body>
        </Link> 
      </Card>
      <Card>
      <Link to="/radoverview">
        <Card.Img variant="top" src={occean} />
        <Card.Body>
          <Card.Title>Radio</Card.Title>
          <Card.Text>
          Radio Related tutorial will be found here
          </Card.Text>
        </Card.Body>
        </Link>   
      </Card>
    </CardGroup>
    <CardGroup>
      <Card>
      <Link to="/elecoverview">
        <Card.Img variant="top" src={air}/>
        <Card.Body>
          <Card.Title>Electrical</Card.Title>
          <Card.Text>
          Electrical Related tutorial will be found here
          </Card.Text>
        </Card.Body>
        </Link>
      </Card>
      <Card>
      <Link to="/instoverview">
        <Card.Img variant="top" src={unit} />
        <Card.Body>
          <Card.Title>Instruments</Card.Title>
          <Card.Text>
          Instruments Related tutorial will be found here
          </Card.Text>
        </Card.Body>
        </Link> 
      </Card>
    </CardGroup>
    </div>
    <Footer></Footer>
        </div>
    );
};

export default CategooryDetails;