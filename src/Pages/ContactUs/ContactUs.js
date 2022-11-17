import React from 'react';
import './ContactUs.css'
import { FaPhoneAlt } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const ContactUs = () => {
    return (
        <div>
            <h1 className='big-text'>Get in Touch</h1>

            <div className="container my-5">
                <div className="row row-cols-1 row-cols-md-2">
                    <div className="col mt-5 mt-md-0">
                        <div>
                            <h2 className='blueColor contact'>Contact</h2>
                            <hr className='hrline'/>
                            <h1 className='contact-name blueColor'>Dr. Abdul Fattah</h1>
                            <p className='fw-bold fs-5'>Superintendent - NIST</p>

                            <Link className='d-flex align-items-start green-text'>
                                <FaMapMarkerAlt className='fs-4 me-3 orange-icon'></FaMapMarkerAlt>
                                Toronto, ON, Canada
                            </Link>
                            

                            <Link className='d-flex align-items-center mt-2 green-text'>
                                <FaRegEnvelope className='fs-4 me-3 orange-icon'></FaRegEnvelope>
                                Abdulf@nsric.ca
                            </Link>
                            

                            <Link className='d-flex align-items-center mt-2 green-text  '>
                                <FaPhoneAlt className='fs-5 me-3 orange-icon'></FaPhoneAlt>
                                +1 647 701 9925
                            </Link>

                            <div className='d-flex align-items-center'>
                                <p className='blueColor fw-bold mt-3 fs-5'>Keep in Touch:</p>

                                <Link className='black-link'><FaFacebookF></FaFacebookF></Link>
                                <Link className='black-link'><FaTwitter></FaTwitter></Link>
                                <Link className='black-link'><FaPinterestSquare></FaPinterestSquare></Link>
                                <Link className='black-link'><FaYoutube></FaYoutube></Link>

                            </div>

                            <div className='map-box'></div>

                        </div>
                    </div>


                    <div className="col mt-5 mt-md-0">
                        <div>
                            <h2 className='blueColor contact'>Contact</h2>
                            <hr className='hrline'/>
                            <h1 className='contact-name blueColor'>Nazmul Haq</h1>
                            <p className='fw-bold fs-5'>Principal - NIST</p>

                            <Link className='d-flex align-items-start green-text'>
                                <FaMapMarkerAlt className='fs-4 me-3 orange-icon'></FaMapMarkerAlt>
                                Toronto, ON, Canada
                            </Link>
                            

                            <Link className='d-flex align-items-center mt-2 green-text'>
                                <FaRegEnvelope className='fs-4 me-3 orange-icon'></FaRegEnvelope>
                                Nazmulh@nsric.ca
                            </Link>
                            

                            <Link className='d-flex align-items-center mt-2 green-text  '>
                                <FaPhoneAlt className='fs-5 me-3 orange-icon'></FaPhoneAlt>
                                +1 647 701 9925
                            </Link>

                            <div className='d-flex align-items-center'>
                                <p className='blueColor fw-bold mt-3 fs-5'>Keep in Touch:</p>

                                <Link className='black-link'><FaFacebookF></FaFacebookF></Link>
                                <Link className='black-link'><FaTwitter></FaTwitter></Link>
                                <Link className='black-link'><FaPinterestSquare></FaPinterestSquare></Link>
                                <Link className='black-link'><FaYoutube></FaYoutube></Link>

                            </div>

                            <div className='map-box'></div>

                        </div>
                    </div>


                    <div className="col mt-5">
                        <div>
                            <h2 className='blueColor contact'>Contact</h2>
                            <hr className='hrline'/>
                            <h1 className='contact-name blueColor'>Student Admissions</h1>
                            

                            <Link className='d-flex align-items-start green-text'>
                                <FaMapMarkerAlt className='fs-4 me-3 orange-icon'></FaMapMarkerAlt>
                                London, ON, Canada
                            </Link>
                            

                            <Link className='d-flex align-items-center mt-2 green-text'>
                                <FaRegEnvelope className='fs-4 me-3 orange-icon'></FaRegEnvelope>
                                info@nistonline.ca
                            </Link>
                            

                            <Link className='d-flex align-items-center mt-2 green-text  '>
                                <FaPhoneAlt className='fs-5 me-3 orange-icon'></FaPhoneAlt>
                                +1 647 701 9925
                            </Link>

                            <div className='d-flex align-items-center'>
                                <p className='blueColor fw-bold mt-3 fs-5'>Keep in Touch:</p>

                                <Link className='black-link'><FaFacebookF></FaFacebookF></Link>
                                <Link className='black-link'><FaTwitter></FaTwitter></Link>
                                <Link className='black-link'><FaPinterestSquare></FaPinterestSquare></Link>
                                <Link className='black-link'><FaYoutube></FaYoutube></Link>

                            </div>

                            <div className='map-box'></div>

                        </div>
                    </div>



                    
                </div>
            </div>
        </div>
    );
};

export default ContactUs;