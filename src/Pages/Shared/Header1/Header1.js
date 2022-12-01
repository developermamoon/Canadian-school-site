import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { FaBars, FaSortDown } from 'react-icons/fa';
import './Header1.css'

const Header1 = () => {
    return (
        

        <div>

            <div className="header1">
                <input type="checkbox" name="" id="menu-bar" />
                <label for="menu-bar"><FaBars className='text-white'></FaBars></label>

                <nav class="navbar d-flex align-items-center fw-bold">
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
                            
                                <Link to='/'>$<span className=''>0.00</span> <FaShoppingCart></FaShoppingCart></Link>
                    </div>

                    {/* <div className='d-flex social'>
                            
                                <Link to='/'><FaFacebookF></FaFacebookF></Link>
                                <Link to='/'><FaLinkedinIn></FaLinkedinIn></Link>
                                <Link to='/'><FaTwitter></FaTwitter></Link>
                                <Link to='/'><FaInstagram></FaInstagram></Link>
                                <Link to='/'><FaYoutube></FaYoutube></Link>
                                <Link to='/'>$<span className=''>0.00</span> <FaShoppingCart></FaShoppingCart></Link>
                    </div> */}


                </nav>
            </div>


            


        </div>
    );
};

export default Header1;