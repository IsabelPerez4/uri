import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../CSS/Hero.css';

const Menu = () => {
  return (
    <>
      <div className="hero"></div>
      <div></div>
      <Navbar className="navBg" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Shot By Uri
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/uri">
                Uri
              </Nav.Link>
              <Nav.Link as={Link} to="/fotos">
                Fotos
              </Nav.Link>
              <Nav.Link as={Link} to="/videos">
                Videos
              </Nav.Link>
              <Nav.Link as={Link} to="/contacts">
                Contacts
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
