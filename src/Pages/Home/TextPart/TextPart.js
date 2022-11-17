import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LearnMoreCard from '../LearnMoreCard/LearnMoreCard';
import SecondCarouselPart from '../SecondCarouselPart/SecondCarouselPart';
import './TextPart.css'
import { FaAngleDoubleRight } from "react-icons/fa";

const TextPart = () => {
    return (
        <div>
            <div className="container">

                <div className="visionAndMission">

                    <div className="row row-cols-1 row-cols-md-2 mt-5">

                        <div className="col col-md-3 side-border text-center text-md-start">
                            <span className='our'>Our</span> <br /> <span className='bigText'>Vision</span> <br />
                            <span className='our'>Our</span> <br /> <span className='bigText'>Mission</span> <br />
                        </div>


                        <div className="col col-md-9 d-flex align-items-center text-row">
                            <div>
                                <p>To provide high quality education available to all children of our global community, while creating a positive, tolerant and sustainable learning environment as a foundation for life-long learning in our diverse world.</p>

                                <p>
                                    To prepare children to realize their ambitions for success in their respective careers in an environment where they are encouraged to respect ethnic, racial, religious, and socio-economic diversities within their own communities and in the wider global context.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="row row-cols-1 row-cols-md-2 mt-5">

                        <div className="col col-md-3 side-border text-center text-md-start ">
                            <div><span className='our'>Our</span> <br /> <span className='bigText'>Values</span> <br /></div>
                        </div>


                        <div className="col col-md-9 d-flex align-items-center text-row">
                            <div>
                                <p>The values held at NIST are established by using a holistic approach to learning; one in which the essential elements of achieving human excellence - in an intellectual, social-emotional, and physical context - are instilled in our students starting at the earliest stages. We aim to raise students who demonstrate impeccable character, leadership skills, along with advanced academic skills and exemplary citizenship.</p>

                                <p>
                                    Our core values as part of our world-class program, aligned with the Ontario program of study in Canada:
                                    <ol>
                                        <li>Respect</li>
                                        <li>Integrity</li>
                                        <li>Excellence</li>
                                        <li>Professionalism</li>
                                        <li>Tolerance</li>
                                    </ol>
                                </p>
                            </div>
                        </div>
                    </div>


                    {/* message from founder */}
                    <div className='mt-5 founder-text p-3 p-md-2'>
                        <p className='bigText text-center text-md-start'>Message from Founder</p>
                        <p className="subtitle">
                            “Education and dissemination of knowledge are all about empowering our children, youth and people to offer a sustainable life span” - Prof. M Enamul Hossain.
                        </p>
                        <span className="small-text">
                            <p>
                                It is my great pleasure to introduce our NSRIC International School in Toronto (NIST) to you. NIST is accredited and inspected Private School in Ontario, Canada, operated by NSRIC Inc. It offers a new integrated high-quality, and research-intensive Canadian Ministry of Education approved curriculum to fit the state-of-the-art programs for our local and global students. NIST works relentlessly to create an evolving and dynamic curriculum. It combines the best educational practices from around the world to build purposeful and impactful learning programs. The school offers an Ontario Secondary School Diploma (OSSD) degree certificate after Grade 12 graduation. NIST provides a seamless education at kindergarten to grade 12 schooling, including Homeschool education.
                            </p>
                            <p>NIST is committed to creating a healthy environment as a learning workplace for everyone. The primary aim of NIST is to teach our children not just what to learn but how to learn. So, welcome to the NIST, the place where we build leaders through disseminating knowledge. Our vision is to provide high-quality education for our global community while creating a sustainable environment as a foundation for lifelong learning in our diverse world. This commitment is not easy to accomplish. However, our blended course curriculum toward OSSD, learning and teaching philosophy along with our highly qualified teachers will be the vehicle to keeping the attention and retention of our student’s minds. These practices will be supporting them with the flow of course delivery and virtual sessions in-progress. NIST leadership and the entire team are very much capable and committed to fulfilling our vision and mission. The school reflects our vision to become a Centre of Excellence comparable to the best in the world for producing leaders in education, technology, innovation, entrepreneurship, management and politics.</p>
                            <p>
                                NIST is different from other schools in several ways. One of the unique features is the inclusion of the concept of integrating research and cognitive skills. To realize the vision, we stand committed to providing appropriate guidance, leadership, faculty, virtual classes and alliances with leading schools in the world. NIST's teachers and parents work together to build a safe and sustainable environment that allows each child to excel.
                            </p>
                            <p>I encourage all to join our community as we strive towards a lifelong learning experience. I invite you to help us make a difference to serve humanity in the area of education.</p>
                            <p>Sincerely yours,</p>
                            <p>
                                Prof. M. Enamul Hossain <br />
                                Founder of NIST <br />
                                CEO and President <br />
                                NSRIC Inc. <br />
                            </p>
                        </span>
                    </div>

                    {/* Learn More About  */}
                    <p className='bigText text-center my-4'>Learn more about:</p>

                </div>

            </div>

            {/* card */}
            <div className='mx-2'>
                <LearnMoreCard></LearnMoreCard>
            </div>

            {/* Second Carousel Part  */}
            <SecondCarouselPart></SecondCarouselPart>

            {/* Key Message Part  */}
            <p className='bigText text-center my-4'>Key messages</p>

            {/*-------success Story -----------*/}
            <p className='bigText text-center my-4'>Success Stories</p>
            <div className='d-flex justify-content-center'>
                <iframe width="1100" height="600" src="https://www.youtube.com/embed/C_oiIq5epWE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            {/* News */}
            
            <div className="container">
                <p className='bigText text-center my-3'>News</p>
                <h2 className='purple'>Admissions are open</h2>
                <h3 className='blue'>Become a proud student with NIST, Enrollment is in progress <br />Fill out the online form and receive all the informative documents by clicking below:</h3>
                <div className='text-center mt-3'><Button>ENROLL NOW</Button></div>
            </div>

            {/*----------------- card  -----------------*/}
            <div className="container my-5">
                
                <div className="row row-cols-1 row-cols-md-3 gap-4 gap-md-0">

                    <div className='col'>
                        <div className='cards'>
                            <h5>NIST School Programs</h5>
                            <p>NIST School Programs The curriculum for every class is designed based on the Ministry of Education, Ontario, Canada. The academic program of NIST includes the</p>
                            <Link ><small>READ MORE <FaAngleDoubleRight></FaAngleDoubleRight></small></Link>
                        </div>
                    </div>

                    <div className='col'>
                        <div className='cards'>
                            <h5>Inclusive Education</h5>
                            <p>Commitment to Inclusive Education At NIST, students are challenged to discover their God-given skills and talents in a team-centered environment. Teachers balance intellectual stimulation with</p>
                            <Link ><small>READ MORE <FaAngleDoubleRight></FaAngleDoubleRight></small></Link>
                       </div>
                    </div>
                    
                    <div className='col'>
                        <div className='cards'>
                            <h5>Admission Process Guideline</h5>
                            <p>Admissions at NIST Get enroll at NIST which facilitates blended (i.e., pre-recorded video clips, virtual classroom) course offering. Is the NIST for me? As a Is the NIST for me?</p>
                            <Link ><small>READ MORE <FaAngleDoubleRight></FaAngleDoubleRight></small></Link>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default TextPart;