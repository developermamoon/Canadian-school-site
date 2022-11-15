import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './Header2.css'

const Header2 = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='navbar' >
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="d-flex align-items-center flex-wrap text-center">
                            
                            <Link to="/">Home</Link>
                            

                            <NavDropdown title="About Us" id="collasible-nav-dropdown">
                                <Link to="/whyChooseUs">Why choose us?</Link>
                                <Link to="/objectives">Objectives</Link>
                                <Link to="#action/3.3">
                                    Who We Are ?
                                </Link>
                                <Link to="#action/3.4">Equivalency</Link>

                                <Link to="#action/3.5">
                                    Inclusive Education
                                </Link>
                            </NavDropdown>

                            <Link to="#pricing">Courses</Link>


                            <NavDropdown title="Admissions" id="collasible-nav-dropdown">

                                


                                <Link to="#action/3.1">Admission Requirements</Link>
                                <Link to="#action/3.1">Enrolement and Admission Procedure</Link>

                                    <NavDropdown title="Tuition Fees and Scholarship" id="collasible-nav-dropdown">
                                        <Link to="#action/">Tution Fee</Link>
                                        <Link to="#action/">Family/Sibling Grant</Link>
                                        <Link to="#action/">
                                            Scholarships
                                        </Link>
                                        <Link to="#action/3.3">Finantial Aid and Subsidy</Link>

                                    </NavDropdown>
                                

                                <Link to="#action/3.3">Submit Online Application Form Now</Link>

                                <Link to="#action/3.4">
                                    Download Admission Form Now
                                </Link>
                            </NavDropdown>

                            
                            <NavDropdown title="Our Programs" id="collasible-nav-dropdown">


                                <NavDropdown title="NIST School Program " id="collasible-nav-dropdown">
                                    <NavDropdown title="K0: Preschool Education (PRE)" id="collasible-nav-dropdown">
                                        <Link to="/whyChooseUs">Junior Kindergarten</Link>
                                        <Link to="/whyChooseUs">Senior Kindergarten</Link>
                                    </NavDropdown>


                                    <NavDropdown title="G1-6: Elementary and Primary Education (ELE)" id="collasible-nav-dropdown">
                                        <Link to="/whyChooseUs">Grade 1</Link>
                                        <Link to="/whyChooseUs">Grade 2</Link>
                                        <Link to="/whyChooseUs">Grade 3</Link>
                                        <Link to="/whyChooseUs">Grade 4</Link>
                                        <Link to="/whyChooseUs">Grade 5</Link>
                                        <Link to="/whyChooseUs">Grade 6</Link>
                                    </NavDropdown>


                                    <NavDropdown title="G7-8: Middle School Education (MID)" id="collasible-nav-dropdown">
                                        <Link to="/whyChooseUs">Grade 9</Link>
                                        <Link to="/whyChooseUs">Grade 10</Link>
                                        <Link to="/whyChooseUs">Grade 11</Link>
                                        <Link to="/whyChooseUs">Grade 12</Link>
                                        
                                    </NavDropdown>


                                    <NavDropdown title="G9-12: Secondary School Education (SEC)" id="collasible-nav-dropdown">
                                        <Link to="/whyChooseUs">Grade 7</Link>
                                        <Link to="/whyChooseUs">Grade 8</Link>
                                    </NavDropdown>



                                    <NavDropdown title="Home School Education (HOM)" id="collasible-nav-dropdown">
                                        <Link to="/whyChooseUs">Grade 1</Link>
                                        <Link to="/whyChooseUs">Grade 2</Link>
                                        <Link to="/whyChooseUs">Grade 3</Link>
                                        <Link to="/whyChooseUs">Grade 4</Link>
                                        <Link to="/whyChooseUs">Grade 5</Link>
                                        <Link to="/whyChooseUs">Grade 6</Link>
                                        <Link to="/whyChooseUs">Grade 7</Link>
                                        <Link to="/whyChooseUs">Grade 8</Link>
                                        <Link to="/whyChooseUs">Grade 9</Link>
                                        <Link to="/whyChooseUs">Grade 10</Link>
                                        <Link to="/whyChooseUs">Grade 11</Link>
                                        <Link to="/whyChooseUs">Grade 12</Link>
                                    </NavDropdown>


                                </NavDropdown>


                                <Link to="#action/3.1">Computer Algorithm and Programming(CAP) Program</Link>

                                <NavDropdown title="Language Program" id="collasible-nav-dropdown">
                                    <Link to="/whyChooseUs">English Literacy Development (ELD) Program</Link>
                                    <Link to="/objectives">English as a second language (ESL)Program</Link>
                                    <Link to="#action/3.3">
                                        French as a second language (FSL)Program
                                    </Link>
                                    <Link to="#action/3.4">Internation English Language Testing System System (IELTS) Program</Link>

                                    <Link to="#action/3.5">
                                        Test of English As a Foreign Language (TOEFL) Program
                                    </Link>
                                </NavDropdown>



                                <Link to="#action/3.1">Ontario Secondary School Diploma (OSSD) Program</Link>

                                <NavDropdown title="Tutoring Program (All Grades)" id="collasible-nav-dropdown">
                                    <Link to="/whyChooseUs">Computer Algorithm and Programming</Link>
                                    <Link to="/objectives">English</Link>
                                    <Link to="#action/3.3">
                                        French
                                    </Link>
                                    <Link to="#action/3.4">Mathematics</Link>

                                    <Link to="#action/3.5">
                                        Science
                                    </Link>
                                </NavDropdown>



                                <Link to="#action/3.2">
                                    Vocational Training (VT) Program
                                </Link>
                                
                            </NavDropdown>

                            <NavDropdown title="Student Services" id="collasible-nav-dropdown">
                                <Link to="#action/3.1">Student Club</Link>
                                <Link to="#action/3.1">Arts and Music</Link>
                                <Link to="#action/3.2">
                                    Online Tutoring Service
                                </Link>
                                <Link to="#action/3.3">Virtual Games</Link>
                                <Link to="#action/3.3">Community Service</Link>

                                <Link to="#action/3.4">
                                    Student Counselling
                                </Link>
                                <Link to="#action/3.4">
                                    Internships
                                </Link>
                            </NavDropdown>


                            <NavDropdown title="International Students" id="collasible-nav-dropdown">
                                <Link to="#action/3.1">Global Student</Link>
                                <Link to="#action/3.1">Benefit</Link>
                                <Link to="#action/3.2">
                                    Have questions
                                </Link>
                                <Link to="#action/3.3">Equivalency</Link>

                                <Link to="#action/3.4">
                                    Inclusive Education
                                </Link>
                            </NavDropdown>



                            
                            <Link to="#pricing">NIST Calendar</Link>
                            <Link to="#pricing">Careers</Link>
                            <Link to="#pricing">Our Team</Link>
                            <Link to="#pricing">NSRIC Partnership</Link>


                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header2;