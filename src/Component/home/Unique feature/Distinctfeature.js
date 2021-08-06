import React from "react";
import "./Distinctfeature.css";
import DistinctfeatureData from "./DistintfeatureData";

export default function Distinctfeature() {
  return (
    <div className="background-css">
      <div className="container ">
        <h3 class="d-flex justify-content-start title align-right ">
          <b className="mt-4">Distinct Feature</b>
        </h3>
        <div className="feature">
          <div className="row mb-5">
            {DistinctfeatureData.map((item) => {
              return (
                <div className="col-md-4 mt-5">
                  <div className="card distinct-card">
                    <img
                      width="100"
                      height="100"
                      src={
                        window.location.origin +
                        `/Assets/image/distintFeature/${item.image}`
                      }
                      alt=""
                      className="mb-5 align-self-center"
                    />
                    <h5>
                      <b>{item.title}</b>
                    </h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
