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
                        <Link to='/student-services'>Student Services</Link>
                        <Link to='/student-services'>Students Club</Link>
                        <Link to='/student-services'>Arts and Music</Link>
                        <Link to='/student-services'>Online Tutorial Services</Link>
                        <Link to='/student-services'>Virtual Games</Link>
                        <Link to='/student-services'>Community Services</Link>
                        <Link to='/student-services'>Student Counselling</Link>
                        <Link to='/student-services'>Internships</Link>
                    </div>
                    <div className="col">
                        <Link to='international-students'>International Students</Link>
                        <Link to='/calender'>Calender</Link>
                        <Link to='/careers'>Careers</Link>
                        <Link to='/our-team'>Our Team</Link>
                        <Link to='/NSRIC-Partnership'>NSRIC Partnership</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;