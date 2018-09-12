import React, { Component } from "react";
import { Link } from "react-router-dom";
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
  updatePhotoURL,
  updateLiving,
  updateAboutMe,
  setAdoptionInfo
} from "../../ducks/userReducer";
import { connect } from "react-redux";

class WizardFour extends Component {
  render() {
    return (
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
            <Label for="livingsituation" sm={2}>
              Living Situation
            </Label>
            <Col sm={8}>
              <Input
                type="textarea"
                name="text"
                id="livingsituation"
                placeholder="Describe your living sitation ex. Do you have a backyard? apartment?"
                onChange={e => this.props.updateLiving(e.target.value)}
              />
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
                placeholder="information for your profile where shelters can read!"
                onChange={e => this.props.updateAboutMe(e.target.value)}
              />
            </Col>
          </FormGroup>
          <Link to="/wizardFour">
            <Button
              onClick={e =>
                this.props.setAdoptionInfo(
                  this.props.user.fullname,
                  this.props.user.city,
                  this.props.user.email,
                  this.props.user.phoneNumber,
                  this.props.user.photoURL,
                  this.props.user.living,
                  this.props.user.aboutMe,
                  this.props.user.species,
                  this.props.user.breed,
                  this.props.user.gender,
                  this.props.user.color,
                  this.props.user.size,
                  this.props.user.age,
                  this.props.user.goodWith
                )
              }
            >
              Complete
            </Button>
          </Link>
        </Form>
      </div>
    );
  }
}

// function mapStatetoProps(state) {
//   return {
//     name: state.name,
//     email: state.email,
//     phoneNumber: state.phoneNumber,
//     photoURL: state.photoURL,
//     living: state.living,
//     aboutMe: state.aboutMe
//   };
// }
const mapStatetoProps = state => state;

export default connect(
  mapStatetoProps,
  {
    updateName,
    updateEmail,
    updateNumber,
    updatePhotoURL,
    updateLiving,
    updateAboutMe,
    setAdoptionInfo
  }
)(WizardFour);
