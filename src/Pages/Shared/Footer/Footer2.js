import React from 'react';
import { Link } from 'react-router-dom';
import './Footer2.css'
import { FaPhoneAlt } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';

import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Footer2 = () => {
    return (
        <div className='bg-2 pb-4'>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 row-5">

                    <div className="col">
                        <h3>About us</h3>
                        <p className='aboutus'>NSRIC International School in Toronto (NIST) is accredited and inspected private school in
                            Ontario, Canada. It offers a new integrated high quality, and research-intensive Canadian
                            Ministry of Education approved curriculum to fit the state-of-the art programs for our local
                            and global students. The school follows a very vibrant blended mixture of the diverse
                            curriculum. It offers Ontario Secondary School Diploma (OSSD) certificate after Grade 12
                            graduation. NIST provides Kindergarten to Grade 12 schooling, including Homeschool
                            education.
                        </p>
                    </div>
                    <div className="col px-5">
                        <h3>Corporate office</h3>
                        <div className='mb-4'>
                            <div className="icon"></div>
                            <div className='d-flex align-items-center'>
                                <FaMapMarkerAlt className='fs-3 me-3'></FaMapMarkerAlt>
                                <small>
                                Location: <br />
                                London, Ontario, Canada
                            </small>
                            </div>
                        </div>

                        <div className='mb-4'>
                            <div className="icon"></div>
                            <div className='d-flex align-items-center'>
                                <FaPhoneAlt className='fs-3 me-3'></FaPhoneAlt> 
                                <small>
                                Phone: <br />
                                +1 226 271 7206
                            </small>
                            </div>
                        </div>


                        <div className='mb-4'>
                            <div className="icon"></div>
                            <div className='d-flex align-items-center'>
                                <FaRegEnvelope className='fs-3 me-3'></FaRegEnvelope>
                                <small>
                                Email: <br />
                                info@nistonline.ca
                            </small>
                            </div>
                        </div>


                        <div className='mb-4'>
                            <h3>Social Media</h3>
                            <div className='d-flex align-items-center'>
                                <div className='d-flex social'>

                                    <Link to='/'><FaFacebookF></FaFacebookF></Link>
                                    <Link to='/'><FaLinkedinIn></FaLinkedinIn></Link>
                                    <Link to='/'><FaTwitter></FaTwitter></Link>
                                    <Link to='/'><FaInstagram></FaInstagram></Link>
                                    <Link to='/'><FaYoutube></FaYoutube></Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <h3>Contact us</h3>
                        <div>
                            <form>
                                <input type="text" name="name" placeholder='Name' id="" className='w-100 mb-1' />
                                <input type="text" name="phone" placeholder='Phone' id="" className='w-100 mb-1' />
                                <input type="email" name="email" placeholder='Email' id="" className='w-100 mb-1' />
                                <textarea name="message" id="" cols="30" rows="3" placeholder='Message' className='w-100 mb-1'></textarea>
                                <input type="submit" value="SUBMIT" className='w-100' />
                            </form>
                        </div>
                    </div>
                    
                
                </div>
                <hr className='blackhorizontal'/>

                <div className='row row-cols-1 row-cols-md-2 justify-content-between'>
                    
                    <p className='col col-md-8 copyright'><small>All right reserved. NIST ONLINE. Designed and Developed by <Link>Aniya Network Solutions Limited.</Link></small></p>

                    <div className='col col-md-4 terms d-flex justify-content-md-end'>
                        <small>
                            <Link>Terms & Conditions</Link>
                            <Link>Privacy Policy</Link>
                        </small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer2;