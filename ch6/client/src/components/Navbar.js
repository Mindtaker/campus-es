import React from "react";
import { Link } from "react-router-dom";
import { Navbar as NavbarBT, Nav, Container } from "react-bootstrap";

export default function Navbar() {
  return (
    <>
      <NavbarBT expand="lg" bg="dark" variant="dark">
        <Container>
          <NavbarBT.Brand>Super Blog</NavbarBT.Brand>
          <NavbarBT.Toggle aria-controls="responsive-navbar-nav" />
          <NavbarBT.Collapse>
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/login"}>Log In</Nav.Link>
              <Nav.Link as={Link} to={"/register"}>Register</Nav.Link>
              <Nav.Link as={Link} to={"/createpost"}>Write a story</Nav.Link>            
              <Nav.Link as={Link} to={"/allposts"}>All posts</Nav.Link>            
              <Nav.Link as={Link} to={"/logout"}>Log Out</Nav.Link>            
            </Nav>
          </NavbarBT.Collapse>
        </Container>
      </NavbarBT>
    </>
  );
}
