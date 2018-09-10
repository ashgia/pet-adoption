import React, { Component } from "react";
import { Link } from "react-router-dom";
import Geosuggest from "react-geosuggest";

class WizardTwo extends Component {
  render() {
    return (
      <div>
        <h1>What City Are You In?</h1>
        <Geosuggest />
        <Link to="/wizardThree">
          <button>Next</button>
        </Link>
      </div>
    );
  }
}

export default WizardTwo;
