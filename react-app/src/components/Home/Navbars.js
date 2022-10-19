import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import bell from '../image/logo.png';

function Navbars() {
  return (
    <Navbar style={{backgroundColor: '#4e66b0', color: '#fff'}} variant="dark">
      <Container>
        <Navbar.Brand href="#home">
            <img
              alt=""
              src={bell}
              width="60"
              height="60"
              className="d-inline-block" style={{marginRight: '10px'}}
            />{' '}
            Our Responsibilty, Our Pride
        </Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/historydetail">History</Nav.Link>
          <Nav.Link href="/messagedetail">Message</Nav.Link>
          <Nav.Link href="/categorydetail">Categories</Nav.Link>
          <Nav.Link href="/auth">Login</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navbars;