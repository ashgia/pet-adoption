import React, { Component } from "react";
import { connect } from "react-redux";
import NavBarShelter from "../NavBarShelter/NavBarShelter";
import {
  getUser,
  updateAboutMe,
  updateName,
  updateEmail,
  updateNumber,
  updatePhotoURL,
  updateCity,
  updateAddress,
  updateMission,
  updatePolicy
} from "../../ducks/userReducer";

class ShelterProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "view",
      fullname: "",
      email: "",
      phoneNumber: "",
      address: "",
      photoURL: "",
      aboutMe: "",
      city: "",
      mission: "",
      policy: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleChange = e => {
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSave = cb => {
    cb();
    this.setState({
      // text: this.state.inputText,
      mode: "view"
    });
  };

  handleEdit = e => {
    this.setState({ mode: "edit" });
  };

  renderInputField(name) {
    let input;

    if (this.state.mode !== "view") {
      input = (
        <p>
          <input name={name} onChange={this.handleChange} />
        </p>
      );
    }

    return input;
  }

  renderButton(cb) {
    let button;

    if (this.state.mode === "view") {
      button = <button onClick={this.handleEdit}>Edit</button>;
    } else {
      button = <button onClick={() => this.handleSave(cb)}>Save</button>;
    }

    return button;
  }
  componentDidMount() {
    this.props.getUser();
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
                  name: {this.props.user.fullname}
                  {this.renderInputField("fullname")}
                  {this.renderButton(() =>
                    this.props.updateName(this.state.fullname)
                  )}
                </div>
                <div className="city">
                  city: {this.props.user.city}
                  {this.renderInputField("city")}
                  {this.renderButton(() =>
                    this.props.updateCity(this.state.city)
                  )}
                </div>
                <div className="aboutme">
                  about me: {this.props.user.aboutMe}
                  {this.renderInputField("aboutMe")}
                  {this.renderButton(() =>
                    this.props.updateAboutMe(this.state.aboutMe)
                  )}
                </div>
                <div className="mission">
                  mission: {this.props.user.mission}
                  {this.renderInputField("mission")}
                  {this.renderButton(() =>
                    this.props.updateMission(this.state.mission)
                  )}
                </div>
                <div className="policy">
                  policy: {this.props.user.policy}
                  {this.renderInputField("policy")}
                  {this.renderButton(() =>
                    this.props.updatePolicy(this.state.policy)
                  )}
                </div>
                <div className="user-pic">
                  photo: <img src={this.props.user.photoURL} />
                  {this.renderInputField("photoURL")}
                  {this.renderButton(() =>
                    this.props.updatePhotoURL(this.state.photoURL)
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="shelter-mainbox">
            <h1>Basic Info</h1>

            <div className="address">
              address: {this.props.user.address}
              {this.renderInputField("address")}
              {this.renderButton(() =>
                this.props.updateAddress(this.state.address)
              )}
            </div>
            <div className="phonenumber">
              phone Number: {this.props.user.phoneNumber}
              {this.renderInputField("phoneNumber")}
              {this.renderButton(() =>
                this.props.updateNumber(this.state.phoneNumber)
              )}
            </div>
            <div className="email">
              email: {this.props.user.email}
              {this.renderInputField("email")}
              {this.renderButton(() =>
                this.props.updateEmail(this.state.email)
              )}
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
    getUser,
    updateAboutMe,
    updateName,
    updateEmail,
    updateNumber,
    updatePhotoURL,
    updateCity,
    updateAddress,
    updateMission,
    updatePolicy
  }
)(ShelterProfile);
