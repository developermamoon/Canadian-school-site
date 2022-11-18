import React from 'react';
import './Admission.css'
import ElementarySchool from '../../Images/Kindergarten-5.png'
import kindergarden7 from '../../Images/Kindergarten-7.png'
import kindergarden8 from '../../Images/Kindergarten-8.png'
import { Link } from 'react-router-dom';

const Admissions = () => {
    return (
        <div className='admission-bg pb-5'>

            {/* top capsule  */}
            <div>
                <div className='admission-bg-round'>
                    <div className='admission-bg-color'></div>

                        <div className='show-front text-white fw-bold mx-5 px-md-5 py-4 '>
                            <h2 className='pb-3 fs-1 fw-bold'>Admissions at NIST</h2>
                            <p>Get enroll at NIST which facilitates blended (i.e., pre-recorded video clips, virtual classroom) course offering.
                            </p>
                        </div>


                </div>
            </div>

            {/*------------- nist for me  ---------------------*/}

            <div>
                <div className="container py-4">
                    <div className="row row-cols-1 row-cols-md-2">

                        <div className="col col-md-4 d-flex align-items-center">
                            <div className=''>
                                <h3 className='fs-2 blueColor fw-bold'>Is the NIST for me?</h3>
                            </div>
                        </div>


                        <div className="col col-md-8">
                            <p className='mid-line right-text justify-text'>As a leading online private school in Canada, NIST welcomes students and parents who understand and support our mission, <b>vision, and values</b>. NIST gives a fair and equal opportunity to all applicants who fulfill the admission requirements. <br /> <br />

                                You will find below the details of our admission requirements and detailed procedure to get the admission at NIST in different levels (Kindergarten to High-school). In the Ontario School Board System, grade 9-12 is the High-School level (For more information, please visit our equivalency). Please note that Secondary School Programs lead to the Ontario Secondary School Diploma (OSSD) from Ontario, Canada. This diploma will make our students eligible to apply in any Canadian university with the ease of acceptance.</p>
                        </div>
                    </div>
                </div>
            </div>


            {/*------- admission requirements  */}
            <div>
                <div className="container poppins">
                    <h2 className='blueColor fw-bold text-center py-3'>Admission Requirements</h2>

                    <div className="row row-cols-1 row-cols-md-2 admission-req g-4">

                        <div className="col border border-3 bg-white px-md-5">
                            <div>
                                <div className='text-center'>
                                    <img className='' src={ElementarySchool} alt="" />
                                </div>

                                <div className="text-part pb-5">
                                    <div className="text-center">
                                        <h3 className='py-3 blueColor fw-bold'>Elementary School</h3>
                                        <p className=' blueColor fw-bold'>K0 (Kindergarten) and G1-6 (Elementary and Primary School)</p>
                                    </div>
                                    <ol>
                                        <li>A completed Online Student Registration at <Link className='green-color-link' to='/student-registration'>Here</Link></li>

                                        <li>If in case, the Online Student Registration system is down, <b>please download Admission Application form</b> by clicking <Link className='green-color-link'>Here</Link> and send it to <Link className='green-color-link'>info@nistonline.ca.</Link></li>

                                        <li>Either a birth certificate or another reliable document stating the child's identity and date of birth.</li>

                                        <li>Proof of guardianship - Required if your child is under 18 years of age and is not living with a parent.</li>

                                        <li>A basic understanding of the English language. However, a student's level of proficiency in English will not influence the choice of grade placement. English language learners will be placed with an age-appropriate group in online classes.</li>

                                    </ol>
                                </div>
                            </div>
                        </div>

                        
                        <div className="col border border-3 bg-white px-md-5">
                            <div>
                                <div className='text-center'>
                                    <img className='' src={ElementarySchool} alt="" />
                                </div>

                                <div className="text-part pb-5">
                                    <div className="text-center">
                                        <h3 className='py-3 blueColor fw-bold'>Elementary School</h3>
                                        <p className=' blueColor fw-bold'>K0 (Kindergarten) and G1-6 (Elementary and Primary School)</p>
                                    </div>
                                    <ol>
                                        <li>A completed Online Student Registration at <Link className='green-color-link' to='/student-registration'>Here</Link></li>

                                        <li>If in case, the Online Student Registration system is down, <b>please download Admission Application form</b> by clicking <Link className='green-color-link'>Here</Link> and send it to <Link className='green-color-link'>info@nistonline.ca.</Link></li>

                                        <li>Either a birth certificate or another reliable document stating the child's identity and date of birth.</li>

                                        <li>Proof of guardianship - Required if your child is under 18 years of age and is not living with a parent.</li>

                                        <li>A basic understanding of the English language. However, a student's level of proficiency in English will not influence the choice of grade placement. English language learners will be placed with an age-appropriate group in online classes.</li>

                                    </ol>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

                        
            {/* Tuition Fees and Scholarships  */}

            <div>
                <div className="container poppins my-5">
                        <h1 className='fw-bold blueColor my-4 text-center'>Tuition Fees and Scholarships</h1>
                        <p className='justify-text'>At NIST, we understand the financial sacrifice and commitment that parents make when they take the decision to enroll their children in a private school. As like-minded educators who value this commitment to pupil learning, the team at NIST ensures that the curriculum, teaching staff and overall student experience live up to its mission and vision. NIST offers a Canadian government accredited program from Kindergarten to Grade 12 and is now open for student enrolment for the current academic year. Because our overarching goal is to disseminate knowledge as widely as possible, especially among underserved communities, our fees are set lower than other private schools. It is noted that a $100 (One Hundred US dollar) admissions fee is applicable for all grades. <span className='blueColor fw-bold'>For more information about tuition fees, scholarships, grants and financial aids, please</span> <Link to='/tution-fees' className='green-color-link fw-bold'>Click Here</Link>.</p>
                </div>
            </div>


            {/*---------- Enrolment and Admission Procedure  */}
            <div>
                <div className="container poppins">
                    <h2 className='blueColor fw-bold text-center py-3'>Enrolment and Admission Procedure</h2>

                    <p className='fs-5'>Admission to NIST requires that each student demonstrates academic and behavioral readiness through the following application process:</p>

                    <div className="row row-cols-1 row-cols-md-2 admission-req g-4">

                        <div className="col border border-3 bg-white px-md-5">
                            <div>
                                <div className='text-center'>
                                    <img className='' src={kindergarden7} alt="" />
                                </div>

                                <div className="text-part pb-5">
                                    <h4 className='blueColor fw-bold my-4'>Step 1</h4>
                                    <h5 className='pb-3 blueColor fw-bold text-center'>Online Student Registration</h5>

                                    
                                    <p className='fw-bold'>To begin the admission process:</p>
                                    <ol className='green-color-link'>
                                        <li >An online registration form must be completed and submitted through the [link].</li>

                                        <li>The completion of all the fields on the application form is mandatory and supporting documents must be submitted (See admission requirements).</li>

                                    </ol>


                                    <p className='fw-bold'>Required Documents:</p>
                                    <ol className='green-color-link'>
                                        <li >Student Birth Certificate.</li>
                                        <li >Student Birth Certificate.</li>
                                        <li >Student Birth Certificate.</li>
                                        <li >Student Birth Certificate.</li>
                                        <li >Student Birth Certificate.</li>
                                        <li >Student Birth Certificate.</li>
                                        <li >Student Birth Certificate.</li>
                                    </ol>


                                    <p className='fw-bold'>Acknowledgment Email:</p>
                                    <ol className='green-color-link'>
                                        <li >Auto-reply acknowledgment email will be sent immediately to the email address provided when submitting the online application form.</li>
                                        <li >Auto-reply acknowledgment email will be sent immediately to the email address provided when submitting the online application form.</li>
                                       
                                    </ol>


                                    <p className='fw-bold'>Notification to parents:</p>
                                    <p className='fw-bold'>Parents must notify the school about:</p>
                                    <ol className='green-color-link'>
                                        <li >Special educational needs or disabilities that the child may have.</li>
                                        <li >Special educational needs or disabilities that the child may have.</li>
                                        <li >Special educational needs or disabilities that the child may have.</li>
                                    </ol>
                                </div>
                            </div>
                        </div>


                        <div className="col border border-3 bg-white px-md-5">
                            <div>
                                <div className='text-center'>
                                    <img className='' src={kindergarden8} alt="" />
                                </div>

                                <div className="text-part pb-5">
                                    <h4 className='blueColor fw-bold my-4'>Step 2</h4>
                                    <h5 className='pb-3 blueColor fw-bold text-center'>Review of Student Application Form</h5>

                                    
                                    <p className='fw-bold'>To begin the admission process:</p>
                                    <ol className='green-color-link'>
                                        <li >An online registration form must be completed and submitted through the [link].</li>

                                        <li>The completion of all the fields on the application form is mandatory and supporting documents must be submitted (See admission requirements).</li>

                                    </ol>


                                    <p className='fw-bold'>Required Documents:</p>
                                    <ol className='green-color-link'>
                                        <li >Student Birth Certificate.</li>
                                        <li >Student Birth Certificate.</li>
                                        <li >Student Birth Certificate.</li>
                                        <li >Student Birth Certificate.</li>
                                        <li >Student Birth Certificate.</li>
                                        <li >Student Birth Certificate.</li>
                                        <li >Student Birth Certificate.</li>
                                    </ol>


                                    <p className='fw-bold'>Acknowledgment Email:</p>
                                    <ol className='green-color-link'>
                                        <li >Auto-reply acknowledgment email will be sent immediately to the email address provided when submitting the online application form.</li>
                                        <li >Auto-reply acknowledgment email will be sent immediately to the email address provided when submitting the online application form.</li>
                                       
                                    </ol>


                                    <p className='fw-bold'>Notification to parents:</p>
                                    <p className='fw-bold'>Parents must notify the school about:</p>
                                    <ol className='green-color-link'>
                                        <li >Special educational needs or disabilities that the child may have.</li>
                                        <li >Special educational needs or disabilities that the child may have.</li>
                                        <li >Special educational needs or disabilities that the child may have.</li>
                                    </ol>
                                </div>
                            </div>
                        </div>


                        

                    </div>
                </div>
            </div>




        </div>
    );
};

export default Admissions;