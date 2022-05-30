import React from "react";
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
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
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
              <NavDropdown
                title="CATEGORIES"
                id="basic-nav-dropdown"
                className='m-1'
              >
                <NavDropdown.Item href="#action/3.1">FASHION</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  COSMETICS
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  ELECTRONICS
                </NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item href="#action/3.4">
                  APPLIANCES
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">
                  BOOKS AND TOYS
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to={"/newsletter"} className='m-1'>
                NEWSLETTER
              </Nav.Link >
              <Nav.Link as={Link} to={"/about"} className='m-1'>
                ABOUT US
              </Nav.Link>
            </Nav>            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
