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
import "./NavBarSide.css";

class NavBarSide extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div className="navbar">
        <Navbar color="faded" light>
          <div className="logo">
            <NavbarBrand href="/" className="mr-auto">
              "logo"
            </NavbarBrand>
          </div>
          <div className="toggler">
            <div>
              <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            </div>
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link1" tag={Link} to="/">
                    Home
                  </NavLink>
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
                  <NavLink className="nav-link4" tag={Link} to="/donate">
                    Donate
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default NavBarSide;
