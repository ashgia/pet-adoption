import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import "./NavBarShelter.css";

class NavBarShelter extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Nav className="navbar-shelter">
        <NavItem>
          <NavLink className="shelter-nav-link1" tag={Link} to="/">
            Tulu's Friends
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="shelter-nav-link2" tag={Link} to="/howitworks">
            How It Works
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="shelter-nav-link3" tag={Link} to="/users">
            Users
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="shelter-nav-link4" tag={Link} to="/shelters">
            Shelters
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="shelter-nav-link5" tag={Link} to="/volunteer">
            Volunteer
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="shelter-nav-link6" tag={Link} to="/donate">
            Donate
          </NavLink>
        </NavItem>
      </Nav>
    );
  }
}

export default NavBarShelter;
