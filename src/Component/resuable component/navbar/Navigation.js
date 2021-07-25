import React from 'react'
import Navheader from './Navheader'
import {Link} from "react-router-dom";
import './Navigation.css'


export default function Navigation() {
  return (
    <div>
    <Navheader />
    <div className="container-fluid line">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light navbar-style sticky-md-top">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse float-end" id="navbarNav">
              <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">About us</Link>
              </li>
              {/* <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About us
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/introduction">Introduction</Link></li>
                  <li><Link className="dropdown-item" to="/our-team">Our Team</Link></li>
                </ul>
              </li> */}
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
                {/* <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Activities & result
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/new-media">News & Media</Link></li>
                  <li><Link className="dropdown-item" to="/impact">Impacts</Link></li>
                </ul>
              </li> */}
              {/* <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Immunization
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/introduction">National Immunization Program</Link></li>
                  <li><Link className="dropdown-item" to="/our-team">Vial to Child</Link></li>
                </ul>
              </li> */}

              <li className="nav-item">
                <Link className="nav-link" to="/partners">Partners</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Intern and Traning</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>       
              </ul>
            </div>
          </div>
        </nav>  
      </div>
    </div>
    </div>
  )
}
