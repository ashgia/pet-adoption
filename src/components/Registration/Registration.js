import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ButtonGroup, Button } from "reactstrap";
import NavBarSide from "../NavBarSide/NavBarSide";
import { updateShelterFlag } from "../../ducks/userReducer";
import { connect } from "react-redux";
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
          <Link to="/WizardTwoShelter">
            <Button onClick={e => this.props.updateShelterFlag(true)}>
              Shelter
            </Button>
          </Link>
          <Link to="/WizardTwo">
            <Button onClick={e => this.props.updateShelterFlag(false)}>
              Looking to Adopt
            </Button>
          </Link>
        </ButtonGroup>
      </div>
    );
  }
}

const mapStatetoProps = state => state;

export default connect(
  mapStatetoProps,
  { updateShelterFlag }
)(Registration);
