import React from 'react'
import './Titlesection.css'
import {Link } from 'react-router-dom';


export default function Titlesection({title, links, top}) {
    return (
        <div className="title-section">
            <h3 style={{marginTop: `${top}`}} className="title"><b>{title}</b></h3>
                <div className="see-more">
                    <p><Link to={links}>See More</Link></p>
                    <i className="fa fa-angle-right fa-lg"></i>
                </div>
        </div>
    )
}
