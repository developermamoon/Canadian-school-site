import React from 'react';
import { Link } from 'react-router-dom';
import hiringImage from '../../Images/hiring.png'

const Careers = () => {
    return (
        <div>
            {/*------------ capsule  --------------*/}
            <div className='blue-bg-round'>

                <div className='blue-bg-round-color'></div>

                <div className='mx-5 px-md-5 py-4 '>
                    <div className="row row-cols-1 row-cols-md-2 d-flex justify-content-center align-items-center">

                        <div className='col col-md-6 show-front'>
                            <div className='text-white fw-bold justify-text'>
                                <h2 className='pb-3'>Careers</h2>
                                <p>Join the NIST Family!
                                </p>
                            </div>
                        </div>

                        <div className='col col-md-6 text-center'>
                            <Link to='/student-registration'><img className='my-3 my-md-0 w-50 img-fluid' src={hiringImage} alt="" /></Link>
                        </div>
                    </div>
                </div>
            </div>


            {/*--------------- lower part-----------------  */}
            <div className="container my-5 rounded boxShadow">
                <div className="row admission-req">
                    <div className="col bg-white px-md-3">

                        <p className='fw-bold fs-5 py-3'>Are you a dedicated educator and looking for opportunities at NSRIC and NIST? </p>
                        <p className='justify-text'>NSRIC and NIST is for you where you can reshape your career in a dynamic team of teachers and trainers in a caring and engaging environment.  NIST is always accepting resumes from the qualified OCT (Ontario Certified Teachers) teachers. You can apply anytime at NSRIC and NIST by clicking the links below:
                        </p>

                        <ol>
                            <li>If you are interested working as a NIST family member, click here to:</li>

                            <ol type='i' className='fw-bold'>
                                <Link className='green-color-link' to='/teacher-registration'> <li>Become a teacher</li></Link>
                                <a className='green-color-link' href='https://nsric.ca/affiliate_program/' target='_blank'> <li>Become an affiliate (marketing)</li></a>
                                <Link className='green-color-link' to='/student-registration'> <li>Become a student</li></Link>
                            </ol>
                        </ol>

                        For more information, please <Link to='/' className='green-color-link fw-bold'>click here</Link>.


                        <ol>
                            <li> If you are interested in working as an NSRIC family member, click here to:</li>

                            <ol type='i' className='fw-bold'>
                               
                                <a className='green-color-link' href='https://nsric.ca/instructor-registration/' target='_blank'> <li>Become an instructor (marketing)</li></a>
                                <a className='green-color-link' href='https://nsric.ca/affiliate_program/' target='_blank'> <li>Become an affiliate (marketing)</li></a>
                                <a className='green-color-link' href='https://nsric.ca/student-registration/' target='_blank'> <li>Become a student</li></a>
                                
                            </ol>
                        </ol>
                        For more information, please <a className='green-color-link fw-bold' href='https://nsric.ca/' target='_blank'>click here</a> <br /> <br />

                        <p>We review the candidates in our teacher candidacy pool to determine whether any applicants possess the necessary skills and qualifications. Our team will reach out to the potential candidates. We encourage all candidates to apply for the position. If you have any questions, please contact at <a className='green-color-link' href="info@nistonline.ca">info@nistonline.ca</a>.</p>

                        <p className='pb-3'>If you are interested to join us, you can also send your resume and cover letter at <a className='green-color-link' href="info@nistonline.ca">info@nistonline.ca</a>.  We thank all applicants for their interest; however, only shortlisted candidates will be contacted. If you are not contacted, please be advised that we will keep your resume on file for future consideration. You can always be an instructor at NSRIC by <a className='green-color-link fw-bold' href="https://nsric.ca/instructor-registration/">clicking here</a></p>





                    </div>
                </div>
            </div>
        </div>
    );
};

export default Careers;