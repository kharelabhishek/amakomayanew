import React from 'react'
import './Ourteam.css'
import OurteamBoardMember from './OurteamBoardMember'
import OurteamManagementMember from './OurteamManagementMember'
import OurteamVolunteerMember from './OurteamVolunteerMember'
import Titlesection from '../../resuable component/titlesection/Titlesection'


export default function Ourteam() {
    return (
        <div className="container">
            <div className="row mb-5">       
                <h2 className="title-h">Our Team</h2>     
                <h5 className="title-s">Board of Directors of Amakomaya (Mothers Love) Initiative :</h5>   
                <hr />
                {OurteamBoardMember.map((item)=>{
                    return(
                      <div key={item.id} className="col-sm-4 mt-4">
                        <div className="our-team">
                            <div className="pic">
                                <img src={item.image} alt="."/>
                            </div>
                            <h3 className="title">{item.name}</h3>
                            <span className="post">{item.designation}</span>
                            {/* <ul className="social">
                                <li><a href="/#" className="fab fa-facebook" alt="." /></li>
                                <li><a href="/#" className="fab fa-twitter" alt="." /></li>
                                <li><a href="/#" className="fab fa-google-plus" alt="." /></li>
                            </ul> */}
                        </div>
                    </div>
                    )
                })}
                <h5 className="title-s mt-5">Management & Developer teams of Amakomaya (Mothers Love) Initiative</h5>   
                <hr />
                {OurteamManagementMember.map((item)=>{
                    return(
                      <div key={item.id} className="col-sm-4 mt-4">
                        <div className="our-team">
                            <div className="pic">
                                <img src={item.image} alt="."/>
                            </div>
                            <h3 className="title">{item.name}</h3>
                            <span className="post">{item.designation}</span>
                            {/* <ul className="social">
                                <li><a href="/#" className="fab fa-facebook" alt="." /></li>
                                <li><a href="/#" className="fab fa-twitter" alt="." /></li>
                                <li><a href="/#" className="fab fa-google-plus" alt="." /></li>
                            </ul> */}
                        </div>
                    </div>
                    )
                })}  
                <h5 className="title-s mt-5">International Volunteer and Interns in Amakomaya</h5>   
                <hr />
                {OurteamVolunteerMember.map((item)=>{
                    return(
                      <div key={item.id} className="col-sm-4 mt-5">
                        <div className="our-team">
                            <div className="pic">
                                <img src={item.image} alt="."/>
                            </div>
                            <h3 className="title">{item.name}</h3>
                            <span className="post">{item.designation}</span>
                            {/* <ul className="social">
                                <li><a href="/#" className="fab fa-facebook" alt="." /></li>
                                <li><a href="/#" className="fab fa-twitter" alt="." /></li>
                                <li><a href="/#" className="fab fa-google-plus" alt="." /></li>
                            </ul> */}
                        </div>
                    </div>
                    )
                })}                         
            </div>
        </div>
    )
}
