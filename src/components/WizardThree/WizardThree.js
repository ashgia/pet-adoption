import React, { Component } from "react";
import { Link } from "react-router-dom";

class WizardThree extends Component {
  render() {
    return (
      <div>
        <h1>Fill in pet info</h1>
        <Link to="/wizardFour">
          <button>Next</button>
        </Link>
      </div>
    );
  }
}

export default WizardThree;
