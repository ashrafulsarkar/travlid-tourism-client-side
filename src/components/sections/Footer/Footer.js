import React from 'react';
import './Footer.css';
import logo from '../../../images/logo/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer-area pt-85">
        <div className="footer-top pb-45">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="footer-items">
                            <div className="footer-logo">
                                <img src={logo} alt=""/>
                            </div>
                            <div className="footer-text">
                                <p>Taking time away to escape the commitments and stressors is an excellent way to clear your head and de-stress.</p>
                            </div>
                            <div className="bottom-social">
                                <Link to="#"><i className="fab fa-twitter"></i></Link>
                                <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                <Link to="#"><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="footer-items">
                            <div className="footer-title">
                                <h3>Important Links</h3>
                            </div>
                            <div className="footer-text">
                                <ul>
                                    <li><Link to="/about">About Us</Link></li>
                                    <li><Link to="#">Spacial Offer</Link></li>
                                    <li><Link to="#">Top Destination</Link></li>
                                    <li><Link to="#">Blog</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="footer-items">
                            <div className="footer-title">
                                <h3>Our Support</h3>
                            </div>
                            <div className="footer-text">
                                <ul>
                                    <li><Link to="#">Account</Link></li>
                                    <li><Link to="#">Legal</Link></li>
                                    <li><Link to="#">Contact</Link></li>
                                    <li><Link to="#">Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="footer-items">
                            <div className="footer-title">
                                <h3>Our News Letter</h3>
                            </div>
                            <div className="footer-text">
                                <form action="#">
                                    <div className="newsletter-input">
                                        <input type="text" placeholder="Enter Your Email"/>
                                    </div>
                                    <div className="newsletter-btn">
                                        <button className="btn">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="copy-right">
                            <p>© TravelLid 2021. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer;