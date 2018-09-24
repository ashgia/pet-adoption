import React, { Component } from "react";
import { Link } from "react-router-dom";
import Geosuggest from "react-geosuggest";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import { connect } from "react-redux";
import { updateCity } from "../../ducks/userReducer";
import NavBarShelter from "../NavBarShelter/NavBarShelter";
import "./WizardTwoShelter.css";

class WizardTwoShelter extends Component {
  render() {
    return (
      <div className="wizardtwoshelter-body">
        <div className="wizardtwoshelter-boxcolor">
          <div className="navbar">
            <NavBarShelter />
          </div>
          <div className="wizardtwoshelter-textbox">
            <div className="wizardtwoshelter-title">
              <p>What City Are You In?</p>
            </div>
            <div className="wizardtwoshelter-form">
              <Form>
                <FormGroup row>
                  <Label for="nameInput" sm={2}>
                    City
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="city"
                      name="city"
                      id="cityInput"
                      placeholder="ex. Houston"
                      onChange={e => this.props.updateCity(e.target.value)}
                    />
                  </Col>
                </FormGroup>

                <Link to="/wizardThreeShelter">
                  <Button>Next</Button>
                </Link>
              </Form>
            </div>
          </div>
          <div className="wizardtwoshelter-lowertext-container">
            <div className="wizardtwoshelter-lowertext">
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
// <Geosuggest onChange={e => this.props.updateCity(e.target.value)} />

// function mapStatetoProps(state) {
//   return {
//     city: state.city
//   };
// }

const mapStatetoProps = state => state;

export default connect(
  mapStatetoProps,
  { updateCity }
)(WizardTwoShelter);
