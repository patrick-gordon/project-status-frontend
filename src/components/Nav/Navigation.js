import React from 'react';
import './Navbar.css';
import {
  Button,
  Navbar,
  NavItem,
  NavLink,
  NavbarBrand,
  Nav,
  Container,
} from 'reactstrap';
import { UserContext } from '../../contexts/UserContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';


export default function Navigation() {
  return (
      <div className='navigation-container'>
        <Navbar expand='md' className='navbar-main'>
          <NavbarBrand className='navbar-brand' style={{fontSize: '36px'}}>PM</NavbarBrand>
          {/* <Container className=''> */}
          <Nav className='navbar-nav'>
            <NavItem className='navbar-link'>
              <NavLink style={{color: 'black'}}>Projects</NavLink>
            </NavItem>
            <Button className='navbar-newProject-button' style={{color: 'black', backgroundColor: 'white'}}>New Project<FontAwesomeIcon icon={faPlusCircle} style={{marginLeft: '1rem'}} size='1x'></FontAwesomeIcon></Button>
            <FontAwesomeIcon icon={faUserCircle} size='3x' className='navbar-profile-icon' />
          </Nav>
          {/* </Container> */}
        </Navbar>
      </div>
  );
}
