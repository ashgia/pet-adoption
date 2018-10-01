import React, { Component } from "react";
import { connect } from "react-redux";
import NavBarShelter from "../NavBarShelter/NavBarShelter";
import {
  Card,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
  Col,
  Button,
  Container,
  Row
} from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

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
import "./ShelterProfile.css";
// import { getPets } from "../../ducks/petReducer";

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
      policy: "",
      pets: []
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
        <button id="edit-button" onClick={this.handleEdit}>
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
    // const { id } = this.props.user.user.userid;
    axios.get("/api/users/shelter/pets").then(response => {
      console.log(response);
      this.setState({ pets: response.data });
    });

    // this.props.getPets().then(response => {
    //   this.setState({ pets: response.value.data });
    // });
  }
  render() {
    console.log(this.props);
    console.log(this.state);
    console.log(this.state.pets);
    let petsDisplay = [];
    this.state.pets.length > 0
      ? (petsDisplay = this.state.pets.map(pet => {
          return (
            <Col lg="3">
              <div className="petcarddeck">
                <CardDeck>
                  <div className="petcarddeck-single">
                    <Card>
                      <CardBody>
                        <CardTitle>
                          <div className="petname">{pet.petname}</div>
                        </CardTitle>
                        <CardSubtitle>
                          <div className="petspecies">{pet.species}</div>
                        </CardSubtitle>
                      </CardBody>
                      <img
                        width="100%"
                        src={pet.photourl}
                        alt="Card image cap"
                      />
                      <CardBody>
                        <CardText>{pet.breed}</CardText>
                        <CardText>{pet.gender}</CardText>
                        <CardText>{pet.age}</CardText>
                        <CardText>{pet.size}</CardText>
                        <CardText>{pet.color}</CardText>
                      </CardBody>
                    </Card>
                  </div>
                </CardDeck>
              </div>
            </Col>
          );
        }))
      : (petsDisplay = null);
    return (
      <div className="shelterprofile-body">
        <div className="shelterprofile-boxcolor" />
        <div className="navbar">
          <NavBarShelter />
        </div>

        <div className="shelterprofile-mainbox">
          <div className="shelterprofile-mainbox-left">
            <div className="user-pic-box">
              <div className="user-pic-shelterprofile">
                <img src="https://pbs.twimg.com/profile_images/1396578735/Screen_shot_2011-06-14_at_10.05.54_PM_400x400.png" />
                {/* <img src={this.props.user.photoURL} /> */}
                {this.renderInputField("photoURL")}
                {this.renderButton(() =>
                  this.props.updatePhotoURL(this.state.photoURL)
                )}
              </div>
            </div>
            <div className="profile-bottom-left">
              <div className="profile-bottom-left-right">
                <div className="info-title">
                  <p id="sheltertext">Information</p>
                </div>
                <div id="sheltertextsmall" className="address">
                  {this.props.user.address}
                  {this.renderInputField("address")}
                  {this.renderButton(() =>
                    this.props.updateAddress(this.state.address)
                  )}
                </div>
                <div id="sheltertextsmall" className="phonenumber">
                  {this.props.user.phoneNumber}
                  {this.renderInputField("phoneNumber")}
                  {this.renderButton(() =>
                    this.props.updateNumber(this.state.phoneNumber)
                  )}
                </div>
                <div id="sheltertextsmall" className="email">
                  {this.props.user.email}
                  {this.renderInputField("email")}
                  {this.renderButton(() =>
                    this.props.updateEmail(this.state.email)
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="shelterprofile-mainbox-right">
            {/* <div className="shelterprofile-title">
              <p>Your Shelter Profile</p>
            </div> */}
            {/* <div className="profile-info"> */}
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
                    <p id="sheltertext">About Us</p>
                  </div>
                  <div id="sheltertextsmall" className="aboutme-shelterprofile">
                    {this.props.user.aboutMe}
                    {this.renderInputField("aboutMe")}
                    {this.renderButton(() =>
                      this.props.updateAboutMe(this.state.aboutMe)
                    )}
                  </div>
                </div>
              </div>
              <div className="profile-middle">
                <div className="mission-title">
                  <p id="sheltertext">Our Mission</p>
                </div>

                <div id="sheltertextsmall" className="mission">
                  {this.props.user.mission}
                  {this.renderInputField("mission")}
                  {this.renderButton(() =>
                    this.props.updateMission(this.state.mission)
                  )}
                </div>
              </div>
              <div className="profile-bottom">
                <div className="policy-title">
                  <p id="sheltertext">Our Policy</p>
                </div>
                <div id="sheltertextsmall" className="policy">
                  {this.props.user.policy}
                  {this.renderInputField("policy")}
                  {this.renderButton(() =>
                    this.props.updatePolicy(this.state.policy)
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="adoptable-pets-box">
          <div className="add-pets-button">
            <Link to="/addpets">
              <Button>Add Pets</Button>
            </Link>
          </div>
          <div className="adoptable-pets-cards">
            <div className="adoptable-pets-cards-title">
              <p> Adoptable Pets</p>
            </div>
            <div className="card-box">
              <Container fluid>
                <Row>{petsDisplay}</Row>
              </Container>
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
