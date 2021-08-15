import React from 'react'
import Navheader from './Navheader'
import {Link} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import './Navigation.css'
import logo from '../../../Assets/image/logo.png'
import styled, { css } from "styled-components/macro";

export default function Navigation({toggle}) {
  const [navBg, setNavBg] = React.useState("red");
  const location = useLocation();
  React.useEffect(() => {
    if (window.location.pathname == "/") {
      setNavBg("yellow");
    } else {
      setNavBg('')
    }
  }, [location]);

  return (
    <div>
    <div className="container-fluid">
      <div className="row">
    {/* <div className="row" style={{ backgroundColor: navBg }}> */}
        {/* <div className="col-md-2">
          <div className="logo navbar-brand">
              <Link to="/"><img class="amakomaya-logo" width="300px" height="100px" src={logo} alt="" /></Link>
          </div>            
        </div>
        <div className="col-md-10">
          <div className="container-fluid">
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light navbar-style sticky-md-top">
                <div className="container-fluid">
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="d-flex">
                    <div className="collapse navbar-collapse float-end" id="navbarNav">
                      <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/about-us">About us</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/impact">Impact</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/news-and-stories">News and Stories</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/our-service">Our service</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/our-team">Our Team</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/partners">Partners</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact Us</Link>
                      </li>  
                        <li className="nav-item">
                          <div className="donate-us">
                              <a href="/#" class="donate ms-2">DONATE</a>
                          </div>
                        </li>       
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>  
            </div>
          </div>
        </div> */}

        {/* <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
          <Link to="/"><img class="amakomaya-logo" width="300px" height="100px" src={logo} alt="" /></Link>
            <nav className="navbar navbar-expand-lg navbar-light navbar-style sticky-md-top">
                <div className="container-fluid">
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="d-flex">
                    <div className="collapse navbar-collapse float-end" id="navbarNav">
                      <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/about-us">About us</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/impact">Impact</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/news-and-stories">News and Stories</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/our-service">Our service</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/our-team">Our Team</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/partners">Partners</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact Us</Link>
                      </li>  
                        <li className="nav-item">
                          <div className="donate-us">
                              <a href="/#" class="donate ms-2">DONATE</a>
                          </div>
                        </li>       
                      </ul>
                    </div>
                  </div>
                </div>
              </nav> 
          </div>
        </nav> */}

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <Link to="/"><img class="amakomaya-logo" width="300px" height="100px" src={logo} alt="" /></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
      <span class="navbar-text">
      <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/about-us">About us</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/impact">Impact</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/news-and-stories">News and Stories</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/our-service">Our service</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/our-team">Our Team</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/partners">Partners</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact Us</Link>
                      </li>  
                        <li className="nav-item">
                          <div className="donate-us d-sm-none d-md-none">
                              <a href="/#" class="donate ms-2">DONATE</a>
                          </div>
                        </li>       
                      </ul>
      </span>
    </div>
  </div>
</nav>


      </div>
    </div>    
    </div>
  )
}
