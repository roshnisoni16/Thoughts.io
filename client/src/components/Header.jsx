import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./css/Header.css"; // Import custom CSS

const Header = () => {
  return (
  <Navbar
    bg="dark"
    variant="dark"
    expand="lg"
    className="sticky-top shadow bg-white"
  >
    <div className="container">
      <Navbar.Brand href="/" className="mx-5 logo text-neon-green">
        Thoughts.io
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="lato m-auto">
          <Nav.Link as={NavLink} exact to="/" className="nav-text">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/post" className="nav-text">
            Posts
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact" className="nav-text">
            Contact
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about" className="nav-text">
            About
          </Nav.Link>
          <Nav.Link as={NavLink} to="/login" className="nav-text">
            Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </div>
  </Navbar>
  )
};

export default Header;
