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
          <NavBarSide />
        </div>
        <div>
          <h1>User Profile</h1>
          <div className="profile-introduction">
            <div className="profile-introduction-background">
              <div clasName="introduction-inner">
                <div className="aboutme">
                  about me: {this.props.user.aboutMe}
                  {this.renderInputField("aboutMe")}
                  {this.renderButton(() =>
                    this.props.updateAboutMe(this.state.aboutMe)
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="user-mainbox">
            <h1>Basic Info</h1>
            <div className="user-name">
              name: {this.props.user.fullname}
              {this.renderInputField("fullname")}
              {this.renderButton(() =>
                this.props.updateName(this.state.fullname)
              )}
            </div>
            <div className="user-pic">
              photo: {this.props.user.photoURL}
              {this.renderInputField("photoURL")}
              {this.renderButton(() =>
                this.props.updatePhotoURL(this.state.photoURL)
              )}
            </div>
            <div className="city">
              city: {this.props.user.city}
              {this.renderInputField("city")}
              {this.renderButton(() => this.props.updateCity(this.state.city))}
            </div>
          </div>
          <div className="user-adoption-box">
            <h1>Interested In Adopting:</h1>
            <div className="species">
              species: {this.props.user.species}
              {this.renderInputField("species")}
              {this.renderButton(() =>
                this.props.updateSpecies(this.state.species)
              )}
            </div>
            <div className="breed">
              breed: {this.props.user.breed}
              {this.renderInputField("breed")}
              {this.renderButton(() =>
                this.props.updateBreed(this.state.breed)
              )}
            </div>
            <div className="gender">
              gender: {this.props.user.gender}
              {this.renderInputField("gender")}
              {this.renderButton(() =>
                this.props.updateGender(this.state.gender)
              )}
            </div>
            <div className="color">
              color: {this.props.user.color}
              {this.renderInputField("color")}
              {this.renderButton(() =>
                this.props.updateColor(this.state.color)
              )}
            </div>
            <div className="size">
              size: {this.props.user.size}
              {this.renderInputField("size")}
              {this.renderButton(() => this.props.updateSize(this.state.size))}
            </div>
            <div className="age">
              age: {this.props.user.age}
              {this.renderInputField("age")}
              {this.renderButton(() => this.props.updateAge(this.state.age))}
            </div>
            <div className="goodwith">
              good with: {this.props.user.goodWith}
              {this.renderInputField("goodwith")}
              {this.renderButton(() =>
                this.props.updateGoodWith(this.state.goodWith)
              )}
            </div>
          </div>
          <div className="user-personal-box">
            <h1>About Me</h1>

            <div className="living">
              living situation:
              {this.props.user.living}
              {this.renderInputField("living")}
              {this.renderButton(() =>
                this.props.updateLiving(this.state.living)
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
