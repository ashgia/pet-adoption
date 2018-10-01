import React, { Component } from "react";
import { connect } from "react-redux";
import NavBarSide from "../NavBarSide/NavBarSide";
import {
  getUser,
  updateAboutMe,
  updateName,
  updateEmail,
  updateNumber,
  updatePhotoURL,
  updateLiving,
  updateCity,
  updateSpecies,
  updateGender,
  updateBreed,
  updateColor,
  updateSize,
  updateAge,
  updateGoodWith
} from "../../ducks/userReducer";
import "./UserProfile.css";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // text: "",
      // inputText: "",
      mode: "view",
      fullname: "",
      email: "",
      phoneNumber: "",
      photoURL: "",
      living: "",
      aboutMe: "",
      city: "",
      species: "",
      breed: "",
      gender: "",
      color: "",
      size: "",
      age: "",
      goodWith: ""
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
      button = (
        <button id="edit" onClick={this.handleEdit}>
          Edit
        </button>
      );
    } else {
      button = (
        <button id="save-button" onClick={() => this.handleSave(cb)}>
          Save
        </button>
      );
    }

    return button;
  }
  componentDidMount() {
    this.props.getUser();
    console.log(this.props);
  }
  render() {
    return (
      <div className="userprofile-body">
        <div className="userprofile-boxcolor" />
        <div className="navbar">
          <NavBarSide />
        </div>
        <div className="shelterprofile-mainbox">
          <div className="shelterprofile-mainbox-left">
            <div className="user-pic-box">
              <div className="user-pic-shelterprofile">
                <div className="user-pic">
                  <img src={this.props.user.photoURL} />
                  {this.renderInputField("photoURL")}
                  {this.renderButton(() =>
                    this.props.updatePhotoURL(this.state.photoURL)
                  )}
                </div>
              </div>
            </div>
            <div className="profile-bottom-left">
              <div className="profile-bottom-left-right">
                <div className="info-title">
                  <p>Information</p>
                </div>
                <div id="userprofiletext" className="email">
                  {this.props.user.email}
                  {this.renderInputField("email")}
                  {this.renderButton(() =>
                    this.props.updateEmail(this.state.email)
                  )}
                </div>
                <div id="userprofiletext" className="phonenumber">
                  {this.props.user.phoneNumber}
                  {this.renderInputField("phoneNumber")}
                  {this.renderButton(() =>
                    this.props.updateNumber(this.state.phoneNumber)
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="shelterprofile-mainbox-right">
            <div className="profile-right">
              <div className="profile-top-top">
                <div className="user-name-shelterprofile">
                  {this.props.user.fullname}
                  {this.renderInputField("fullname")}
                  {this.renderButton(() =>
                    this.props.updateName(this.state.fullname)
                  )}
                </div>
                <div className="cityprofile">
                  {this.props.user.city}
                  {this.renderInputField("city")}
                  {this.renderButton(() =>
                    this.props.updateCity(this.state.city)
                  )}
                </div>
                <div className="profile-top">
                  <div className="aboutme-title">
                    <p>About Me</p>
                  </div>
                  <div id="userprofiletext" className="aboutme-userprofile">
                    {this.props.user.aboutMe}
                    {this.renderInputField("aboutMe")}
                    {this.renderButton(() =>
                      this.props.updateAboutMe(this.state.aboutMe)
                    )}
                  </div>
                  <div id="userprofiletext" className="living">
                    {this.props.user.living}
                    {this.renderInputField("living")}
                    {this.renderButton(() =>
                      this.props.updateLiving(this.state.living)
                    )}
                  </div>
                </div>
              </div>
              <div className="profile-middle">
                <div className="interest-title">
                  <p id="interest-titleprofile">I Am Interested</p>
                </div>
                <div id="adopt-info" className="species">
                  species: {this.props.user.species}
                  {this.renderInputField("species")}
                  {this.renderButton(() =>
                    this.props.updateSpecies(this.state.species)
                  )}
                </div>
                <div id="adopt-info" className="breed">
                  breed: {this.props.user.breed}
                  {this.renderInputField("breed")}
                  {this.renderButton(() =>
                    this.props.updateBreed(this.state.breed)
                  )}
                </div>
                <div id="adopt-info" className="gender">
                  gender: {this.props.user.gender}
                  {this.renderInputField("gender")}
                  {this.renderButton(() =>
                    this.props.updateGender(this.state.gender)
                  )}
                </div>
                <div id="adopt-info" className="color">
                  color: {this.props.user.color}
                  {this.renderInputField("color")}
                  {this.renderButton(() =>
                    this.props.updateColor(this.state.color)
                  )}
                </div>
                <div id="adopt-info" className="size">
                  size: {this.props.user.size}
                  {this.renderInputField("size")}
                  {this.renderButton(() =>
                    this.props.updateSize(this.state.size)
                  )}
                </div>
                <div id="adopt-info" className="age">
                  age: {this.props.user.age}
                  {this.renderInputField("age")}
                  {this.renderButton(() =>
                    this.props.updateAge(this.state.age)
                  )}
                </div>
                <div id="adopt-info" className="goodwith">
                  good with: {this.props.user.goodWith}
                  {this.renderInputField("goodwith")}
                  {this.renderButton(() =>
                    this.props.updateGoodWith(this.state.goodWith)
                  )}
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
    getUser,
    updateAboutMe,
    updateName,
    updateEmail,
    updateNumber,
    updatePhotoURL,
    updateLiving,
    updateCity,
    updateSpecies,
    updateGender,
    updateBreed,
    updateColor,
    updateSize,
    updateAge,
    updateGoodWith
  }
)(UserProfile);
