import React, { Component } from "react";
import "./Home.css";
import { UncontrolledCarousel } from "reactstrap";
import Navbar from "../Navbar/Navbar";

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
      "https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4ac33b3554f738537b33011883712d1c&auto=format&fit=crop&w=1950&q=80",
    altText: "Slide 2",
    caption: "",
    header: ""
  },
  {
    src:
      "https://images.unsplash.com/photo-1513302690404-d47125ae33c2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3ad36818b542c78237a98e1078bfb3b5&auto=format&fit=crop&w=1050&q=80",
    altText: "Slide 3",
    caption: "",
    header: ""
  }
];

const Home = () => {
  return (
    <div className="bannerContainer">
      <div className="navbar-carousel">
        <Navbar />
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

export default Home;
