import React, { Component } from "react";
import NavBarSide from "../NavBarSide/NavBarSide";
import "./Donate.css";
import TakeMoney from "./TakeMoney";

class Donate extends Component {
  render() {
    return (
      <div className="donate-body">
        <div className="donate-boxcolor">
          <div className="navbar">
            <NavBarSide />
          </div>
          <div className="donate-textbox">
            <div className="donate-title">
              <p>How Donating Works</p>
            </div>
            <div className="donate-info">
              <p>
                The shelters would not be what they are today without the
                generous financial support from donors. As non-profits, these
                shelters will only use donations towards their costs so they can
                do their best in rescuing more unfortunate animals from the
                streets. Every dollar of donation goes a long way in saving the
                lives of these animals. If you are interested in donating to
                help these shelters, please click the donate button below.
              </p>
              <div className="donate-button">
                <TakeMoney />
              </div>
            </div>
          </div>
          <div className="donate2-section">
            <div className="donate2-image">
              <img
                src="https://images.unsplash.com/photo-1527362950785-f487a7c1fe48?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b9e87b6b5e747bbb40bceffb8968536b&auto=format&fit=crop&w=1831&q=80"
                alt="white dog with girl"
                style={{
                  height: "750px",
                  width: "500px"
                }}
              />
            </div>
            <div className="donate2-text">
              <div className="donate2-title">
                <p>This Week's Featured Shelter</p>
              </div>
              <div className="donate2-info">
                <div className="featured-shelter-name">K-9 Angels</div>
                <p>
                  K-9 Angels Rescue is committed to rescuing and rehoming
                  shelter dogs in and around the City of Houston, regardless of
                  their breed or their circumstance. We are motivated by the
                  dire need to educate the public about the effects of
                  irresponsible breeding practices, while helping the community
                  by alleviating overcrowding in area shelters.
                </p>
              </div>
            </div>
          </div>
          <div className="donate3-section">
            <div className="donate3-image">
              <img
                src="https://images.unsplash.com/photo-1521354465180-c1ceac1d709a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=64232dd88cd04a04d20b049b34daa029&auto=format&fit=crop&w=1050&q=80"
                alt="dog in orange car"
                style={{
                  height: "400px",
                  width: "650px"
                }}
              />
            </div>
            <div className="donate3-text">
              <div className="donate3-title">
                <p>About us</p>
              </div>
              <div className="donate3-info">
                <p>
                  The shelters would not be what they are today without the
                  generous financial support from donors. As non-profits, these
                  shelters will only use donations towards their costs so they
                  can do their best in rescuing more unfortunate animals from
                  the streets. Every dollar of donation goes a long way in
                  saving the lives of these animals. If you are interested in
                  donating to help these shelters, please click the link below.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* <footer className="footer">
            <div className="footer-container">
              <span className="text-muted">footer content here.</span>
            </div>
          </footer> */}
        </div>
      </div>
    );
  }
}

export default Donate;
