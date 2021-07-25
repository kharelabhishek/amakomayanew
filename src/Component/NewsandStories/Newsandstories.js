import React from "react";
import "./Newsandstories.css";
import Newsandstoriescontent from "../NewsandStories/Newsandstoriescontent";
import { Link, Route } from "react-router-dom";
// import NewandstoriesDetail from './NewandstoriesDetail'

export default function NewsandStories() {
  return (
    <>
      <div className="container">
        <div className="row pregnancy mb-5">
          <h2 class="title-h">News and Stories</h2>
          <div className="col-md-7">
            <div class="card mt-5 flex-row" style={{ padding: "0" }}>
              <img
                className="news-image card-img-left example-card-img-responsive"
                src={window.location.origin + `/Assets/image/impact/impact-1.jpg`}
                alt="."
              />
              <div class="card-body">
                <h4 class="card-title h5 h4-sm">
                  Empowering FCHVs at Kathyad, Mugu by implementing Amakomaya.
                </h4>
                <p class="card-text">
                  Mugu is one of the undeveloped rural area of far western
                  region. Road, electricity, internet connection and mobile
                  networks are still problems to solve in the area.
                </p>
                <Link className="more" to={`/news-and-stories-detail/1`} target="_blank">
                  Read More
                </Link>
              </div>
            </div>
            {Newsandstoriescontent.map((item) => {
              return (
                <div
                  key={item.id}
                  class="card mt-5 flex-row"
                  style={{ padding: "0" }}
                >
                  <img
                    className="news-image card-img-left example-card-img-responsive"
                    src={
                      window.location.origin +
                      `/Assets/image/impact/${item.image}`
                    }
                    alt="."
                  />
                  <div class="card-body">
                    <h4 class="card-title h5 h4-sm">{item.title}</h4>
                    <p class="card-text">{item.description}</p>
                    {/* <a className="more" href="/#">Read More</a> */}
                    {/* {console.log(item.link)} */}
                    {!item.links ? (
                      <Link
                        className="more"
                        to={`/news-and-stories-detail/${item.id}`}
                      >
                        Read More
                      </Link>
                    ) : (
                      <Link
                        className="more"
                        to={{ pathname: `${item.links}` }}
                        target="_blank"
                      >
                        Read More
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}

            {/* <Route path="/news-and-stories/:newsid" component={NewandstoriesDetail} /> */}
          </div>
          <div className="mt-5 custom-card col-md-5">
            <img
              width="100%"
              className="img-responsive"
              src="http://www.amakomaya.com/backend/web/uploads/slider/1499151372321.jpg"
              alt="Avatar"
            />
            {/* <img className="news-image card-img-left example-card-img-responsive" src={window.location.origin + `/Assets/image/impact/${item.image}`} alt="."/> */}
            <div class="card-body">
              <h4 class="card-title custom-card-title"> Amakomaya Mission</h4>
              <p class="card-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laborum temporibus illum placeat soluta? Minus, fuga mollitia
                non quo illum ad consequatur. Dolor quia libero suscipit sint,
                porro eveniet veniam iusto.
              </p>
              <a className="more" href="/#">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
