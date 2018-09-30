import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";
import { getUser } from "../../ducks/userReducer";

import { connect } from "react-redux";
import "./NavBarSide.css";

class NavBarSide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    this.props.getUser();
  }
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
              <NavLink className="side-nav-link2" tag={Link} to="/userProfile">
                Profile
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="side-nav-link3" tag={Link} to="/shelters">
                Shelters
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="side-nav-link4"
                tag={Link}
                to={`/chat/${this.props.user.userid}`}
              >
                Messages
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="side-nav-link5" tag={Link} to="/donate">
                Donate
              </NavLink>
              {/* <NavLink
                className="shelter-nav-link6"
                tag={Link}
                to={`/chat/${this.props.user.userid}`}
              >
                Messages
              </NavLink> */}
              {/* <Link
                to={`/chat/${this.props.user.user.userid || 1}/${
                  this.state.shelter.userid
                }`}
              >
                Chat With Us
              </Link> */}
            </NavItem>
          </div>
        </Nav>
      </div>
    );
  }
}
const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  {
    getUser
  }
)(NavBarSide);
