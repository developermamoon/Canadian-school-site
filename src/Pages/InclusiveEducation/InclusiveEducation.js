import React from 'react';
import boximage from '../../Images/back2school.jpg'
import './InclusiveEduation.css'
import { FaDatabase, FaCrown, FaMedal, FaStar, FaChevronCircleRight } from "react-icons/fa";
import { GiCutDiamond } from "react-icons/gi";

const InclusiveEducation = () => {
    return (
        <div>
            <div className='blue-bg-round'>
                <div className='mx-5 px-md-5 py-4'>

                    <div className="row row-cols-1 row-cols-md-2">
                        <div className='col col-md-6'>
                            <div className='text-white fw-bold left-text'>
                                <h2 className='pb-3'>Commitment to inclusive Education</h2>
                                <p>At NIST, students are challenged to discover their God-given skills and talents in a team-centered environment. Teachers balance intellectual stimulation with skill development, teaching values for life beyond the online classroom. This approach allows our school to provide an inclusive education, which centers around all students.  NIST uses a world-renowned approach of cultivating unique skill sets to provide a quality education and growth of critical qualities required for success.  With an inclusive educational lens, the NIST community strives for excellence required to represent our school with integrity at all times.
                                </p>
                            </div>
                        </div>

                        <div className='col col-md-6 text-center'>
                            <img className='my-3 my-md-0 img-fluid' src={boximage} alt="" />
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <div className="container py-4">
                    <div className="row row-cols-1 row-cols-md-2">
                        <div className="col col-md-4">
                            <h3 className='mid-line'>How do we provide Inclusive Education?</h3>
                        </div>


                        <div className="col col-md-8">
                            <p className='right-text'>The following six principles are key to achieving the vision for an inclusive education system. These principles can guide and inform value-based and learner-centered decisions related to policies, practices and actions at every level of the education system.</p>
                        </div>
                    </div>
                </div>
            </div>

                {/*----------- six principles ------------*/}

            <div className='gray-bg'>
                <div className="container py-4">
                    <h2 className='text-center'>Six Principles</h2>
                    <div className="row row-cols-1 row-cols-md-2 py-4 g-5">

                        <div className="col px-5">
                            <div>
                                <div className="title">
                                    <div className='d-flex'>
                                        <div className="fs-1 d-flex me-3">
                                            <FaCrown className='icons'></FaCrown>
                                        </div>
                                        <div>
                                            <h4>Anticipate, value and support diversity and learner differences</h4>
                                            <p>Welcoming, caring, respectful and safe learning environments create a sense of belonging for all learners and their families.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        
                        <div className="col px-5">
                            <div>
                                <div className="title">
                                    <div className='d-flex'>
                                        <div className="fs-1 d-flex me-3">
                                            <FaMedal className='icons'></FaMedal>
                                        </div>
                                        <div>
                                            <h4>Encourage high expectations for all learners</h4>
                                            <p>Creating a culture of high expectations begins with an accessible curriculum and meaningful and relevant learning experiences. Educators and families act on the idea that, with the right instructional support, every learner not only can, but will succeed.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        
                        <div className="col px-5">
                            <div>
                                <div className="title">
                                    <div className='d-flex'>
                                        <div className="fs-1 d-flex me-3">
                                            <FaStar className='icons'></FaStar>
                                        </div>
                                        <div>
                                            <h4>
                                                Understand learners' strengths and needs</h4>
                                            <p>Meaningful data is constantly gathered and shared at all levels of the system – by teachers, families, schools, school authorities and the Ministry of Education – to understand and respond to the strengths and needs of individual learners.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        
                        <div className="col px-5">
                            <div>
                                <div className="title">
                                    <div className='d-flex'>
                                        <div className="fs-1 d-flex me-3">
                                            <FaChevronCircleRight className='icons'></FaChevronCircleRight>
                                        </div>
                                        <div>
                                            <h4>Remove barriers within learning environments</h4>
                                            <p>All education partners work together to remove barriers within the learning environment so that all learners are successful and can participate in the school community.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        
                        <div className="col px-5">
                            <div>
                                <div className="title">
                                    <div className='d-flex'>
                                        <div className="fs-1 d-flex me-3">
                                            <FaDatabase className='icons'></FaDatabase>
                                        </div>
                                        <div>
                                            <h4>Build capacity</h4>
                                            <p>Government, school and school system leaders, teachers, education professionals, families and community partners have ongoing opportunities, relationships and resources that develop, strengthen, and renew their understanding, skills and abilities to create flexible and responsive learning environments. Capacity building takes place at the personal, school and system levels.</p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        
                        <div className="col px-5">
                            <div>
                                <div className="title">
                                    <div className='d-flex'>
                                        <div className="fs-1 d-flex me-3">
                                            <GiCutDiamond className='icons'></GiCutDiamond>
                                        </div>
                                        <div>
                                            <h4>
                                                Collaborate for success</h4>
                                            <p>All education stakeholders, including school and system staff, families, community partners, post-secondary institutions, teacher preparation programs and government are committed to collaboration in supporting the success of all learners.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>


        </div>
    );
};

export default InclusiveEducation;