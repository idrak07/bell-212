import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from 'react-router';
import bell from '../image/logo.png';

function Navbars() {
  const location = useLocation();

  const activeClass = {
    fontWeight: 'bold',
    color: 'white'
  }
  const unActiveClass = {
    fontWeight: '400'
  }

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
          <Nav.Link style={location.pathname === '/' ? activeClass : unActiveClass}  href="/">Home</Nav.Link>
          <Nav.Link style={location.pathname === '/historydetail' ? activeClass : unActiveClass} href="/historydetail">History</Nav.Link>
          <Nav.Link style={location.pathname === '/messagedetail' ? activeClass : unActiveClass}  href="/messagedetail">Message</Nav.Link>
          <Nav.Link style={location.pathname === '/tradesdetail' ? activeClass : unActiveClass} href="/tradesdetail">Trades</Nav.Link>
          <Nav.Link href="/auth">Login</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navbars;