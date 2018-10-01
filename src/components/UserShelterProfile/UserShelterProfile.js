import React, { Component } from "react";
import { connect } from "react-redux";
import NavBarShelter from "../NavBarShelter/NavBarShelter";
import { getProfile } from "../../ducks/userReducer";
import { Link } from "react-router-dom";
import "./UserShelterProfile.css";
import { Button } from "reactstrap";

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
      <div className="usershelterprofile-body">
        <div className="navbar">
          <NavBarShelter />
        </div>
        <div className="shelterprofile-mainbox">
          <div className="shelterprofile-mainbox-left">
            <div className="user-pic-box">
              <div className="user-pic-shelterprofile">
                <div className="user-pic">
                  <img src={this.state.user.photourl} />
                </div>
              </div>
            </div>
            <div className="profile-bottom-left">
              <div className="profile-bottom-left-right">
                <div className="info-title">
                  <p id="information-title">Information</p>
                </div>
                <div id="usershelter" className="email">
                  {this.state.user.email}
                </div>
                <div className="Chat-Link">
                  <Link to="/chat">
                    <Button>Chat With Me</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="usershelterprofile-mainbox-right">
            <div className="userprofile-right">
              <div className="userprofile-top-top">
                <div className="user-name-userprofile">
                  <div className="user-name-usershelter">
                    {this.state.user.fullname}
                  </div>
                  <div className="city-usershelter">{this.state.user.city}</div>
                  <div className="profile-top">
                    <div className="aboutme-title">
                      <p id="aboutme-usershelter">About Me</p>
                    </div>
                    <div id="usershelter" className="aboutme-usershelter">
                      {this.state.user.aboutme}
                    </div>
                    <div id="usershelter" className="living">
                      {this.state.user.living}
                    </div>
                  </div>
                </div>
                <div className="profile-middle">
                  <div className="interest-title">
                    <p id="interest-title">I Am Interested</p>
                  </div>
                  <div id="usershelter" className="species">
                    species: {this.state.user.species}
                  </div>
                  <div id="usershelter" className="breed">
                    breed: {this.state.user.breed}
                  </div>
                  <div id="usershelter" className="gender">
                    gender: {this.state.user.gender}
                  </div>
                  <div id="usershelter" className="color">
                    color: {this.state.user.color}
                  </div>
                  <div id="usershelter" className="size">
                    size: {this.state.user.size}
                  </div>
                  <div id="usershelter" className="age">
                    age: {this.state.user.age}
                  </div>
                  <div id="usershelter" className="goodwith">
                    good with: {this.state.user.goodwith}
                  </div>
                </div>
              </div>
            </div>
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
