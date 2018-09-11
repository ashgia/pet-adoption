import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { connect } from "react-redux";
import {
  updateSpecies,
  updateBreed,
  updateGender,
  updateColor,
  updateSize,
  updateAge,
  updateGoodWith
  // setAdoptionInfo
} from "../../ducks/userReducer";

class WizardThree extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>What Are You Interested In Adopting?</h1>
        <Form>
          <FormGroup row>
            <Label for="speciesSelect" sm={2}>
              Pet of Interest
            </Label>
            <Col sm={8}>
              <Input
                type="select"
                name="select"
                id="speciesSelect"
                onChange={e => this.props.updateSpecies(e.target.value)}
              >
                <option>Dog</option>
                <option>Cat</option>
                <option>Rabbit</option>
                <option>Guinea Pig</option>
                <option>Snake</option>
                <option>Turtle</option>
                <option>Exotic</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="breed" sm={2}>
              Breed
            </Label>
            <Col sm={8}>
              <Input
                type="breed"
                name="breed"
                id="breed"
                placeholder="ex. German Shepherd"
                onChange={e => this.props.updateBreed(e.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="genderSelect" sm={2}>
              Gender
            </Label>
            <Col sm={8}>
              <Input
                type="select"
                name="select"
                id="genderSelect"
                onChange={e => this.props.updateGender(e.target.value)}
              >
                <option>Male</option>
                <option>Female</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="colorInput" sm={2}>
              Color
            </Label>
            <Col sm={8}>
              <Input
                type="colorInput"
                name="colorInput"
                id="colorInput"
                placeholder="ex. Black, Brindle, etc"
                onChange={e => this.props.updateColor(e.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="size" sm={2}>
              Size
            </Label>
            <Col sm={8}>
              <Input
                type="size"
                name="size"
                id="size"
                placeholder="ex. Large, <50lbs, etc"
                onChange={e => this.props.updateSize(e.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="age" sm={2}>
              Age
            </Label>
            <Col sm={8}>
              <Input
                type="age"
                name="age"
                id="age"
                placeholder="ex. <1yr, <5yrs, etc"
                onChange={e => this.props.updateAge(e.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="goodwithSelectMulti" sm={2}>
              Good With:
            </Label>
            <Col sm={8}>
              <Input
                type="select"
                name="selectMulti"
                id="goodwithSelectMulti"
                multiple
                onChange={e => this.props.updateGoodWith(e.target.value)}
              >
                <option>Children</option>
                <option>Dogs</option>
                <option>Cats</option>
              </Input>
            </Col>
          </FormGroup>
        </Form>

        <Link to="/wizardFour">
          <Button
          // onClick={e => this.props.setAdoptionInfo()}
          >
            Next
          </Button>
        </Link>
      </div>
    );
  }
}

const mapStatetoProps = state => state;

export default connect(
  mapStatetoProps,
  {
    updateSpecies,
    updateBreed,
    updateGender,
    updateColor,
    updateSize,
    updateAge,
    updateGoodWith
    // setAdoptionInfo
  }
)(WizardThree);
