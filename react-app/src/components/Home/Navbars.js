import { useLocation } from 'react-router';
import HomeNavbar from './HomeNavbar';

function Navbars() {
  const location = useLocation();
  // alert(location.pathname)

  const activeClass = {
    fontWeight: 'bold',
    color: 'white'
  }
  const unActiveClass = {
    fontWeight: '400'
  }

  return (
    <>
      {/* <Navbar style={{backgroundColor: '#4e66b0', color: '#fff'}} variant="dark">
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
          <Link className='nav-link' style={location.pathname === '/' ? activeClass : unActiveClass}  to={"/"}>Home</Link>
          <Link className='nav-link' style={location.pathname === '/historydetail' ? activeClass : unActiveClass} to={"/historydetail"}>History</Link>
          <Link className='nav-link' style={location.pathname === '/messagedetail' ? activeClass : unActiveClass}  to={"/messagedetail"}>Message</Link>
          <Link className='nav-link' style={location.pathname.includes('trades') ? activeClass : unActiveClass} to={"/tradesdetail"}>Trades</Link>
          <Link className='nav-link' to={"/auth"}>Login</Link>
        </Nav>
      </Container>
    </Navbar> */}
    <HomeNavbar />
    </>
  );
}

export default Navbars;