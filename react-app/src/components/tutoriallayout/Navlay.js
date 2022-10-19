import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navlay = () => {
    return (
        <div>
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Bell-212</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          <Nav>
            <Nav.Link href="/Basicturbo1">Engine</Nav.Link>
            <Nav.Link href="/overview">Airframe</Nav.Link>
            <Nav.Link href="/elecoverview">Electric Componets</Nav.Link>
            <Nav.Link href="/instoverview">Instruments</Nav.Link>
            <Nav.Link href="/radoverview">Radio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
        </div>
    );
};

export default Navlay;