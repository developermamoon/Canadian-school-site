import React from 'react';
import { Link } from 'react-router-dom';
import './Header2.css'
import { FaBars } from 'react-icons/fa';

const Header2 = () => {
    return (
        <div>
            
            <div className="header2">
                <input type="checkbox" name="" id="menu-bar" />
                <label for="menu-bar"><FaBars className='text-white'></FaBars></label>

                <nav class="navbar">
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>About Us</Link>
                            <ul>
                                <li><Link to='/'>Why choose us?</Link></li>
                                <li><Link to='/'>Objectives</Link></li>
                                <li><Link to='/'>Who We Are?</Link></li>
                                <li><Link to='/'>Equivalency</Link></li>
                                <li><Link to='/'>Inclusive Education</Link></li>
                            </ul>
                        </li>
                        <li><Link to='/'>Courses</Link></li>
                        <li><Link to='/'>Admissions +</Link>
                            <ul>
                                <li><Link to='/'>Admission Requirements</Link></li>
                                <li><Link to='/'>Enrollment and Admission Procedure</Link></li>
                                <li><Link to='/'>Tution Fees and Scholarships +</Link>
                                    <ul>
                                        <li><Link to='/'>Tution Fee</Link></li>
                                        <li><Link to='/'>Family/Siblings Grant</Link></li>
                                        <li><Link to='/'>Scholarships</Link></li>
                                        <li><Link to='/'>Financial Aid and Subsidy</Link></li>
                                    </ul>
                                <li><Link to='/'>Submit Online Application Form Now</Link></li>
                                <li><Link to='/'>Download Admission Form Now</Link></li>
                                </li>
                            </ul>
                        </li>
                        <li><Link to='/'>Our Programs +</Link>
                            <ul>
                                <li><Link to='/'>NIST School Program +</Link>
                                    <ul id="fourth-nav">
                                        <li><Link to='/'>K0: Preschool Education (PRE) +</Link>
                                            <ul>
                                                <li><Link to='/'>Junior Kindergarten</Link></li>
                                                <li><Link to='/'>Senior Kindergarten</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to='/'>G1-6: Elementary and Primary Education (ELE) +</Link>
                                            <ul id="fifth-nav">
                                                <li><Link to='/'>Grade 1</Link></li>
                                                <li><Link to='/'>Grade 2</Link></li>
                                                <li><Link to='/'>Grade 3</Link></li>
                                                <li><Link to='/'>Grade 4</Link></li>
                                                <li><Link to='/'>Grade 5</Link></li>
                                                <li><Link to='/'>Grade 6</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to='/'>G7-8: Middle School Education (MID) +</Link>
                                            <ul>
                                                <li><Link to='/'>Grade 7</Link></li>
                                                <li><Link to='/'>Grade 8</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to='/'>G9-12: Secondary School Education (SEC) +</Link>
                                            <ul id="fifth-nav">
                                                <li><Link to='/'>Grade 9</Link></li>
                                                <li><Link to='/'>Grade 10</Link></li>
                                                <li><Link to='/'>Grade 11</Link></li>
                                                <li><Link to='/'>Grade 12</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to='/'>Home School Education (HOM) +</Link>
                                            <ul id="fifth-nav-big">
                                                <li><Link to='/'>Grade 1</Link></li>
                                                <li><Link to='/'>Grade 2</Link></li>
                                                <li><Link to='/'>Grade 3</Link></li>
                                                <li><Link to='/'>Grade 4</Link></li>
                                                <li><Link to='/'>Grade 5</Link></li>
                                                <li><Link to='/'>Grade 6</Link></li>
                                                <li><Link to='/'>Grade 7</Link></li>
                                                <li><Link to='/'>Grade 8</Link></li>
                                                <li><Link to='/'>Grade 9</Link></li>
                                                <li><Link to='/'>Grade 10</Link></li>
                                                <li><Link to='/'>Grade 11</Link></li>
                                                <li><Link to='/'>Grade 12</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                                <li><Link to='/'>Computer Algorithm and Programming (CAP) Program</Link></li>
                                <li><Link to='/'>Language Program +</Link>
                                    <ul id="fourth-nav">
                                        <li><Link to='/'>English Literacy Development(ELD) program</Link></li>
                                        <li><Link to='/'>English as a Second Language(ESL) program</Link></li>
                                        <li><Link to='/'>French as a Second Language(FSL) program</Link></li>
                                        <li><Link to='/'>Internation Enligsh Language Testing System(IELTS) program</Link></li>
                                        <li><Link to='/'>Test of English as a Foreign Language (TOEFL) program</Link></li>
                                    </ul></li>
                                <li><Link to='/'>Ontario Secondary School Diploma (OSSD) Program</Link></li>
                                <li><Link to='/'>Professional Development (PD) Program</Link></li>
                                <li><Link to='/'>Tutoring Program (All Grades) +</Link>
                                    <ul id="fourth-nav">
                                        <li><Link to='/'>Computer Algorithm and Programming</Link></li>
                                        <li><Link to='/'>English</Link></li>
                                        <li><Link to='/'>French</Link></li>
                                        <li><Link to='/'>Mathematics</Link></li>
                                        <li><Link to='/'>Science</Link></li>
                                    </ul></li>
                                <li><Link to='/'>Vocational Training (VT) Program</Link></li>

                            </ul>
                        </li>
                        <li><Link to='/'>Student Services +</Link>
                            <ul>
                                <li><Link to='/'>Student Club</Link></li>
                                <li><Link to='/'>Arts and Music</Link></li>
                                <li><Link to='/'>Online Tutoring Service</Link></li>
                                <li><Link to='/'>Virtual Games</Link></li>
                                <li><Link to='/'>Community Service</Link></li>
                                <li><Link to='/'>Student Counselling</Link></li>
                                <li><Link to='/'>Internships</Link></li>

                            </ul>
                        </li>
                        <li><Link to='/'>International Students +</Link>
                            <ul>
                                <li><Link to='/'>Global Student</Link></li>
                                <li><Link to='/'>Benefit</Link></li>
                                <li><Link to='/'>Have Questions</Link></li>
                            </ul>
                        </li>
                        <li><Link to='/'>NIST Calendar</Link></li>
                        <li><Link to='/'>Carrers</Link></li>
                        <li><Link to='/'>Our Team</Link></li>
                        <li><Link to='/'>NSRIC Partnership</Link></li>
                    </ul>
                </nav>
            </div>
            

        </div>
    );
};

export default Header2;