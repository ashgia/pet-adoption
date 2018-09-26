import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";
import "./NavBarSide.css";

class NavBarSide extends Component {
  render() {
    return (
      <div id="navbar-side-id">
        <Nav className="navbar-side">
          <NavItem>
            <NavLink className="side-nav-link1" tag={Link} to="/">
              Tulu's Friends
            </NavLink>
          </NavItem>
          <div className="side-nav-link-right">
            <NavItem>
              <NavLink className="side-nav-link2" tag={Link} to="/howitworks">
                How It Works
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="side-nav-link3" tag={Link} to="/shelters">
                Shelters
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="side-nav-link4" tag={Link} to="/volunteer">
                Volunteer
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="side-nav-link5" tag={Link} to="/donate">
                Donate
              </NavLink>
            </NavItem>
          </div>
        </Nav>
      </div>
    );
  }
}

export default NavBarSide;
