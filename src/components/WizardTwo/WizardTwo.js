import React, { Component } from "react";
import { Link } from "react-router-dom";
import Geosuggest from "react-geosuggest";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { updateCity } from "../../ducks/userReducer";

class WizardTwo extends Component {
  render() {
    return (
      <div>
        <h1>What City Are You In?</h1>

        <Geosuggest
        // onChange={e => this.props.updateCity(e.target.value)}
        />
        <Link to="/wizardThree">
          <Button>Next</Button>
        </Link>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {
    city: state.city
  };
}
export default connect(
  mapStatetoProps,
  { updateCity }
)(WizardTwo);
