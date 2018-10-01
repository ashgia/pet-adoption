import React, { Component } from "react";
import NavBarSide from "../NavBarSide/NavBarSide";
import "./HowItWorks.css";

class HowItWorks extends Component {
  render() {
    return (
      <div className="howitworks-body">
        <div className="howitworks-boxcolor">
          <div className="navbar">
            <NavBarSide />
          </div>
          <div className="howitworks-textbox">
            <div className="howitworks-title">
              <p>How It Works</p>
            </div>
            <div className="howitworks-info">
              <p>
                From the comfort of their personal computers, pet lovers can
                directly match with animal shelters in their local area. Pet
                owners are able to browse the local pets. They can then
                reference a shelter’s web page and discover what services it
                offers. Tulu's Friends also includes direct private messaging,
                donation services, and volunteering opportunities.
              </p>
            </div>
          </div>
          <div className="howitworks2-section">
            <div className="howitworks2-image">
              <img
                src="https://images.unsplash.com/photo-1527362950785-f487a7c1fe48?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b9e87b6b5e747bbb40bceffb8968536b&auto=format&fit=crop&w=1831&q=80"
                alt="white dog with girl"
                style={{
                  height: "750px",
                  width: "500px"
                }}
              />
            </div>
            <div className="howitworks2-text">
              <div className="howitworks2-title">
                <p>About us</p>
              </div>
              <div className="howitworks2-info">
                <p>
                  Tulu’s Friends is dedicated to seamlessly connect potential
                  adopters and various animal shelters so that the adopted
                  animals and their newfound owners could start and build a
                  special relationship that will last a lifetime.
                </p>
              </div>
            </div>
          </div>
          <div className="howitworks3-section">
            <div className="howitworks3-image">
              <img
                src="https://images.unsplash.com/photo-1521354465180-c1ceac1d709a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=64232dd88cd04a04d20b049b34daa029&auto=format&fit=crop&w=1050&q=80"
                alt="dog in orange car"
                style={{
                  height: "400px",
                  width: "650px"
                }}
              />
            </div>
            <div className="howitworks3-text">
              <div className="howitworks3-title">
                <p>Behind The Scenes</p>
              </div>
              <div className="howitworks3-info">
                <p>
                  Getting a furry friend was a huge commitment.I understood the
                  commitment and perseverance it would take to raise a puppy but
                  I could have never imagined the amount of joy I have
                  experienced throughout this process. Tulu is a cocker spaniel
                  I adopted and he has been the greatest gift to me.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <footer className="footer">
            <div className="footer-container">
              <span className="text-muted">footer content here.</span>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default HowItWorks;
