import React from 'react';
import './Admission.css'
import ElementarySchool from '../../Images/Kindergarten-5.png'
import kindergarden7 from '../../Images/Kindergarten-7.png'
import kindergarden8 from '../../Images/Kindergarten-8.png'
import kindergarden9 from '../../Images/Kindergarten-9.png'
import { Link } from 'react-router-dom';
import { FaDatabase, FaCrown, FaMedal, FaStar, FaChevronCircleRight, FaTv, FaRulerCombined, FaInbox } from "react-icons/fa";

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

                                    
                                    <p className='fw-bold'>After the thorough review of the student application form, the Admission Office will:</p>
                                    <ol className='green-color-link'>
                                        <li> Respond to the applicant within five to ten business days (i.e., five to ten working days).</li>

                                        <li>The completion of all the fields on the application form is mandatory and supporting documents must be submitted (See admission requirements).</li>

                                    </ol>

                                    <div className='text-center'>
                                        <img className='' src={kindergarden9} alt="" />
                                    </div>

                                    <h4 className='blueColor fw-bold my-4'>Step 3</h4>
                                    <h5 className='pb-3 blueColor fw-bold text-center'>Assessments</h5>


                                    <p className='fw-bold justify-text'>Students will be notified through email regarding their scheduled date and time to appear for the Assessment test.</p>

                                    <p className='fw-bold'>NIST's Admission Office will:</p>
                                    <ol className='green-color-link'>
                                        <li >Review the Admission Entrance Assessment with the Academic Team.</li>
                                        <li >Review the Admission Entrance Assessment with the Academic Team.</li>
                                        
                                    </ol>


                                    <p className='fw-bold'>Students:</p>
                                    <ol className='green-color-link'>
                                        <li >Auto-reply acknowledgment email will be sent immediately to the email address provided when submitting the online application form.</li>
                                        <li >Auto-reply acknowledgment email will be sent immediately to the email address provided when submitting the online application form.</li>
                                       
                                    </ol>


                                    <p className='fw-bold'>Note:</p>
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

            {/*--------------- step 4  */}
            <div className="container py-5 rounded">
                <div className="row admission-req">
                    <div className="col bg-white px-md-5">
                        <h4 className='blueColor fw-bold my-4'>Step 4</h4>

                        <h3 className='pb-3 blueColor fw-bold text-center'>Final Decision</h3>


                        <p className='fw-bold'>Applicants:</p>
                        <ol className='green-color-link'>
                            <li> Successful applicants will receive an “Admission Acceptance Letter”..</li>
                            <li> Successful applicants will receive an “Admission Acceptance Letter”..</li>
                            <li> Successful applicants will receive an “Admission Acceptance Letter”..</li>
                        </ol>


                        <p className='fw-bold'>Acceptance of Student Placement:</p>
                        <ol className='green-color-link'>
                            <li> Once accepted to NIST, the Admissions Officer will contact parents/student within four working days.</li>
                            <li> Once accepted to NIST, the Admissions Officer will contact parents/student within four working days.</li>
                            <li> Once accepted to NIST, the Admissions Officer will contact parents/student within four working days.</li>
                            
                        </ol>


                        <p className='fw-bold'>Waiting for Acceptance:</p>
                        <p className=''>If the applicant has completed the process successfully, and there are no seats to be offered at the time, the applicant will become part of the school's waiting list, and will be reviewed again for the next academic semester.</p>

                        <p className='fw-bold'>Rejected Applications:</p>
                        <p className=''>The school has the right to reject any applications when:</p>


                        <ol className='green-color-link'>
                            <li> Any of the provided documents are forged.</li>
                            <li> Any of the provided documents are forged.</li>
                            <li> Any of the provided documents are forged.</li>
                            
                            
                        </ol>


                    </div>
                </div>
            </div>


            {/*----------------- assesment procedure  */}
            <h2 className='blueColor fw-bold text-center py-3'>Assessment Procedure</h2>

            <div className='gray-bg'>
                <div className="container py-4">
                    <h2 className='text-center'>Six Principles</h2>
                    <div className="row row-cols-1 row-cols-md-2 py-4 g-5">

                        <div className="col px-5">
                            <div>
                                <div className="title">
                                    <div className='d-flex'>
                                        <div className="orange-icons fs-1 d-flex me-3">
                                            <FaTv></FaTv>
                                        </div>
                                        <h4>Anticipate, value and support diversity and learner differences</h4>
                                    </div>

                                    <p className='fw-bold'>Kindergarten students will be offered:</p>
                                    <ol className=''>
                                        <li> To attend an Online Kindergarten readiness assessment session.</li>
                                        <li> To attend an Online Kindergarten readiness assessment session.</li>
                                    </ol>
                                    
                                    <p className='fw-bold'>Following the session, our highly qualified Kindergarten teachers will provide a written report on the following:</p>
                                    <ol className=''>
                                        <li>Social skills appropriate to the child's age.</li>
                                        <li>Social skills appropriate to the child's age.</li>
                                        <li>Social skills appropriate to the child's age.</li>
                                        <li>Social skills appropriate to the child's age.</li>
                                    </ol>

                                </div>
                            </div>
                        </div>

                        <div className="col px-5">
                            <div>
                                <div className="title">
                                    <div className='d-flex'>
                                        <div className="orange-icons fs-1 d-flex me-3">
                                            <FaRulerCombined></FaRulerCombined>
                                        </div>
                                        <h4>Grade 1 - 6: Elementary and Primary School Education (ELE)</h4>
                                    </div>

                                    <p className='fw-bold'>Kindergarten students will be offered:</p>
                                    <ol className=''>
                                        <li> To attend an Online Kindergarten readiness assessment session.</li>
                                        <li> To attend an Online Kindergarten readiness assessment session.</li>
                                    </ol>

                                    <p className='fw-bold'>Following the session, our highly qualified Kindergarten teachers will provide a written report on the following:</p>
                                    <ol className=''>
                                        <li>Social skills appropriate to the child's age.</li>
                                        <li>Social skills appropriate to the child's age.</li>
                                        <li>Social skills appropriate to the child's age.</li>
                                        <li>Social skills appropriate to the child's age.</li>
                                    </ol>

                                </div>
                            </div>
                        </div>

                        <div className="col px-5">
                            <div>
                                <div className="title">
                                    <div className='d-flex'>
                                        <div className="orange-icons fs-1 d-flex me-3">
                                            <FaInbox></FaInbox>
                                        </div>
                                        <h4> Grades 7 - 8: Middle School Education (MID)</h4>
                                    </div>

                                    <p className='fw-bold'>Kindergarten students will be offered:</p>
                                    <ol className=''>
                                        <li> To attend an Online Kindergarten readiness assessment session.</li>
                                        <li> To attend an Online Kindergarten readiness assessment session.</li>
                                    </ol>

                                    <p className='fw-bold'>Following the session, our highly qualified Kindergarten teachers will provide a written report on the following:</p>
                                    <ol className=''>
                                        <li>Social skills appropriate to the child's age.</li>
                                        <li>Social skills appropriate to the child's age.</li>
                                        <li>Social skills appropriate to the child's age.</li>
                                        <li>Social skills appropriate to the child's age.</li>
                                    </ol>

                                </div>
                            </div>
                        </div>

                        <div className="col px-5">
                            <div>
                                <div className="title">
                                    <div className='d-flex'>
                                        <div className="orange-icons fs-1 d-flex me-3">
                                            <FaStar></FaStar>
                                        </div>
                                        <h4>Grades 9 - 12: High School Education (HIG)</h4>
                                    </div>

                                    <p className='fw-bold'>Kindergarten students will be offered:</p>
                                    <ol className=''>
                                        <li> To attend an Online Kindergarten readiness assessment session.</li>
                                        <li> To attend an Online Kindergarten readiness assessment session.</li>
                                    </ol>

                                    <p className='fw-bold'>Following the session, our highly qualified Kindergarten teachers will provide a written report on the following:</p>
                                    <ol className=''>
                                        <li>Social skills appropriate to the child's age.</li>
                                        <li>Social skills appropriate to the child's age.</li>
                                        <li>Social skills appropriate to the child's age.</li>
                                        <li>Social skills appropriate to the child's age.</li>
                                    </ol>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>


            {/* -----------mid year application  */}
            <div className='px-5'>
                <h2 className='blueColor fw-bold text-center py-3'>Mid-Year Application</h2>

                <p className='fs-5'>Although the academic year starts in September, students are accepted throughout the year depending on the availability of places. Mid-Year admission for Grade 12 is not welcomed, as a considerable amount of examination work and credit accumulation will be required.</p>
            </div>


            {/* -----------conditional Admission */}
            <div className='px-5'>
                <h2 className='blueColor fw-bold text-center py-3'>Conditional Admission</h2>

                <p className='fs-5'>Students with conditional admission status, will receive a “Conditional Admission Letter” and are allowed to start their studies at the school as specified below:</p>

                <ol>
                    <li>Students not having valid English proficiency test results will be given conditional admission for one semester. Depending on the number of students, the school may offer an intensive English course to improve their English proficiency.  This does not exempt students from providing the required recognized English Proficiency test results by the end of the first semester. </li>


                    <li>Students who were not able to submit any of the required documents at the time of registration, will be required to submit those that are outstanding no later than 30 days before completing their studies, in order to graduate.</li>

                </ol>
            </div>

            {/* -----------re admission  */}
            <div className='px-5'>
                <h2 className='blueColor fw-bold text-center py-3'>Re-admission</h2>

                <p className='fs-5'>A student who voluntarily withdraws and does not register for two consecutive school semesters is required to apply for re-admission and to pay a re-admission fee, unless otherwise advised. Any student who is dismissed due to academic deficiency is not allowed to register for one full school year. Any student who wishes to be readmitted must re-apply as a new student. Students who have been granted an official leave of absence may resume their studies without applying for re-admission.</p>
            </div>



            {/* -----------student with special needs  */}
            <div className='px-5'>
                <h2 className='blueColor fw-bold text-center py-3'>Student with special needs</h2>

                <p className='fs-5'>At NIST we welcome children with a range of learning preferences, including students of determination (students with special education needs and disabilities), and students who are gifted and talented. We are committed to educating all students in a common learning environment with similar-aged peers. At NIST, diversity is taken seriously, and respectful relationships are continually promoted. All children participate fully in learning by way of adjustments and teaching strategies tailored to meet the needs of a diverse range of learners reflected in wider society.</p>
            </div>


            {/* -----------appeals  */}
            <div className='px-5'>
                <h2 className='blueColor fw-bold text-center py-3'>Appeals</h2>

                <p className='fs-5'>A prospective student may appeal a decision related to Admission through the Superintendent’s office.</p>
            </div>


        </div>
    );
};

export default Admissions;