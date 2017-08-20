import React from "react";
import Navbar from "react-bootstrap/lib/Navbar";
import Nav from "react-bootstrap/lib/Nav";
import NavDropdown from "react-bootstrap/lib/NavDropdown";
import NavItem from "react-bootstrap/lib/NavItem";
import MenuItem from "react-bootstrap/lib/MenuItem";
import { Link } from "react-router-dom";
import Constants from "./Constants";

/* const SuppliersMenuItem = ({match}) => {
  if (1 == 1) {
    return (
      <NavItem eventKey={1} href="/Suppliers">
        {"SUPPLIERS"}
      </NavItem>
    );
  } else {
    return (
      <NavDropdown eventKey={1} title="Suppliers" id="basic-nav-dropdown">
        <MenuItem eventKey={1.1}>
          {"View suppliers"}
        </MenuItem>
        <MenuItem eventKey={3.2}>
          {"Add supplier"}
        </MenuItem>
      </NavDropdown>
    );
  }
}; */

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
        <NavDropdown eventKey={1} title="SUPPLIERS" id="basic-nav-dropdown">
          <MenuItem to="/suppliers" eventKey={1.1}>
            <Link to="/suppliers">
              {"View"}
            </Link>
          </MenuItem>
          <MenuItem eventKey={1.2}>
            <Link to="/suppliers/add">
              {"Add"}
            </Link>
          </MenuItem>
        </NavDropdown>
        <NavItem>
          <Link to="/issues">
            {"ISSUES"}
          </Link>
        </NavItem>

        {/* <NavItem eventKey={1} href="/Suppliers">
          {"SUPPLIERS"}
        </NavItem> */}
        {/* <NavItem eventKey={2} href="/Issues">
          {"ISSUES"}
        </NavItem> */}
        {/* <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.4}>Separated link</MenuItem>
        </NavDropdown> */}
      </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
