import React, { Component } from "react";
import { connect } from "react-redux";
import NavBarSide from "../NavBarSide/NavBarSide";
import { getProfile } from "../../ducks/userReducer";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Card,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
  Col,
  Button
} from "reactstrap";

class ShelterDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shelter: {},
      pets: []
    };
  }

  async componentDidMount() {
    await this.props.getProfile(this.props.match.params.id).then(response => {
      // console.log(response);
      this.setState({ shelter: response.value.data[0] });
    });
    axios.get(`/api/pets/${this.state.shelter.userid}`).then(response => {
      console.log(response);
      this.setState({ pets: response.data });
    });
  }

  render() {
    // console.log(this.props);
    console.log("PETS:", this.state.pets);
    let petsDisplay = [];
    this.state.pets.length > 0
      ? (petsDisplay = this.state.pets.map(pet => {
          return (
            <Col sm="3">
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
      <div className="body-profile-page">
        <div className="navbar">
          <NavBarSide />
        </div>
        <div>
          <h1>Shelter Profile</h1>
          <div className="profile-introduction">
            <div className="profile-introduction-background">
              <div clasName="introduction-inner">
                <div className="user-name">
                  name: {this.state.shelter.fullname}
                </div>
                <div className="city">city: {this.state.shelter.city}</div>
                <div className="aboutme">
                  about me: {this.state.shelter.aboutMe}
                </div>
                <div className="mission">
                  mission: {this.state.shelter.mission}
                </div>
                <div className="policy">
                  policy: {this.state.shelter.policy}
                </div>
                <div className="user-pic">
                  photo: {this.state.shelter.photoURL}
                </div>
              </div>
            </div>
          </div>
          <div className="shelter-mainbox">
            <h1>Basic Info</h1>

            <div className="address">address: {this.state.shelter.address}</div>
            <div className="phonenumber">
              phone Number: {this.state.shelter.phoneNumber}
            </div>
            <div className="email">email: {this.state.shelter.email}</div>
          </div>
          <Link
            to={`/chat/${this.props.user.user.userid || 1}/${
              this.state.shelter.userid
            }`}
          >
            Chat With Us
          </Link>
          {petsDisplay}
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
)(ShelterDetails);
