import React, { Component } from "react";
import { connect } from "react-redux";
import NavBarSide from "../NavBarSide/NavBarSide";
import Input from "../Input/Input";
import { getShelters } from "../../ducks/userReducer";

class Shelters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shelters: [],
      search: ""
    };
  }
  async componentDidMount() {
    await this.props.getShelters().then(response => {
      this.setState({ shelters: response.value.data });
    });
  }
  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  filterHandler(filter) {
    this.setState({ search: filter });
  }

  render() {
    let sheltersDisplay = this.state.shelters
      .filter(shelter => shelter.city.includes(this.state.search))
      .map(shelter => {
        if (shelter.city.includes(this.state.search)) {
          return (
            <div className="sheltercard">
              <div className="fullname">{shelter.fullname}</div>
              <div className="city">{shelter.city}</div>
            </div>
          );
        }
      });
    return (
      <div className="shelterpage">
        <div className="navbar">
          <NavBarSide />
        </div>
        <div className="search-input">
          <div className="search-title">Search for Shelters by City:</div>
          <div className="search-input">
            <Input
              changed={e => this.filterHandler(e.target.value)}
              placeholder="Search Shelter"
            />
          </div>
        </div>
        <div className="usersection">
          <div className="usertitle"> Shelters: </div>
          <div className="usercard"> {sheltersDisplay}</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  {
    getShelters
  }
)(Shelters);
