import React, { Component } from "react";
import { connect } from "react-redux";
import NavBarSide from "../NavBarSide/NavBarSide";
import { getShelter } from "../../ducks/userReducer";

class ShelterDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shelter: {}
    };
  }

  async componentDidMount() {
    await this.props.getShelter(this.props.match.params.id).then(response => {
      console.log(response);
      this.setState({ shelter: response.value.data[0] });
    });
  }

  render() {
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
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  {
    getShelter
  }
)(ShelterDetails);
