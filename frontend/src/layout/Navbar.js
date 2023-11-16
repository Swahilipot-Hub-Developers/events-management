import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="blue" expand="lg" className="mx-5">
      <Navbar.Brand href="/">
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
          <Nav.Link href="/Home">Home</Nav.Link>
          <Nav.Link href="/Log in">Log In</Nav.Link>
          <Nav.Link href="/UpComingEvents">UpComing Events</Nav.Link>
          <Nav.Link href="/EventsCreation">Events Creation</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
