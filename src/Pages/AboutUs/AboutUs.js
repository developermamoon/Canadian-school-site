import React from 'react';
import './AboutUs.css'
import owner from '../../Images/man1.jpg'
import signature from '../../Images/signature.jpg'
import { GiCutDiamond } from "react-icons/gi";
import { FaDatabase, FaCrown, FaMedal, FaStar, FaChevronCircleRight, FaClock } from "react-icons/fa";

const AboutUs = () => {
    return (
        <div>
            
            {/*-------------top capsule  */}
            <div>
                <div className='aboutUs-bg-round'>
                    <div className='aboutUs-bg-color'></div>

                    <div className='show-front text-white fw-bold mx-5 px-md-5 py-4 '>
                        <h2 className='pb-3 fs-1 fw-bold'>About us</h2>
                        <p className='justify-text'>NSRIC International School in Toronto (NIST) is an accredited, inspected and a private institution under the Ministry of Education, Ontario, Canada and a subsidiary of NSRIC Inc. It offers one of the best on campus and online school programs (kindergarten to Grade 12 including home school education) to the international education domain. It is a world-renowned Canadian institution based in Ontario, Canada. NIST is specialized in delivering a high-quality Canadian school curriculum for students in the world. The school follows a strong and vibrant blended mixture of diverse curriculum called, “NIST Hybrid Curriculum (NHC)”. It offers a new integrated high quality and research-intensive Canadian Ministry of Education approved curriculum to fit the state-of-the-art school programs for our inland and global students. <br /> <br />

                        NIST provides online and on campus (our branches in different satellite locations) access to our programs for students at the kindergarten to Grade 12 levels, creating a seamless dissemination of knowledge from early childhood to graduating high school education in the world. NIST offers credits towards the Ontario Secondary School Diploma (OSSD) starting from Grade 9 to Grade 12. NIST is committed to graduating students all over the world with Canadian credentials to advance their admissions into prestigious universities of their choices in any university in Canada and in the world. The NIST online learning in Canada operates explicitly as an online blended education platform for any students to conveniently learn remotely in an institutional environment, without travelling, to achieve its vision and mission. NIST offers a virtual classroom model to engage students with their corresponding instructor(s) through live session(s) on a regular i.e., daily or weekly basis.
                        </p>
                    </div>


                </div>
            </div>

            {/*------------- Why choose us  ---------------------*/}

            <div>
                <div className="container py-4">
                    <div className="row row-cols-1 row-cols-md-2">

                        <div className="col col-md-4 d-flex align-items-center">
                            <div className=''>
                                <h3 className='fs-2 blueColor fw-bold'>Why Choose Us?</h3>
                            </div>
                        </div>


                        <div className="col col-md-8">
                            <p className='mid-line right-text justify-text'>NIST provides an elite Ontario education experience which is acknowledged as among the top education systems in the world. We are guided by a student-centered approach, which creates a unique learning environment, aligned with the Ontario K12 Curriculum, using a  modern-day inquiry-based pedagogy. We aim to connect life with learning by shaping self-directed learners and critical thinkers. Our students are educated to become global citizens, who understand their role in effecting positive change in the world around them.</p>
                        </div>
                    </div>
                </div>
            </div>


            {/*------------ Objectives  -------*/}
            <div className="container">
                <h3 className='fs-2 blueColor fw-bold my-4 ' id='objectives'>Objective</h3>
            </div>

            <div>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2">
                        <div className="col text-center">
                            <img className='w-50' src={owner} alt="" />
                        </div>
                        <div className="col py-3">
                            <h1 className='fs-1 blueColor fw-bold'>Learning is the Power</h1>
                            <p>
                                Every human being is fortunate with inborn talents and the cognitive power of creativity. It is all about learning by applying these favors toward thriving in real life.  Let us start where we are, use what we have, and do what we can - called real victory.
                            </p>

                            <img className='pt-3 signature-img' src={signature} alt="" />
                            <h5 className='fw-bold blueColor unselectable'>Prof. Enamul Hossain</h5>
                            <p className='blueColor poppins fw-bold unselectable'>Founder of NIST & NSRIC Inc.</p>
                        </div>
                    </div>
                </div>
            </div>


            {/*------------ Who we are  -------*/}
            <div>
                <div>
                    <div className="container py-4 my-4">
                        <div className="row row-cols-1 row-cols-md-2">

                            <div className="col col-md-5">
                                <div className=''>
                                    <h3 className='fs-1 blueColor fw-bold' id='who-we-are'>Who We Are</h3>
                                </div>
                            </div>


                            <div className="col col-md-7">
                                <div className="row double-column justify-text">
                                    <h3 className='fs-4 blueColor fw-bold poppins'>
                                        At NSRIC and NIST, disseminating <br /> knowledge is our core value.</h3>
                                <div className="col">
                                        <p>The Ontario Education System, of which NIST is a part, believes that its moral purpose is to ensure that all children are educated to high intellectual levels. As twenty-first-century global citizens, we have inherited a world which demands proficiency in and adaptability to its dynamic nature, whether it would be mastery of high efficiency operating technological platforms or intricate webs of knowledge and information transferal. The bar has been set</p>
                                </div>
                                <div className="col">
                                        <p>very high when it comes to understanding the world we live in. At NIST, we believe that the way forward is through change and adaptability, both of which can only come with the proper education, not only in terms of content but also in terms of the medium through which the content is delivered. Our intent, therefore, is to bring quality education to all our students. This includes support with technology to facilitate online participation.</p>
                                </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/*------------ Who we are  -------*/}
            <div>
                <div>
                    <div className="container py-4 my-4">
                        <div className="row row-cols-1 row-cols-md-2">

                            <div className="col col-md-5">
                                <div className=''>
                                    <h3 className='fs-1 blueColor fw-bold' id='equivalency'>Equivalency</h3>
                                </div>
                            </div>


                            <div className="col col-md-7">
                                <div className="double-column justify-text">
                                    <p>
                                        It is noted that high school includes Grades 9 to 12 in the Canadian education system. Grades 9 to 10  are called Secondary School Certificate (SSC) and Grades 11 to 12  are called Higher Secondary Certificate (HSC) in some countries. In the Canadian system, O-Level is  roughly equivalent to Grade 11 and A-Level is roughly equivalent to Grade 12 or higher.  However, at a minimum, successful completion of the General Certificate of Education (GCE) with five O-Level subjects in addition to at least two A-Level subjects are required for a direct admission to a Canadian college or university. <br />
                                        For students with an Associate of Science (AS) Level, four AS-Level subjects are required as an equivalent to five O-Level and two A-Level subjects to get admission in a Canadian college or university. For students with an AS-Level, four AS-Level subjects (i.e., equivalent to five O-Level and two A-Level subjects) are needed to get admission in a Canadian college or university. In other countries such as the Caricom region, O-Level is called CXC and A-Level is called CAPE.
                                    </p>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/*------------ inclusive education  -------*/}
            <div>
                <div className='gray-bg'>
                    <div className="container py-4 my-4">
                        <div className="row row-cols-1 row-cols-md-2">

                            <div className="col col-md-5">
                                <div className=''>
                                    <h3 className='fs-1 blueColor fw-bold' id='equivalency'>
                                        Inclusive Education</h3>
                                </div>
                            </div>


                            <div className="col col-md-7">
                                <div className="double-column justify-text">
                                    <p>

                                        At NIST, students are challenged to discover their God-given skills and talents in a team-centered environment. Teachers balance intellectual stimulation with skill development, teaching values for life beyond the online classroom. This approach allows our school to provide an inclusive education, which centers around all students. NIST uses a world-renowned approach of cultivating unique skill sets to provide a quality education and growth of critical qualities required for success. With an inclusive educational lens, the NIST community strives for excellence required to represent our school with integrity at all times.
                                    </p>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*------------- How do we provide Inclusive Education?  ---------------------*/}

            <div>
                <div className="container py-4">
                    <div className="row row-cols-1 row-cols-md-2">

                        <div className="col col-md-4 d-flex align-items-center">
                            <div className=''>
                                <h3 className='fs-2 blueColor fw-bold'>How do we provide Inclusive Education?</h3>
                            </div>
                        </div>


                        <div className="col col-md-8">
                            <p className='mid-line right-text justify-text'>The following six principles are key to achieving the vision for an inclusive education system. These principles can guide and inform value-based and learner-centered decisions related to policies, practices and actions at every level of the education system.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/*----------- six principles ------------*/}

            <div className='pink-bg'>
                <div className="container py-4">
                    <h2 className='text-center'>Six Principles</h2>
                    <div className="row row-cols-1 row-cols-md-2 py-4 g-5">

                        <div className="col px-5">
                            <div>
                                <div className="title">
                                    <div className='d-flex'>
                                        <div className="purple-icons fs-1 d-flex me-3">
                                            <FaCrown></FaCrown>
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
                                        <div className="purple-icons fs-1 d-flex me-3">
                                            <FaMedal></FaMedal>
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
                                        <div className="purple-icons fs-1 d-flex me-3">
                                            <FaStar></FaStar>
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
                                        <div className="purple-icons fs-1 d-flex me-3">
                                            <FaChevronCircleRight></FaChevronCircleRight>
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
                                        <div className="purple-icons fs-1 d-flex me-3">
                                            <FaDatabase></FaDatabase>
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
                                        <div className="purple-icons fs-1 d-flex me-3">
                                            <GiCutDiamond></GiCutDiamond>
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


            {/*------- last part  */}

            <div className="container py-5">
                <div className="row">
                    <div className="col px-5">
                        <div>
                            <div className="title">
                                <div className='d-flex'>
                                    <div className="orange-icons fs-1 d-flex me-3">
                                        <FaCrown></FaCrown>
                                    </div>
                                    <div>
                                        <h4>
                                            Learn From Industry Leaders</h4>
                                        <p>Our professionals and dedicated teams work ‘day and night' to reach out to every child with quality education. Our diverse and skilled educators, based on their expertise, are thoroughly proficient in effectively delivering the Ministry of Education's mandate of required course learning outcomes, while also taking pedagogy to a new level by specializing in techniques which can confer the kind of technological know-how demanded by today's global community. Our values are based on integrity, professionalism, transparency, and dedication.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col px-5">
                        <div>
                            <div className="title">
                                <div className='d-flex'>
                                    <div className="orange-icons fs-1 d-flex me-3">
                                        <FaClock></FaClock>
                                    </div>
                                    <div>
                                        <h4>
                                            Learn at Your Own Pace</h4>
                                        <p>Students learn at their own pace, specialized for optimal learning and growth. Online classes offer the opportunity for faster learners to work at their own pace and slow learners to take the time to make sure they understand the material. NIST offers blended (pre-recorded video clips plus virtual sessions) course(s) offerings. This mode of communication will enhance the learning process of our students and audiences.</p>
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

export default AboutUs;