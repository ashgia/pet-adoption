import React, { Component } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import NavBarShelter from "../NavBarShelter/NavBarShelter";
import UploadPic from "../UploadPic/UploadPic";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import { connect } from "react-redux";
import "./AddPets.css";

class AddPets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pet: {},
      pets: [],
      petspecies: "",
      petbreed: "",
      petname: "",
      petgender: "",
      petsize: "",
      petcolor: "",
      petage: "",
      petgoodWith: "",
      petphotoURL: ""
    };
  }

  addPet() {
    let petArray = this.state.pets;
    petArray.push({
      petphotoURL: this.props.user.photoURL,
      species: this.state.petspecies,
      breed: this.state.petbreed,
      petname: this.state.petname
    });
    this.setState({ pets: petArray });
    axios.post("/api/user/pets", {
      petspecies: this.state.petspecies,
      petbreed: this.state.petbreed,
      petname: this.state.petname,
      petgender: this.state.petgender,
      petsize: this.state.petsize,
      petcolor: this.state.petcolor,
      petage: this.state.petage,
      petgoodWith: this.state.petgoodWith,
      petphotoURL: this.props.user.photoURL,
      userid: this.props.user.user.userid
    });
    this.setState({
      petspecies: "",
      petbreed: "",
      petname: "",
      petgender: "",
      petsize: "",
      petcolor: "",
      petage: "",
      petgoodWith: "",
      petphotoURL: ""
    });
  }

  render() {
    console.log(this.state);
    console.log(this.props);
    let petsDisplay = [];
    this.state.pets.length > 0
      ? (petsDisplay = this.state.pets.map(pet => {
          return (
            <div>
              <img src={pet.petphotoURL} />
              {pet.petname}
            </div>
          );
        }))
      : (petsDisplay = null);
    return (
      <div className="addpets-body">
        <div className="addpets-boxcolor">
          <div className="navbar">
            <NavBarShelter />
          </div>
          <div className="addpets-textbox">
            <div className="addpets-title">
              <h1>Add Pets</h1>
            </div>
            <div className="addpets-form">
              <Form>
                <FormGroup row>
                  <Label for="speciesSelect" sm={2}>
                    Species
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="select"
                      name="select"
                      id="speciesSelect"
                      onChange={e =>
                        this.setState({ petspecies: e.target.value })
                      }
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
                      onChange={e =>
                        this.setState({ petbreed: e.target.value })
                      }
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="nameInput" sm={2}>
                    Name
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="name"
                      name="name"
                      id="nameInput"
                      placeholder="Pet Name"
                      value={this.state.petname}
                      onChange={e => this.setState({ petname: e.target.value })}
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
                      onChange={e =>
                        this.setState({ petgender: e.target.value })
                      }
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
                      onChange={e =>
                        this.setState({ petcolor: e.target.value })
                      }
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
                      onChange={e => this.setState({ petsize: e.target.value })}
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
                      onChange={e => this.setState({ petage: e.target.value })}
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
                      onChange={e =>
                        this.setState({ petgoodWith: e.target.value })
                      }
                    >
                      <option>Children</option>
                      <option>Dogs</option>
                      <option>Cats</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="uploadPhoto" sm={2}>
                    Upload Photo
                  </Label>
                  <Col sm={10}>
                    {/* <Input
                  type="file"
                  name="file"
                  id="uploadPhoto"
                  onChange={e => this.props.updatePhotoURL(e.target.value)}
                /> */}
                    <UploadPic
                      onChange={e =>
                        this.setState({ petphotoURL: e.target.value })
                      }
                    />
                    <FormText color="muted">
                      Import a photo for your pet page.
                    </FormText>
                  </Col>
                </FormGroup>

                <div className="addpets-button">
                  {/* <Link to="/shelterProfile"> */}
                  <Button
                    onClick={e => {
                      this.addPet();
                    }}
                  >
                    Add
                  </Button>
                  {/* </Link> */}
                </div>
              </Form>
              <div>{petsDisplay}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => state)(AddPets);
