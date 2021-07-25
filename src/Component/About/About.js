import React from "react";
import "../About/About.css";

export default function Introduction() {
  
  return (
    <div>
      <div className="container">
        <div className="row ">
          <h2 className="title-h">About Us</h2>
          <div className="col-md-12">
              <div className="row mt-4">
                <div className="about-us col-md-6 d-flex align-items-center">
                  <p>
                    Amakomaya is an initiative incorporated by Amakomaya Apps.
                    Pvt. Ltd. It is a digital tracking tool that promotes
                    maternal health and safe child birth. It helps in tracking,
                    planning and reporting the health conditions of a mother and
                    the baby. With the help of colourful indicators in the
                    Amakomaya app, Female Community Health Volunteer (FCHV) and
                    health personnel can track the health condition of pregnant
                    women and provide health care services accordingly. The
                    Amakomaya app is designed for both health workers and
                    pregnant women in which Amakomaya Care app is for health
                    personnel and Amakomaya (Content) app is for pregnant women.
                    Amakomaya.com aims to inform and empower low-income,
                    expectant mothers during her pregnancy and child delivery
                    period as well as care during her pregnancy period and
                    focuses on the health of maternal, newborn and child health.
                  </p>
                </div>
                <div className="col-md-6">
                  <img
                    src={window.location.origin + `/Assets/image/aboutus.jpg`}
                    className="card-img-top img-fluid"
                    alt="..."
                  />
                </div>
              </div>
          </div>
        </div>
      </div>

      <div className="background-img container-fluid ">
        <div className="motive">
          <p className="d-flex align-items-center">
            "With a mission to halve the child and maternal mortality rate"
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row ">
          <h2 className="impact-para mt-5 mb-4">
            Impact on Maternal Mortality
          </h2>
          <div className="col-md-12">
            <div className="row">
              <div className="about-us col-md-6">
                <img
                  src="http://amakomaya.com/images/about-us/2.jpg"
                  className="card-img-top img-fluid"
                  alt="..."
                />
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <p>
                  The pregnant women have to pay their life due to careless and
                  lack of proper care information during pregnancy period. The
                  loss of money and the possibility of chronic ill-health that
                  can lead to lost opportunities to work and a poorer quality of
                  life. Death of mother lead improper care of born baby and
                  likely to die within two years and children without mothers
                  are likely to receive adequate health care and educational
                  opportunities as they grow up. <br />
                  The main objective of this project is to protect the life of
                  pregnat women and new born baby by the use of internet and
                  mobile technology where the people are far from city hospital.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h2 className="impact-para mt-5 mb-4">Initiation of amakomaya.com </h2>
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6 d-flex align-items-center">
                <p>
                  The pregnant women have to pay their life due to careless and
                  lack of proper care information during pregnancy period. The
                  loss of money and the possibility of chronic ill-health that
                  can lead to lost opportunities to work and a poorer quality of
                  life. Death of mother lead improper care of born baby and
                  likely to die within two years and children without mothers
                  are likely to receive adequate health care and educational
                  opportunities as they grow up. <br />
                  The main objective of this project is to protect the life of
                  pregnat women and new born baby by the use of internet and
                  mobile technology where the people are far from city hospital.
                </p>
              </div>
              <div className="col-md-6 mb-5">
                <img
                  width="100%"
                  src="http://www.amakomaya.com/backend/web/uploads/image/123.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
