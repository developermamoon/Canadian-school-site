import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg'>
            <div className='container'>
                <div className="row row-cols-1 row-cols-md-4 footer-a gap-5 gap-md-0">
                    <div className="col">
                        <Link to='/about-us'>About Us</Link>
                        <Link>Why Choose Us?</Link>
                        <Link>Objectives</Link>
                        <Link>Who We Are</Link>
                        <Link>Equivalency</Link>
                        <Link to='/inclusive-education'>Inclusive Education</Link>
                    </div>
                    <div className="col">
                        <Link to='/admission'>Admission</Link>
                        <Link to='admission' href= '#admission-procedure-guideline'>Admission Process Guideline</Link>
                        <Link>Tuition Fees</Link>
                        <Link>Scholarships</Link>
                        <Link>Financial Aid</Link>
                        <Link>Download Admission Form</Link>
                    </div>
                    <div className="col">
                        <Link>Student Services</Link>
                        <Link>Students Club</Link>
                        <Link>Arts and Music</Link>
                        <Link>Online Tutorial Services</Link>
                        <Link>Virtual Games</Link>
                        <Link>Community Services</Link>
                        <Link>Student Counselling</Link>
                        <Link>Internships</Link>
                    </div>
                    <div className="col">
                        <Link>International Students</Link>
                        <Link>Calender</Link>
                        <Link>Careers</Link>
                        <Link>Our Team</Link>
                        <Link>NSRIC Partnership</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;