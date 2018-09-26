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

                <Link to="/wizardThree">
                  <Button>Next</Button>
                </Link>
              </Form>
            </div>
          </div>
          <div className="wizardtwo-lowertext-container">
            <div className="wizardtwo-lowertext">
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
)(WizardTwo);
