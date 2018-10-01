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
  Button,
  Row,
  Container
} from "reactstrap";
import "./ShelterDetails.css";

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
      // console.log(response);
      this.setState({ pets: response.data });
    });
  }

  render() {
    // console.log(this.props);
    console.log(this.state);
    // console.log("PETS:", this.state.pets);
    let petsDisplay = [];
    this.state.pets.length > 0
      ? (petsDisplay = this.state.pets.map(pet => {
          return (
            <Col sm="3">
              <div className="carddeck">
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
                        <CardText>
                          {pet.breed}
                          <br />
                          {pet.gender}
                          <br />
                          {pet.age}
                          <br />
                          {pet.size}
                          <br />
                          {pet.color}
                        </CardText>
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
      <div className="shelterdetails-body">
        <div className="navbar">
          <NavBarSide />
        </div>
        <div className="shelterdetails-mainbox">
          <div className="shelterdetails-mainbox-left">
            <div className="user-pic-box-shelterdetails">
              <div className="user-pic-shelterdetails">
                <img id="shelterdetailspic" src={this.state.shelter.photourl} />
              </div>
            </div>
            <div className="profile-bottom-left">
              <div className="profile-bottom-left-right">
                <div className="info-title">
                  <p id="shelterdetails">Information</p>
                </div>
                <div id="info" className="address">
                  {this.state.shelter.address}
                </div>
                <div id="info" className="phonenumber">
                  {this.state.shelter.phone}
                </div>
                <div id="info" className="email">
                  {this.state.shelter.email}
                </div>
                <div className="Chat-Link">
                  <Link
                    to={`/chat/${this.props.user.user.userid || 1}/${
                      this.state.shelter.userid
                    }`}
                  >
                    <Button>Chat With Us</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="shelterdetailsmainbox-right">
            <div className="profile-right">
              <div className="profile-top-top">
                <div className="city-shelterdetails">
                  {this.state.shelter.city}
                </div>
                <div className="user-name-shelterdetails">
                  {this.state.shelter.fullname}
                </div>
              </div>
              <div className="profile-top">
                <div className="aboutme-title-shelterdetails">
                  <p id="shelterdetails">About Us</p>
                </div>
                <div className="aboutme-shelterdetails">
                  {this.state.shelter.aboutme}
                </div>
              </div>
              <div className="profile-middle">
                <div className="mission-title-shelterdetails">
                  <p id="shelterdetails">Our Mission</p>
                </div>
                <div className="mission">{this.state.shelter.mission}</div>
              </div>
              <div className="profile-bottom">
                <div className="policy-title-shelterdetails">
                  <p id="shelterdetails">Our Policy</p>
                </div>
                <div className="policy">{this.state.shelter.policy}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="adoptable-pets-box-shelterdetails">
          <div className="adoptable-pets-cards-title-shelterdetails">
            <p id="adoptpet-title"> Adoptable Pets</p>
          </div>
          <Container fluid>
            <Row>{petsDisplay}</Row>
          </Container>
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
