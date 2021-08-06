import React from 'react'
import './Navheader.css'
import {Link} from "react-router-dom";
import logo from '../../../Assets/image/logo.png'

export default function Navheader() {
    return (
        <div className="nav-top-header">
            <div className="logo">
                <Link to="/"><img class="amakomaya-logo" width="300px" height="100px" src={logo} alt="" /></Link>
            </div>
            <div className="donate-us">
                <a href="/#" class="donate">DONATE</a>
            </div>
        </div>
    )
}

    