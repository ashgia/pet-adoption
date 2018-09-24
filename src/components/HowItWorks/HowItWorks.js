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
                Wobbegong shark peaclam swimming. Peppered moray clownfish
                hawkfish at seahorse hammerhead a funny snake eel. Colorful
                soldierfish banded sole jump. Yellow pseudochromis weasel shark
                shadow, darkness in deap ocean an, Motionless Wabash pigtoe Full
                moon. Spot hogfish banded grunt, mystery snail happy flounder.
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
                  Wobbegong shark peaclam swimming. Peppered moray clownfish
                  hawkfish at seahorse hammerhead a funny snake eel. Colorful
                  soldierfish banded sole jump. Yellow pseudochromis weasel
                  shark shadow, darkness in deap ocean an.
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
                <p>About us</p>
              </div>
              <div className="howitworks3-info">
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

export default HowItWorks;
