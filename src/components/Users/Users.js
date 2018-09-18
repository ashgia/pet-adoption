import React, { Component } from "react";
import { connect } from "react-redux";
import NavBarShelter from "../NavBarShelter/NavBarShelter";
import Input from "../Input/Input";
import { getUsers } from "../../ducks/userReducer";
import "./Users.css";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      search: ""
    };
  }
  async componentDidMount() {
    await this.props.getUsers().then(response => {
      console.log(response);
      this.setState({ users: response.value.data });
    });
  }
  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  filterHandler(filter) {
    this.setState({ search: filter });
  }

  render() {
    let usersDisplay = this.state.users
      .filter(user => user.city.includes(this.state.search))
      .map(user => {
        // console.log(user);
        if (user.city.includes(this.state.search)) {
          return (
            <div className="usercard">
              <div className="fullname">{user.fullname}</div>
              <div className="city">{user.city}</div>
              <div className="species"> Interested in: {user.species}</div>
            </div>
          );
        }
      });
    return (
      <div className="userpage">
        <div className="navbar">
          <NavBarShelter />
        </div>
        <div className="search-input">
          <div className="search-title">Search for Users by City:</div>
          <div className="search-input">
            <Input
              changed={e => this.filterHandler(e.target.value)}
              placeholder="Search User"
            />
          </div>
        </div>
        <div className="usersection">
          <div className="usertitle"> Users: </div>
          <div className="usercardbox"> {usersDisplay}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  {
    getUsers
  }
)(Users);
