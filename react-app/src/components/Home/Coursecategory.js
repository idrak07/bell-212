import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import engine from '../image/engine0.png';
import airframe from '../image/airframe.png';
import radio from '../image/radio.jpg';
import air from '../image/aircraft.jpg';
import unit from '../image/unit.jpg';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Coursecategory() {
  return (
    <div className="container">
      <CardGroup>
        <Card className='mx-2 card-hover'>
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
        <Card className='mx-2 card-hover'>
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
        <Card className='mx-2 card-hover'>
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
      <div className='row justify-content-center mt-5'>
        <Card className='mx-2 col-4 card-hover'>
          <Link to="/elecoverview" style={{ textDecoration: 'none', color: 'black' }}>
            <Card.Img variant="top" src={air} />
            <Card.Body>
              <Card.Title><b>Electrical</b></Card.Title>
              <Card.Text className='py-2'>
                Electrical Related tutorial will be found here
              </Card.Text>
            </Card.Body>
          </Link>   
        </Card>
        <Card className='mx-2 col-4 card-hover'>
          <Link to="/instoverview" style={{ textDecoration: 'none', color: 'black' }}>
            <Card.Img variant="top" src={unit} />
            <Card.Body>
              <Card.Title><b>Instruments</b></Card.Title>
              <Card.Text className='py-2'>
              Instruments Related tutorial will be found here
              </Card.Text>
            </Card.Body>
          </Link>   
        </Card>
      </div>
    </div>
  );
}

export default Coursecategory;