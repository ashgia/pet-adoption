import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBarSide from "../NavBarSide/NavBarSide";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import {
  updateName,
  updateEmail,
  updateNumber,
  updateAddress,
  updatePhotoURL,
  updateAboutMe,
  updateMission,
  updatePolicy,
  getUser,
  setAdoptionInfo
} from "../../ducks/userReducer";
import { connect } from "react-redux";

class WizardThreeShelter extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    return (
      <div>
        <div className="navbar">
          <NavBarSide />
        </div>
        <div>
          <h1>Getting To Know You</h1>
          <Form>
            <FormGroup row>
              <Label for="nameInput" sm={2}>
                Name
              </Label>
              <Col sm={8}>
                <Input
                  type="name"
                  name="name"
                  id="nameInput"
                  placeholder="Full Name"
                  onChange={e => this.props.updateName(e.target.value)}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="emailInput" sm={2}>
                Email
              </Label>
              <Col sm={8}>
                <Input
                  type="email"
                  name="email"
                  id="emailInput"
                  placeholder="ex. johndoe@gmail.com"
                  onChange={e => this.props.updateEmail(e.target.value)}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="phoneInput" sm={2}>
                Phone Number
              </Label>
              <Col sm={8}>
                <Input
                  type="phone"
                  name="phone"
                  id="phoneInput"
                  placeholder="ex. 123-345-6789"
                  onChange={e => this.props.updateNumber(e.target.value)}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="addressInput" sm={2}>
                Address
              </Label>
              <Col sm={8}>
                <Input
                  type="address"
                  name="address"
                  id="addressInput"
                  placeholder="ex. 123 Main St. Dallas, TX 77066"
                  onChange={e => this.props.updateAddress(e.target.value)}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="uploadPhoto" sm={2}>
                Upload Photo
              </Label>
              <Col sm={10}>
                <Input
                  type="file"
                  name="file"
                  id="uploadPhoto"
                  onChange={e => this.props.updatePhotoURL(e.target.value)}
                />
                <FormText color="muted">
                  Import a photo for your profile page.
                </FormText>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="aboutme" sm={2}>
                About Me
              </Label>
              <Col sm={8}>
                <Input
                  type="textarea"
                  name="text"
                  id="aboutme"
                  placeholder="information of your shelter"
                  onChange={e => this.props.updateAboutMe(e.target.value)}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="mission" sm={2}>
                Mission
              </Label>
              <Col sm={8}>
                <Input
                  type="textarea"
                  name="text"
                  id="mission"
                  placeholder="mission of your shelter"
                  onChange={e => this.props.updateMission(e.target.value)}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="policy" sm={2}>
                Adoption Policy
              </Label>
              <Col sm={8}>
                <Input
                  type="textarea"
                  name="text"
                  id="policy"
                  placeholder="information of adoption policy"
                  onChange={e => this.props.updatePolicy(e.target.value)}
                />
              </Col>
            </FormGroup>
            <Link to="/userProfile">
              <Button
                onClick={e =>
                  this.props.setAdoptionInfo(
                    this.props.user.user.authid,
                    this.props.user.fullname,
                    this.props.user.city,
                    this.props.user.email,
                    this.props.user.phoneNumber,
                    this.props.user.address,
                    this.props.user.photoURL,
                    this.props.user.living,
                    this.props.user.aboutMe,
                    this.props.user.species,
                    this.props.user.breed,
                    this.props.user.gender,
                    this.props.user.color,
                    this.props.user.size,
                    this.props.user.age,
                    this.props.user.goodWith,
                    this.props.user.mission,
                    this.props.user.policy,
                    this.props.user.shelter
                  )
                }
              >
                Complete
              </Button>
            </Link>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = state => state;

export default connect(
  mapStatetoProps,
  {
    updateName,
    updateEmail,
    updateNumber,
    updateAddress,
    updatePhotoURL,
    updateAboutMe,
    updateMission,
    updatePolicy,
    getUser,
    setAdoptionInfo
  }
)(WizardThreeShelter);
