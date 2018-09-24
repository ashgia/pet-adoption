import React, { Component } from "react";
import "./Home.css";
import { UncontrolledCarousel, NavbarBrand } from "reactstrap";
import Navbar from "../Navbar/Navbar";
import { connect } from "react-redux";
import { getUser } from "../../ducks/authReducer";
// import { Link } from "react-router-dom";

const items = [
  {
    src:
      "https://images.unsplash.com/photo-1516293315-cfe8602f0750?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=370891cd9c31e4700de6b087a1b55085&auto=format&fit=crop&w=1052&q=80",
    altText: "Slide 1",
    caption: "",
    header: ""
  },
  {
    src:
      "https://images.unsplash.com/photo-1516009086893-4b3561b27fe3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2ccbaa57f259dc1bb1d682ad419ca273&auto=format&fit=crop&w=1500&q=80",
    altText: "Slide 2",
    caption: "",
    header: ""
  },
  {
    src:
      "https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4ac33b3554f738537b33011883712d1c&auto=format&fit=crop&w=1950&q=80",
    altText: "Slide 3",
    caption: "",
    header: ""
  },
  {
    src:
      "https://images.unsplash.com/photo-1513302690404-d47125ae33c2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3ad36818b542c78237a98e1078bfb3b5&auto=format&fit=crop&w=1050&q=80",
    altText: "Slide 4",
    caption: "",
    header: ""
  },
  {
    src:
      "https://images.unsplash.com/photo-1536566330253-978fe7b1a613?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9f40478224c2be3eef1029531a83852c&auto=format&fit=crop&w=1500&q=80",
    altText: "Slide 5",
    caption: "",
    header: ""
  },
  {
    src:
      "https://images.unsplash.com/photo-1512087499053-023f060e2cea?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=045930b1d68c14bff730bcc4762c4515&auto=format&fit=crop&w=1500&q=80",
    altText: "Slide 6",
    caption: "",
    header: ""
  },
  {
    src:
      "https://images.unsplash.com/photo-1507866246809-91017316fd37?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ee4367d656f28584698d5bf8cd2ab2a0&auto=format&fit=crop&w=1500&q=80",
    altText: "Slide 7",
    caption: "",
    header: ""
  }
];

const Home = () => {
  return (
    <div className="bannerContainer">
      <div className="logo">
        <a href="/">
          <p>Tulu's Friends</p>
        </a>
      </div>
      <div className="login">
        <a href="/">
          <p>Login</p>
        </a>
      </div>
      <div className="navbar-carousel">
        <Navbar />
      </div>
      <div className="getStartedButton">
        <a href="http://localhost:3001/newAdoptLogin">
          <button>Start</button>
        </a>
      </div>
      <div className="carousel">
        <div className="imageslide">
          <UncontrolledCarousel
            keyboard={false}
            pause={false}
            ride="carousel"
            interval="4000"
            slide={false}
            className="carousel-fade"
            items={items}
            controls={false}
            indicators={false}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getUser }
)(Home);

// export default Home;
