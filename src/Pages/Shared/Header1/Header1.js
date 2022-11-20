import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars, FaSortDown } from 'react-icons/fa';
import './Header1.css'

const Header1 = () => {
    return (
        // <div>
        //     <Navbar collapseOnSelect expand="lg" className='gradient text-white' >
        //         <Container>
                    
        //             <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        //             <Navbar.Collapse id="responsive-navbar-nav">
        //                 <Nav className="me-auto">
        //                     <Link to='/contact-us'>CONTACT US</Link>
        //                     <Link>NSRIC</Link>
        //                     <Link>CONFERENCE</Link>
        //                     <Link>WANSEE</Link>
                            
        //                     <NavDropdown title="REGISTRATION" id="collasible-nav-dropdown">
        //                         <Link to='/student-registration'>Student Registration</Link>
        //                         <Link to='/teacher-registration'>Teacher Registration</Link>
        //                         <Link to='/employee-staff-registration'>Employee/Staff Registration</Link>
        //                         <Link to='/business-partner-registration'>Business Partner Registation</Link>
        //                         <Link to='/parent-registration'>Parent Registration</Link>                              
        //                         <Link to='/ministry-registration'>Ministry Registration</Link>
        //                     </NavDropdown>


                            
        //                     <NavDropdown title="LOGIN" id="collasible-nav-dropdown">
        //                         <Link to='/login'>Student Portal</Link>
        //                         <Link to='/login'>Teacher Portal</Link>
        //                         <Link to='/login'>Employee/Staff Portal</Link>
        //                         <Link to='/login'>Business Partner Portal</Link>
        //                         <Link to='/login'>Parent Portal</Link>
        //                         <Link to='/login'>Ministry Portal</Link>
        //                     </NavDropdown>


                            


        //                 </Nav>
        //                 <Nav>
        //                     <Link><FaFacebookF></FaFacebookF></Link>
        //                     <Link><FaLinkedinIn></FaLinkedinIn></Link>
        //                     <Link><FaTwitter></FaTwitter></Link>
        //                     <Link><FaInstagram></FaInstagram></Link>
        //                     <Link><FaYoutube></FaYoutube></Link>
        //                     <Link> $<span>0.00</span> <FaShoppingCart></FaShoppingCart></Link>
        //                 </Nav>
        //             </Navbar.Collapse>
        //         </Container>
        //     </Navbar>
        // </div>


        <div>

            <div className="header1">
                <input type="checkbox" name="" id="menu-bar" />
                <label for="menu-bar"><FaBars className='text-white'></FaBars></label>

                <nav class="navbar d-flex align-items-center">
                    <ul>
                            <li><Link to='/contact-us'>Contact US</Link></li>
                            <li><Link to='/nsric'>NSRIC</Link></li>
                            <li><Link to='/conferences'>CONFERENCES</Link></li>
                            <li><Link to='/wansee'>WANSEE</Link></li>
                            <li><span className='downArrow'><Link to='/student-registration'>REGISTRATION</Link> <FaSortDown></FaSortDown></span>
                                <ul>
                                    <li><Link to='/student-registration'>Student Registration</Link></li>
                                    <li><Link to='/teacher-registration'>Teacher Registration</Link></li>
                                    <li><Link to='/employee-staff-registration'>Employee/staff Registration</Link></li>
                                    <li><Link to='/business-partner-registration'>Business Partner Registration</Link></li>
                                    <li><Link to='/parent-registration'>Parent Registration</Link></li>
                                    <li><Link to='/ministry-registration'>Ministry Registration</Link></li>

                                </ul>
                            </li>
                            <li><span className='downArrow login-menu'><Link to='/login'>LOGIN</Link> <FaSortDown></FaSortDown></span>
                                <ul>
                                    <li><Link to='/login'>Student Portal</Link></li>
                                    <li><Link to='/login'>Teacher Portal</Link></li>
                                    <li><Link to='/login'>Employee/staff Portal</Link></li>
                                    <li><Link to='/login'>Business Portal</Link></li>
                                    <li><Link to='/login'>Parent Portal</Link></li>
                                    <li><Link to='/login'>Ministry Portal</Link></li>
                                </ul>
                            </li>
                    </ul>

                    <div className='d-flex social'>
                            
                                <Link to='/'><FaFacebookF></FaFacebookF></Link>
                                <Link to='/'><FaLinkedinIn></FaLinkedinIn></Link>
                                <Link to='/'><FaTwitter></FaTwitter></Link>
                                <Link to='/'><FaInstagram></FaInstagram></Link>
                                <Link to='/'><FaYoutube></FaYoutube></Link>
                                <Link to='/'>$<span className=''>0.00</span> <FaShoppingCart></FaShoppingCart></Link>
                    </div>


                </nav>
            </div>


            


        </div>
    );
};

export default Header1;