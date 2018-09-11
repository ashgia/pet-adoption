import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ButtonGroup, Button } from "reactstrap";
import { connect } from "react-redux";
import { updateUserType } from "../../ducks/userReducer";

class Registration extends Component {
  render() {
    return (
      <div>
        <h1>Are you a Shelter or Looking to Adopt?</h1>
        <ButtonGroup>
          <Link to="/wizardTwoShelter">
            <Button>Shelter</Button>
          </Link>
          <Link to="/wizardTwo">
            <Button>Looking to Adopt</Button>
          </Link>
        </ButtonGroup>
      </div>
    );
  }
}

export default Registration;
