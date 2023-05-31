import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function AppNavbar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar  expand="md" className="shadow">
      <Container>
        <Navbar.Brand className='fs-4' href="/">issue-tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto fs-5">
            <NavLink className="nav-link" to="projects">Projects</NavLink>
            <NavLink className="nav-link" to="issues">Issues</NavLink>
            <NavLink className="nav-link" to="boards">Boards</NavLink>
          </Nav>
          <Nav>
          <NavLink className="nav-link fs-5" to="login">Login</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;