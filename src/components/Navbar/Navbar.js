import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Nav, NavItem, NavLink } from "reactstrap";

// const Navbar = () => {
//   return (
//     <div className="navbar-container">
//       <div className="navbar-top">
//         <img
//           className="logo"
//           src="https://image.flaticon.com/icons/png/512/235/235416.png"
//           alt="logo"
//           width={50}
//           height={50}
//         />
//         <div className="signin-link">
//           <Link to="/signin">Sign In</Link>
//         </div>
//       </div>
//       <div className="navbar-bottom">
//         <div className="navbar-links">
//           <Link to="/">Home</Link>
//           <Link to="/howitworks">How It Works</Link>
//           <Link to="/shelters">Shelters</Link>
//           <Link to="/volunteer">Volunteer</Link>
//           <Link to="/donate">Donate</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

class Navbar extends Component {
  render() {
    return (
      <Nav vertical className="navbar">
        <NavItem>
          <NavLink className="nav-link1" tag={Link} to="/">
            <img
              className="img1"
              src="../../images/bluedog.jpg"
              alt="bluedog"
            />
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
    );
  }
}

export default Navbar;
