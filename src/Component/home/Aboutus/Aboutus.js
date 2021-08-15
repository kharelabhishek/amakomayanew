import React from "react";
import "./Aboutus.css";
import Titlesection from "../../resuable component/titlesection/Titlesection";
// import img from '../../../../src/Assets/image/123.jpg'
import { Animated } from "react-animated-css";

export default function Aboutus({ location }) {
  return (
    <div className="background-css pt-t">
      <div className="container">
        <div className="row ">
          <Titlesection title="About Us" links="/about-us" top="1em" />
          <div className="about-us col-md-6">
            <Animated
              animationIn="bounceInLeft"
              animationOut="fadeOut"
              isVisible={true}
            >
              <p>
                Amakomaya is a digital tracking tool that promotes maternal
                health and safe child birth. It helps in tracking, planning and
                reporting the health conditions of a mother and the baby. With
                the help of colourful indicators in the Amakomaya app, Female
                Community Health Volunteer (FCHV) and health personnel can track
                the health condition of pregnant women and provide health care
                services accordingly. Amakomaya aims to inform and empower
                low-income, expectant mothers during her pregnancy and child
                delivery period as well as care during her pregnancy period and
                focuses on the health of maternal, newborn and child health.
              </p>
            </Animated>
          </div>

          <div className="col-md-6">
            <img
              src={window.location.origin + `/Assets/image/about_us.png`}
              className="card-img-top img-fluid"
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
