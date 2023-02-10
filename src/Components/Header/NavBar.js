import React from 'react';

import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';


  
  


  
  function  Navigation() {
    return (
      <Navbar bg="light" expand="lg">
        <Container fluid className='None'>
          <Navbar.Brand><Link className='None' to="/">Big Shoes</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto">
              <Nav.Link><Link className='None' to="/tipo/Deportivo">Deportivo</Link></Nav.Link>
              <Nav.Link><Link className='None' to="/tipo/Elegante">Elegante</Link></Nav.Link>
              <NavDropdown className='None' title="Calzado" id="basic-nav-dropdown">
                <NavDropdown.Item><Link className='None'  to="/genero/masculino">Masculino</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link className='None' to="/genero/femenino">
                  Femenino</Link>
                </NavDropdown.Item>              
                <NavDropdown.Divider />
                <NavDropdown.Item><Link className='None' to="/"></Link>
                  Talles epeciales
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Link to="/cart">
                <CartWidget />
            </Link>
               
           
          </Navbar.Collapse>
          
        </Container>
        
      </Navbar>
      
    );
  }
  
  export default Navigation;