import React from 'react';
import { Nav, Navbar , Container, Collapse,NavDropdown} from 'react-bootstrap';
import './Nav.css';
import logo from '../../Assets/logo2.png';
import { Link } from 'react-router-dom';

export default function Navbars() {
  return (
<Navbar expand="lg">
        <Navbar.Brand >
          <img className='logo' src={logo}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Link className='active ps-5' to={'/'}>Home</Link>
            <NavDropdown className='linkNav' title="Pages" id="basic-nav-dropdown">
            <NavDropdown.Item href="#"><Link className='sub-links' to={'/about'}>About US</Link><div className="brdr"></div></NavDropdown.Item>
            <NavDropdown.Item href="#">Our Team<div className="brdr"></div></NavDropdown.Item>
            <NavDropdown.Item href="#">FAQ's<div className="brdr"></div></NavDropdown.Item>
            <NavDropdown.Item href="#">Booking<div className="brdr"></div></NavDropdown.Item>
            <NavDropdown.Item href="#">Erorr 404<div className="brdr"></div></NavDropdown.Item>
            <NavDropdown.Item href="#">Login/Register<div className="brdr"></div></NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown className='linkNav' title="Services" id="basic-nav-dropdown">
            <NavDropdown.Item href="#"><Link className='sub-links' to={'/services'}>Services</Link>
            <div className="brdr"></div>
            </NavDropdown.Item>
            <NavDropdown.Item href="#">Services Details 
            <div className="brdr"></div></NavDropdown.Item>

            </NavDropdown>
            <NavDropdown className='linkNav' title="Blog" id="basic-nav-dropdown">
            <NavDropdown.Item href="#"><Link className='sub-links' to={'/blog'}>Blogs</Link><div className="brdr"></div></NavDropdown.Item>
            <NavDropdown.Item href="#">Blogs Details<div className="brdr"></div></NavDropdown.Item>
            </NavDropdown>
            <Link className='ps-5' to={"/contact"}>Contact US</Link>
            <Nav.Link href="#"><i className="fa-solid fa-magnifying-glass ps-4"></i></Nav.Link>
            
            
          </Nav>
          <Nav.Link className='pe-5'><i className="phone fa-solid fa-phone"></i> (+01)555 444 333</Nav.Link>
        </Navbar.Collapse>
    </Navbar>  )
}
