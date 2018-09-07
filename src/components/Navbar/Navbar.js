import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="navbar-top">
          <img
            className="logo"
            src="https://image.flaticon.com/icons/png/512/235/235416.png"
            alt="logo"
            width={50}
            height={50}
          />
        </div>
        <div className="navbar-bottom">
          <div className="navbar-links">
            <Link to="/">Home</Link>
            <Link to="/howitworks">How It Works</Link>
            <Link to="/shelters">Shelters</Link>
            <Link to="/volunteer">Volunteer</Link>
            <Link to="/donate">Donate</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
