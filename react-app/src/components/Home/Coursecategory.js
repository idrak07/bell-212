import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import engine from '../image/engine0.png';
import airframe from '../image/airframe.png';
import radio from '../image/radio.jpg';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Coursecategory() {
  return (
    <div className="container">
    <CardGroup>
      <Card className='mx-2'>
      <Link to="/overview" style={{ textDecoration: 'none', color: 'black' }}>
        <Card.Img variant="top" src={engine}/>
        <Card.Body>
          <Card.Title><b>Engine</b></Card.Title>
          <Card.Text className='py-2'>
            Engine Related tutorial will be found here
          </Card.Text>
        </Card.Body>
        </Link>
      </Card>
      <Card className='mx-2'>
      <Link to="/aircond" style={{ textDecoration: 'none', color: 'black' }}>
        <Card.Img variant="top" src={airframe} />
        <Card.Body>
          <Card.Title><b>Air Frame</b></Card.Title>
          <Card.Text className='py-2'>
          Air Craft Related tutorial will be found here
          </Card.Text>
        </Card.Body>
        </Link> 
      </Card>
      <Card className='mx-2'>
      <Link to="/radoverview" style={{ textDecoration: 'none', color: 'black' }}>
        <Card.Img variant="top" src={radio} />
        <Card.Body>
          <Card.Title><b>Radio</b></Card.Title>
          <Card.Text className='py-2'>
          Radio Related tutorial will be found here
          </Card.Text>
        </Card.Body>
        </Link>   
      </Card>
    </CardGroup>
    </div>
  );
}

export default Coursecategory;