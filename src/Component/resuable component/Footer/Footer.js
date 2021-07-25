import React from 'react'
import '../Footer/Footer.css'

export default function Footer() {
    return (
        <div>
             <footer>
                <div>
                    <span className="logo">Amakomaya</span>
                </div>
                <div className="row">
                    <div className="col-md-3">                
                        <div className="link-cat">
                            <span className="footer-toggle"></span>
                            <span className="footer-cat">Funding Organizations</span>
                        </div>
                        <ul className="footer-cat-links">
                            <li><a href="/#"><span>Baby Asia</span></a></li>
                            <li><a href="/#"><span>Internet Society</span></a></li>
                            <li><a href="/#"><span>Yagiten Pvt. Ltd</span></a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <div className="link-cat">
                            <span className="footer-toggle"></span>
                            <span className="footer-cat">Videos Provider</span>
                        </div>
                        <ul className="footer-cat-links">
                            <li><a href="/#"><span>Baby Center</span></a></li>
                            <li><a href="/#"><span>Youtube.com</span></a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <div className="link-cat">
                            <span className="footer-toggle"></span>
                            <span className="footer-cat">Content Developer</span>
                        </div>
                        <ul className="footer-cat-links">
                            <li><a href="/#"><span>Model Hospital</span></a></li>
                            <li><a href="/#"><span>Patan Academy and Health Sciences</span></a></li>
                        </ul>
                    </div>
                    <div className="col-md-3" id="newsletter">                        
                        <div className="social-links social-2">
                            <a href="/#"><i className="fab fa-facebook-f"></i></a>
                            <a href="/#"><i className="fab fa-twitter"></i></a>
                            <a href="/#"><i className="fab fa-linkedin-in"></i></a>
                            <a href="/#"><i className="fab fa-instagram"></i></a>
                            <a href="/#"><i className="fab fa-tumblr"></i></a>
                            <a href="/#"><i className="fab fa-reddit-alien"></i></a>
                        </div>

                        <div id="address">
                            <span>Office Location</span>
                            <ul>
                                <li>
                                    {/* <i className="fas fa-gopuram"></i> */}
                                    <div>Lazimpat, khurshani-2 kathmandu, Nepal</div>
                                </li>
                            </ul>
                        </div>    
                    </div>
                </div>
                <div id="copyright">
                    &copy; All Rights Reserved 2020
                </div>
                </footer>
        </div>
    )
}
