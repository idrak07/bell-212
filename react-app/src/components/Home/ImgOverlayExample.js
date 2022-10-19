
import CustomizedAccordions from './Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Figure from 'react-bootstrap/Figure';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import new1 from '../image/15may22.jpg';
function ImgOverlayExample() {
  return (
    <div>
    <Container>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
      <Col xs={4} md={4}>
      <Figure>
      <Figure.Image
        width={400}
        height={300}
        src={new1}
      />
    </Figure>
        </Col>
        <Col xs={12} md={8}>
        <br/>
        <CustomizedAccordions></CustomizedAccordions>
        </Col>
       
      </Row>


     
    </Container>
  
  </div>
  );
}

export default ImgOverlayExample;