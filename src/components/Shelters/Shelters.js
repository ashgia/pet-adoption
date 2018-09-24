import React, { Component } from "react";
import { connect } from "react-redux";
import NavBarSide from "../NavBarSide/NavBarSide";
import Input from "../Input/Input";
import { getShelters } from "../../ducks/userReducer";
import {
  Card,
  CardTitle,
  CardText,
  CardDeck,
  CardColumns,
  CardSubtitle,
  CardLink,
  CardBody,
  Col,
  Row,
  Container
} from "reactstrap";
import { Link } from "react-router-dom";
import "./Shelters.css";

class Shelters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shelters: [],
      search: ""
    };
  }
  async componentDidMount() {
    await this.props.getShelters().then(response => {
      this.setState({ shelters: response.value.data });
    });
  }
  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  filterHandler(filter) {
    this.setState({ search: filter });
  }

  render() {
    let sheltersDisplay = this.state.shelters
      .filter(shelter => shelter.city.includes(this.state.search))
      .map(shelter => {
        if (shelter.city.includes(this.state.search)) {
          return (
            // <CardColumns sm="4">
            <Col sm="3">
              <div className="carddeck">
                <CardDeck>
                  <div className="carddeck-single">
                    <Card>
                      <CardBody>
                        <CardTitle>
                          <div className="fullname">{shelter.fullname}</div>
                        </CardTitle>
                        <CardSubtitle>
                          <div className="city">{shelter.city}</div>
                        </CardSubtitle>
                      </CardBody>
                      <img
                        width="100%"
                        src={shelter.photourl}
                        alt="Card image cap"
                      />
                      <CardBody>
                        <CardText>{shelter.address}</CardText>
                        {/* <CardLink href="#">About Us</CardLink> */}
                        <Link
                          to={`/shelters/${shelter.userid}`}
                          className="shelter-link"
                        >
                          About Us
                        </Link>
                        {/* <CardLink href="#">Contact</CardLink> */}
                      </CardBody>
                    </Card>
                  </div>
                </CardDeck>
              </div>
            </Col>
          );
        }
      });
    return (
      <div className="shelters-body">
        <div className="shelters-boxcolor">
          <div className="navbar">
            <NavBarSide />
          </div>
          <div className="shelters-textbox">
            <div className="shelters-title">
              <p>Shelters Near You</p>
            </div>
            <div className="shelters-info">
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
                  placeholder="Search Shelter"
                />
              </div>
            </div>
          </div>

          <Container fluid>
            <Row>{sheltersDisplay}</Row>
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
    getShelters
  }
)(Shelters);
