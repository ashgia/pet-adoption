import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Nav, NavItem, NavLink } from "reactstrap";

class Navbar extends Component {
  render() {
    return (
      <div id="navbarmain">
        <Nav vertical id="navbar">
          <NavItem>
            <NavLink id="nav-link1" tag={Link} to="/shelterProfile">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink id="nav-link2" tag={Link} to="/howitworks">
              How It Works
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink id="nav-link3" tag={Link} to="/shelters">
              Shelters
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink id="nav-link4" tag={Link} to="/volunteer">
              Volunteer
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink id="nav-link5" tag={Link} to="/donate">
              Donate
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default Navbar;
