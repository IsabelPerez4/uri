import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import '../CSS/Hero.css';

const Menu = () => {
  return (
    <>
      <div>
        <Navbar className="navBg" variant="dark" expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/uri">
                  Uri
                </Nav.Link>
                <Nav.Link as={Link} to="/fotos">
                  Fotos
                </Nav.Link>
                <Nav.Link as={Link} to="/videos">
                  Videos
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Menu;
