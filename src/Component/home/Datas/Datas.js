import React from "react";
import "../Datas/Datas.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export default function Data() {
  return (
    <div className="container">
      <div className="row">
        <div className="mt-3 col-lg-4 col-md-4 col-sm-4 mb-4">
          <div className="card rounded-card">
            {/* <img src={window.location.origin + `/Assets/image/slider/${item.image}`}  alt=""/> */}
            <div className="card-body pregnancy-bg">
              <h5 className="data-number">
                <CountUp
                  // suffix="K+"
                  delay={0.3}
                  start={0}
                  end={5771}
                  redraw={true}
                >
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </h5>
              <p className="data-title">Benefited Pregnant Woman</p>
            </div>
          </div>
        </div>
        <div className="mt-3 col-lg-4 col-md-4 col-sm-4 mb-4">
          <div className="card">
            {/* <img src={window.location.origin + `/Assets/image/slider/${item.image}`}  alt=""/> */}
            <div className="card-body child-bg">
              <h5 className="data-number">
                <CountUp
                  // suffix="K+"
                  delay={0.3}
                  start={0}
                  end={19561}
                  redraw={true}
                >
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </h5>
              <p className="data-title">Benefited Child</p>
            </div>
          </div>
        </div>
        <div className="mt-3 col-lg-4 col-md-4 col-sm-4 mb-4">
          <div className="card">
            {/* <img src={window.location.origin + `/Assets/image/slider/${item.image}`}  alt=""/> */}
            <div className="card-body district-bg">
              <h5 className="data-number">
                <CountUp
                  suffix="+"
                  delay={0.3}
                  start={0}
                  end={23}
                  redraw={true}
                >
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </h5>
              <p className="data-title">Local level</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
