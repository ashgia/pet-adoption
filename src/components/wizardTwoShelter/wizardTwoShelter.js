import React, { Component } from "react";
import { Link } from "react-router-dom";
import Geosuggest from "react-geosuggest";
import NavBarSide from "../NavBarSide/NavBarSide";
import { connect } from "react-redux";
import { updateCity } from "../../ducks/userReducer";

class WizardTwoShelter extends Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <NavBarSide />
        </div>
        <h1>What City Are You In?</h1>
        <Geosuggest />
        <Link to="/wizardThreeShelter">
          <button>Next</button>
        </Link>
      </div>
    );
  }
}

export default WizardTwoShelter;
