import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Nav, NavItem, NavLink } from "reactstrap";

class Navbar extends Component {
  render() {
    return (
      <div>
        <Nav vertical className="navbar">
          <NavItem>
            <div className="float-leftclassName">
              <NavLink className="nav-link1" tag={Link} to="/">
                <img
                  className="img1"
                  src="../../images/bluedog.jpg"
                  alt="bluedog"
                />
                Home
              </NavLink>
            </div>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link2" tag={Link} to="/howitworks">
              How It Works
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link3" tag={Link} to="/shelters">
              Shelters
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link4" tag={Link} to="/volunteer">
              Volunteer
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link5" tag={Link} to="/donate">
              Donate
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default Navbar;
