import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Figure from 'react-bootstrap/Figure';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import new1 from '../image/15may22.jpg';

function Historymessage() {
  return (
    <Container>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
      <Col xs={6} md={4}>
      <Figure>
      <Figure.Image
        width={400}
        height={300}
        src={new1}
      />
    </Figure>
        </Col>
        <Col xs={12} md={8}>
        <Card className="text-center">
      <Card.Header className='py-3'><h3>Message From Officer Commanding</h3></Card.Header>
      <Card.Body>
        {/* <Card.Title>Special Command</Card.Title> */}
        <Card.Text style={{textAlign: 'justify'}} className='p-3'>
        Air Chief Marshal Shaikh Abdul Hannan, BBP, BUP, nswc, fawc, psc, GD(P) assumed the command of Bangladesh Air Force (BAF) on 12 June 2021. He hails from Bagerhat, and was born in a respectable Muslim family on 01 August 1963. He is the youngest son of Mr Sheikh Azharul Islam and Mrs Nazlee Islam. The Air Chief Marshal was commissioned as a General Duties Pilot of BAF in 1984.<br/><br/>
He is a Qualified Flying Instructor. The Air Chief Marshal holds the highest-flying category 'A' along with Proficiency Wing and served as the Chief Examiner of Helicopter Examiner Board (HEB) of MI-17/171. An alumnus of prestigious Defence Services Command and Staff College (DSCSC), Mirpur, Air Chief Marshal Shaikh Abdul Hannan also graduated from Pakistan Air Force Air War College, Karachi, Pakistan in 1999 and received MDS and MSS degrees respectively. He completed his National Security and War Course (nswc) from National Defence University (NDU), Islamabad in 2014, and was adjudged the 'Top Graduate' and received MSc in National Security and War Studies.<br/> <br/>
Service career of Air Chief Marshal Shaikh Abdul Hannan is a fine blend of Command, Instructional and Staff appointments. He commanded a number of operational F Squadrons and Wings of BAF. The Air Chief Marshal commanded BAF Base Sheikh Hasina, BAF Base Bir Sreshto Matiur Rahman as Air Officer Commanding (AOC), Commandant of Bangabandhu Aeronautical Centre (BAC) and performed various staff duties at Air Headquarters. During his command tenure as Air Officer Commanding at BAF Base Bir Sreshto Matiur Rahman, Operational, Training, Maintenance and Administrative activities of the Base had been beefed up manifold.<br/><br/>
Air Chief Marshal Shaikh Abdul Hannan rendered valuable instructional service to DSCSC as Directing Staff, Senior Instructor (Air) and Deputy Commandant. He also rendered his service to National Defence College, Mirpur as a Senior Directing Staff (SDS). Being passionate about opera
Being passionate about operational and strategic issues, Air Chief Marshal Shaikh Abdul Hannan masterminded a number of operational and strategic exercises for both DSCSC and NDC. The Air Chief Marshal also prepared a comprehensive compendium on 'History of Air Power' which has been endorsed as a reference book for various Training Institutions' course curriculum.<br/><br/>
Under the Blue Helmet, Air Chief Marshal served as UN Military Observer in the United Nations Protection Force in Bosnia Herzegovina (UNPROFOR) in 1995. He also commanded a BAF Contingent in United Nations Mission in the Democratic Republic of the Congo (MONUC) in 2006-07.
In recognition of his meritorious service, Air Chief Marshal Shaikh Abdul Hannan was awarded with peacetime Air Force Medal 'BBP and Air Excellence Medal 'BUP'. His hobbies include reading, hiking and visiting archaeological sites. Air Chief Marshal Shaikh Abdul Hannan is married to Tahmida Hannan and they are proud parent of a son Sheikh Labib Hannan, who is pursuing his graduation at Institution of Business Administration (IBA), Dhaka University.
        </Card.Text>
        
      </Card.Body>
    </Card>
        </Col>
       
      </Row>


     
    </Container>
  );
}

export default Historymessage;