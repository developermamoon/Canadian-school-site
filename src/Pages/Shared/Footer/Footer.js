import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {  
    return (
        <div className='bg'>
            <div className='container footer1'>
                <div className="row row-cols-1 row-cols-md-4 footer-a gap-5 gap-md-0">
                    <div className="col">
                        <Link to='/about-us'>About Us</Link>
                        <a href="/about-us/#why-choose-us">Why Choose Us</a>
                        <a href='/about-us/#objectives'>Objectives</a>
                        <a href='#who-we-are'>Who We Are</a>
                        <a href='#equivalency'>Equivalency</a>
                        <Link to='/inclusive-education'>Inclusive Education</Link>
                    </div>
                    <div className="col">
                        <Link to='/admission'>Admission</Link>
                        <Link to='/admission/#admission-process-guideline'>Admission Process Guideline</Link>
                        <Link to= '/tution-fees'>Tuition Fees</Link>
                        <Link to='/tution-fees/#scholarships'>Scholarships</Link>
                        <Link to='/tution-fees/#financial-aid'>Financial Aid</Link>
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