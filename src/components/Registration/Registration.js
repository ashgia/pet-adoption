import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ButtonGroup, Button } from "reactstrap";
import NavBarSide from "../NavBarSide/NavBarSide";
import "./Registration.css";

class Registration extends Component {
  render() {
    return (
      <div className="registrationpage">
        <div className="navbar">
          <NavBarSide />
        </div>
        <h1>Are you a Shelter or Looking to Adopt?</h1>
        <ButtonGroup>
          <Link to="/newShelterLogin">
            <Button>Shelter</Button>
          </Link>
          <Link to="/newAdoptLogin">
            <Button>Looking to Adopt</Button>
          </Link>
        </ButtonGroup>
      </div>
    );
  }
}

export default Registration;
