import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { Component } from 'react';

const NavBar = () => {
  
  return (
    <Navbar bg="blue" expand="lg" className="mx-7">
      <Navbar.Brand href="/https://www.swahilipothub.co.ke">
        <img
          src="/images/logo.png"
          height="30"
          width="150"
          alt="Swahilipot Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav" className="justify-content-end">
        <Nav className="ml-auto ">
        <Link to="masthead" spy={true} smooth={true} duration={500} className="nav-link">
            Masthead
          </Link>
          <Link to="services" spy={true} smooth={true} duration={500} className="nav-link">
            Services
          </Link>
          <Link to="portfolioGrid" spy={true} smooth={true} duration={500} className="nav-link">
            Portfolio
          </Link>
          <Link to="about" spy={true} smooth={true} duration={500} className="nav-link">
            About
          </Link>
          <Link to="team" spy={true} smooth={true} duration={500} className="nav-link">
            Team
          </Link>
          <Link to="clients" spy={true} smooth={true} duration={500} className="nav-link">
            Clients
          </Link>
          <Link to="contact" spy={true} smooth={true} duration={500} className="nav-link">
            Contact
          </Link>
          <Nav.Link href="/LogIn">Log In</Nav.Link>
        </Nav>

      
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
