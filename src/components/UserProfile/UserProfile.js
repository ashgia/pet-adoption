import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../../ducks/userReducer";
import NavBarSide from "../NavBarSide/NavBarSide";

class UserProfile extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    return (
      <div className="body-profile-page">
        <div className="navbar">
          <NavBarSide />
        </div>
        <div>
          <h1>User Profile</h1>
          <div className="profile-introduction">
            <div className="profile-introduction-background">
              <div clasName="introduction-inner">
                <div className="aboutme">{this.props.user.aboutMe}</div>
              </div>
            </div>
          </div>
          <div className="user-mainbox">
            <h1>Basic Info</h1>
            <div className="user-name">{this.props.user.fullname}</div>
            <div className="user-pic">{this.props.user.photoURL}</div>
            <div className="city">{this.props.user.city}</div>
          </div>
          <div className="user-adoption-box">
            <h1>Interested In Adopting:</h1>
            <div className="species">{this.props.user.species}</div>
            <div className="breed">{this.props.user.breed}</div>
            <div className="gender">{this.props.user.gender}</div>
            <div className="color">{this.props.user.color}</div>
            <div className="size">{this.props.user.size}</div>
            <div className="age">{this.props.user.age}</div>
            <div className="goodwith">{this.props.user.goodWith}</div>
          </div>
          <div className="user-personal-box">
            <h1>About Me</h1>

            <div className="living">{this.props.user.living}</div>
            <div className="phonenumber">{this.props.user.phoneNumber}</div>
            <div className="email">{this.props.user.email}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getUser }
)(UserProfile);
