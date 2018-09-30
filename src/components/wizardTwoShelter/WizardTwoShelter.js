import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Geosuggest from "react-geosuggest";
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
                <div className="wizardtwo-button">
                  <Link to="/wizardThreeShelter">
                    <Button>Next</Button>
                  </Link>
                </div>
              </Form>
            </div>
          </div>
          <div className="wizardtwoshelter-lowertext-container">
            <div className="wizardtwoshelter-lowertext">
              <p>
                Tulu's friends gives the opportunity for local animal
                communities in all cities to get together, shelters and pet
                owners. We want to provide a platform for any and all
                communities based on your location.
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
