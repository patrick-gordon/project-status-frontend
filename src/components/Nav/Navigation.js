import React from 'react';
import './Navbar.css';
import { Button, Navbar, NavItem, NavLink, NavbarBrand, Nav, Container } from 'reactstrap';
import { UserContext } from '../../contexts/UserContext';

export default function Navigation() {
  const user = useContext(UserContext)
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
