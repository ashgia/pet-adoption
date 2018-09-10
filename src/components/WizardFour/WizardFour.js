import React, { Component } from "react";
import { Link } from "react-router-dom";

class WizardFour extends Component {
  render() {
    return (
      <div>
        <h1>Not sure what this page is yet</h1>
        <Link to="/wizardFour">
          <button>Complete</button>
        </Link>
      </div>
    );
  }
}

export default WizardFour;
