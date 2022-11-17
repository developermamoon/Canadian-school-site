import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import './Header1.css'

const Header1 = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='gradient text-white' >
                <Container>
                    
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to='/contact-us'>CONTACT US</Link>
                            <Link>NSRIC</Link>
                            <Link>CONFERENCE</Link>
                            <Link>WANSEE</Link>
                            
                            <NavDropdown title="REGISTRATION" id="collasible-nav-dropdown">
                                <Link to='/student-registration'>Student Registration</Link>
                                <Link to='/teacher-registration'>Teacher Registration</Link>
                                <Link to='/employee-staff-registration'>Employee/Staff Registration</Link>
                                <Link to='/business-partner-registration'>Business Partner Registation</Link>
                                <Link to='/parent-registration'>Parent Registration</Link>                              
                                <Link to='/ministry-registration'>Ministry Registration</Link>
                            </NavDropdown>


                            
                            <NavDropdown title="LOGIN" id="collasible-nav-dropdown">
                                <Link to='/login'>Student Portal</Link>
                                <Link to='/login'>Teacher Portal</Link>
                                <Link to='/login'>Employee/Staff Portal</Link>
                                <Link to='/login'>Business Partner Portal</Link>
                                <Link to='/login'>Parent Portal</Link>
                                <Link to='/login'>Ministry Portal</Link>
                            </NavDropdown>


                            


                        </Nav>
                        <Nav>
                            <Link><FaFacebookF></FaFacebookF></Link>
                            <Link><FaLinkedinIn></FaLinkedinIn></Link>
                            <Link><FaTwitter></FaTwitter></Link>
                            <Link><FaInstagram></FaInstagram></Link>
                            <Link><FaYoutube></FaYoutube></Link>
                            <Link> $<span>0.00</span> <FaShoppingCart></FaShoppingCart></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header1;