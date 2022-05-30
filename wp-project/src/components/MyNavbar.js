import React from "react";
import { VscAccount } from "react-icons/vsc";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} 
from "react-bootstrap";
import { Link } from "react-router-dom";


export default function MyNavbar() {
  return (
    <div >
      <Navbar bg="dark" expand="lg" variant="dark" className = "fixed-top">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
        <VscAccount className="m-2 mx-4"/>
            Shopilify</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/home"} className='m-1'>
                HOME
              </Nav.Link>
              <Nav.Link as={Link} to={"/products"} className='m-1'>
                PRODUCTS
              </Nav.Link>

              <Nav.Link as={Link} to={"/cart"} className='m-1'>
                CART
              </Nav.Link>
              
              {/* <Nav.Link as={Link} to={"/newsletter"} className='m-1'>
                NEWSLETTER
              </Nav.Link > */}
              {/* <Nav.Link as={Link} to={"/about"} className='m-1'>
                ABOUT US
              </Nav.Link> */}
            </Nav>            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
