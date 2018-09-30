import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Geosuggest from "react-geosuggest";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import { connect } from "react-redux";
import { updateCity } from "../../ducks/userReducer";
import NavBarSide from "../NavBarSide/NavBarSide";
import "./WizardTwo.css";

class WizardTwo extends Component {
  render() {
    return (
      <div className="wizardtwo-body">
        <div className="wizardtwo-boxcolor">
          <div className="navbar">
            <NavBarSide />
          </div>
          <div className="wizardtwo-textbox">
            <div className="wizardtwo-title">
              <p>What City Are You In?</p>
            </div>
            <div className="wizardtwo-form">
              <Form>
                {/* <Input onChange={e => this.props.updateCity(e.target.value)}>
            <Geosuggest />
          </Input> */}
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
                  <Link to="/wizardThree">
                    <Button>Next</Button>
                  </Link>
                </div>
              </Form>
            </div>
          </div>
          <div className="wizardtwo-lowertext-container">
            <div className="wizardtwo-lowertext">
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
)(WizardTwo);
