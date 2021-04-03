import React from 'react';
import './Navbar.css';
import { Button, Navbar, NavItem, NavLink, NavbarBrand, Nav, Container } from 'reactstrap';

export default function Navigation() {
  return (
    <>
    <Container>
      <Navbar style={{ backgroundColor: 'red' }} expand='md'>
        <NavbarBrand>PM</NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink>Projects</NavLink>
          </NavItem>
          <Button>New Project</Button>
        </Nav>
      </Navbar>

    </Container>
    </>
  );
}
