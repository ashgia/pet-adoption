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
      <div className="registration-body">
        <div className="registration-boxcolor">
          <div className="navbar">
            <NavBarSide />
          </div>
          <div className="registration-textbox">
            <div className="registration-title">
              <p>Are you a Shelter or Looking to Adopt?</p>
            </div>
            <div className="registration-button">
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
          </div>
          <div className="reg-lowertext-container">
            <div className="registration-lowertext">
              <p>
                Gulf menhaden, sailfish ling sleeper sablefish driftwood catfish
                collared dogfish butterflyfish remora crevice kelpfish grass
                carp? Olive flounder false trevally merluccid hake river
                stingray, barb.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = state => state;

export default connect(
  mapStatetoProps,
  { updateShelterFlag }
)(Registration);
