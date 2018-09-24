import React, { Component } from "react";
import { connect } from "react-redux";
import NavBarShelter from "../NavBarShelter/NavBarShelter";
import { getProfile } from "../../ducks/userReducer";

class UserShelterProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  async componentDidMount() {
    await this.props.getProfile(this.props.match.params.id).then(response => {
      console.log(response);
      this.setState({ user: response.value.data[0] });
    });
  }

  render() {
    return (
      <div className="body-profile-page">
        <div className="navbar">
          <NavBarShelter />
        </div>
        <div>
          <h1>User Profile</h1>
          <div className="profile-introduction">
            <div className="profile-introduction-background">
              <div clasName="introduction-inner">
                <div className="user-name">
                  name: {this.state.user.fullname}
                </div>
                <div className="city">city: {this.state.user.city}</div>
                <div className="aboutme">
                  about me: {this.state.user.aboutMe}
                </div>

                <div className="user-pic">
                  photo: {this.state.user.photoURL}
                </div>
              </div>
            </div>
          </div>
          <div className="user-mainbox">
            <h1>Interested in: </h1>
            <div className="species">species: {this.state.user.species}</div>
            <div className="breed">breed: {this.state.user.breed}</div>
            <div className="gender">gender: {this.state.user.gender}</div>
            <div className="color">color: {this.state.user.color}</div>
            <div className="size">size: {this.state.user.size}</div>
            <div className="age">age: {this.state.user.age}</div>
            <div className="goodwith">
              good with: {this.state.user.goodWith}
            </div>
            <div className="living">
              living situation: {this.state.user.living}
            </div>
            <div className="email">email: {this.state.user.email}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  {
    getProfile
  }
)(UserShelterProfile);
