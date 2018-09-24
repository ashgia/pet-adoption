import React, { Component } from "react";
import NavBarSide from "../NavBarSide/NavBarSide";
import "./Volunteer.css";

class Volunteer extends Component {
  render() {
    return (
      <div className="volunteer-body">
        <div className="volunteer-boxcolor">
          <div className="navbar">
            <NavBarSide />
          </div>
          <div className="volunteer-textbox">
            <div className="volunteer-title">
              <p>How It Works</p>
            </div>
            <div className="volunteer-info">
              <p>
                Wobbegong shark peaclam swimming. Peppered moray clownfish
                hawkfish at seahorse hammerhead a funny snake eel. Colorful
                soldierfish banded sole jump. Yellow pseudochromis weasel shark
                shadow, darkness in deap ocean an, Motionless Wabash pigtoe Full
                moon. Spot hogfish banded grunt, mystery snail happy flounder.
              </p>
            </div>
          </div>
          <div className="volunteer2-section">
            <div className="volunteer2-image">
              <img
                src="https://images.unsplash.com/photo-1527362950785-f487a7c1fe48?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b9e87b6b5e747bbb40bceffb8968536b&auto=format&fit=crop&w=1831&q=80"
                alt="white dog with girl"
                style={{
                  height: "750px",
                  width: "500px"
                }}
              />
            </div>
            <div className="volunteer2-text">
              <div className="volunteer2-title">
                <p>About us</p>
              </div>
              <div className="volunteer2-info">
                <p>
                  Wobbegong shark peaclam swimming. Peppered moray clownfish
                  hawkfish at seahorse hammerhead a funny snake eel. Colorful
                  soldierfish banded sole jump. Yellow pseudochromis weasel
                  shark shadow, darkness in deap ocean an.
                </p>
              </div>
            </div>
          </div>
          <div className="volunteer3-section">
            <div className="volunteer3-image">
              <img
                src="https://images.unsplash.com/photo-1521354465180-c1ceac1d709a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=64232dd88cd04a04d20b049b34daa029&auto=format&fit=crop&w=1050&q=80"
                alt="dog in orange car"
                style={{
                  height: "400px",
                  width: "650px"
                }}
              />
            </div>
            <div className="volunteer3-text">
              <div className="volunteer3-title">
                <p>About us</p>
              </div>
              <div className="volunteer3-info">
                <p>
                  Wobbegong shark peaclam swimming. Peppered moray clownfish
                  hawkfish at seahorse hammerhead a funny snake eel. Colorful
                  soldierfish banded sole jump. Yellow pseudochromis weasel
                  shark shadow, darkness in deap ocean an.
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

export default Volunteer;
