import React from "react";
import Navbar from "react-bootstrap/lib/Navbar";
import Nav from "react-bootstrap/lib/Nav";
import NavItem from "react-bootstrap/lib/NavItem";
import { LinkContainer } from "react-router-bootstrap";

function NavigationBar(props) {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a>COMIC STRIP</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
           <LinkContainer to="/home">
            <NavItem eventKey={1}>
              {"HOME"}
            </NavItem>
          </LinkContainer>
          <LinkContainer to="/suppliers">
            <NavItem eventKey={1}>
              {"SUPPLIERS"}
            </NavItem>
          </LinkContainer>
          <LinkContainer to="/issues">
            <NavItem eventKey={1}>
              {"ISSUES"}
            </NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
