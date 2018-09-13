import React, { Component } from "react";
import { Link } from "react-router-dom";
import Geosuggest from "react-geosuggest";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import { connect } from "react-redux";
import { updateCity } from "../../ducks/userReducer";
import NavBarSide from "../NavBarSide/NavBarSide";

class WizardTwo extends Component {
  render() {
    return (
      <div className="wizardtwopage">
        <div className="navbar">
          <NavBarSide />
        </div>
        <div>
          <h1>What City Are You In?</h1>
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
