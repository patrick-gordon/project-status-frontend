import React, { useState, useEffect } from "react";
import "./Navbar.css";
import {
  Button,
  Navbar,
  NavItem,
  NavLink,
  NavbarBrand,
  Nav,
  Container,
} from "reactstrap";
import { UserContext } from "../../contexts/UserContext";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import axios from "axios";
import ListGroup from "reactstrap/lib/ListGroup";
import ListGroupItem from "reactstrap/lib/ListGroupItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import SideNav from "./SideNav";

export default function Navigation() {
  return (
    <Navbar expand='md' className="navbar-main">
      <Container>
        <SideNav />
      <NavbarBrand className="navbar-brand">
        PM
      </NavbarBrand>
      <Nav navbar className="navbar-nav">
        <NavItem className="navbar-link">
          <NavLink style={{ color: "black" }}>Projects</NavLink>
        </NavItem>
        <Button
          className="navbar-newProject-button"
          style={{ color: "black", backgroundColor: "white" }}
        >
          New Project
          <FontAwesomeIcon
            icon={faPlusCircle}
            size="1x"
          ></FontAwesomeIcon>
        </Button>
        <FontAwesomeIcon
          icon={faUserCircle}
          size="3x"
          className="navbar-profile-icon"
        />
      </Nav>
      </Container>
    </Navbar>
  );
}
