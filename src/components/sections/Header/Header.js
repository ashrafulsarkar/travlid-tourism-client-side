import React from 'react';
import './Header.css';
import logo from '../../../images/logo/logo.png';
import { Link } from 'react-router-dom';
import { Button, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
    <header id="header-area" className="header-full-part">
        <div className="header-top">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-12">
                        <div className="logo">
                            <Link to="/">
                                <img src={logo} alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-9 col">
                        <div className="main-menu">
                            <Navbar collapseOnSelect expand="lg">
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link as = {Link} to="/">Home</Nav.Link>
                                        <Nav.Link as = {Link} to="/about">About</Nav.Link>
                                        <Nav.Link as = {Link} to="/contact">Contact Us</Nav.Link>
                                        {user?.email?
                                            <Nav.Link as = {Link} to="/myaccount">{user?.displayName}</Nav.Link>:
                                            ''
                                        }
                                        {user?.email?
                                            <Nav.Item>
                                                <Button className="logout-btn" onClick={logOut}>Logout</Button>
                                            </Nav.Item>:
                                            <Nav.Item>
                                                <Nav.Link as = {Link} to="/login">Login</Nav.Link>
                                            </Nav.Item>
                                        }
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    );
};

export default Header;