import React from "react";
import Navbar from "react-bootstrap/lib/Navbar";
import Nav from "react-bootstrap/lib/Nav";
import NavItem from "react-bootstrap/lib/NavItem";
import { Link } from "react-router-dom";

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
        <NavItem>
          <Link to="/suppliers">
            {"SUPPLIERS"}
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/issues">
            {"ISSUES"}
          </Link>
        </NavItem>        
      </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
