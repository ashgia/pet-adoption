import React, { Component } from "react";
import { connect } from "react-redux";
import NavBarShelter from "../NavBarShelter/NavBarShelter";
import Input from "../Input/Input";
import { getUsers } from "../../ducks/userReducer";
import { Link } from "react-router-dom";
import {
  Card,
  CardTitle,
  CardText,
  CardDeck,
 
  CardSubtitle,

  CardBody,
  Col,
  Row,
  Container
} from "reactstrap";
import "./Users.css";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      search: ""
    };
  }
  async componentDidMount() {
    await this.props.getUsers().then(response => {
      console.log(response);
      this.setState({ users: response.value.data });
    });
  }
  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  filterHandler(filter) {
    this.setState({ search: filter });
  }

  render() {
    let usersDisplay = this.state.users
      .filter(user => user.city.includes(this.state.search))
      .map(user => {
        // console.log(user);
        if (user.city.includes(this.state.search)) {
          return (
            <Col sm="3">
              <div className="carddeck">
                <CardDeck>
                  <div className="carddeck-single">
                    <Card>
                      <CardBody>
                        <CardTitle>
                          <div className="fullname">{user.fullname}</div>
                        </CardTitle>
                        <CardSubtitle>
                          <div className="city">{user.city}</div>
                        </CardSubtitle>
                      </CardBody>
                      <img
                        width="100%"
                        src={user.photourl}
                        alt="Card image cap"
                      />
                      <CardBody>
                        <CardText>Interested In A {user.species}</CardText>
                        {/* <CardLink href="#">About Us</CardLink> */}
                        <Link
                          to={`/usershelter/${user.userid}`}
                          className="shelter-link"
                        >
                          View Profile
                        </Link>
                        {/* <CardLink href="#">Contact</CardLink> */}
                      </CardBody>
                    </Card>
                  </div>
                </CardDeck>
              </div>
            </Col>
            // <div className="usercard">
            //   <div className="fullname">{user.fullname}</div>
            //   <div className="city">{user.city}</div>
            //   <div className="species"> Interested in: {user.species}</div>
            // </div>
          );
        }
      });
    return (
      <div className="users-body">
        <div className="users-boxcolor">
          <div className="navbar">
            <NavBarShelter />
          </div>
          <div className="users-textbox">
            <div className="users-title">
              <p>Users Near You</p>
            </div>
            <div className="users-info">
              <p>
                Wobbegong shark peaclam swimming. Peppered moray clownfish
                hawkfish at seahorse hammerhead a funny snake eel. Colorful
                soldierfish banded sole jump.
              </p>
            </div>
            <div className="search-input-container">
              <div className="search-title">Search by City</div>
              <div className="search-input">
                <Input
                  className="search-input-box"
                  changed={e => this.filterHandler(e.target.value)}
                  placeholder="ex. Houston"
                />
              </div>
            </div>
          </div>

          <Container fluid>
            <Row>{usersDisplay}</Row>
          </Container>
        </div>
      </div>
      // <div className="userpage">
      //   <div className="navbar">
      //     <NavBarShelter />
      //   </div>
      //   <div className="search-input">
      //     <div className="search-title">Search for Users by City:</div>
      //     <div className="search-input">
      //       <Input
      //         changed={e => this.filterHandler(e.target.value)}
      //         placeholder="Search User"
      //       />
      //     </div>
      //   </div>
      //   <div className="usersection">
      //     <div className="usertitle"> Users: </div>
      //     <div className="usercardbox"> {usersDisplay}</div>
      //   </div>
      // </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  {
    getUsers
  }
)(Users);
