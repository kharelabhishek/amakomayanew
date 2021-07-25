import React from "react";
import './NewandstoriesDetail.css'
import newandstoriesdetails from "./Newsandstoriescontent";

export default function NewandstoriesDetail({ match }) {
  const detail = newandstoriesdetails.find(
    ({ id }) => id == match.params.detailId
  );
  return (
    <div className="container">
      <div className="news-card mt-4 mb-5">
        <h3 className="mb-4">{detail.detailtitle}</h3>
        <p>{detail.detaildescription}</p>
      </div>
    </div>
  );
}
