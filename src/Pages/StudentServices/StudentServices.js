import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../Images/StudentServiceImages/student-service-image1.png'
import img2 from '../../Images/StudentServiceImages/student-service-image2.png'
import img3 from '../../Images/StudentServiceImages/student-service-image3.png'
import img4 from '../../Images/StudentServiceImages/student-service-image4.jpg'
import img5 from '../../Images/StudentServiceImages/student-service-image6.png'
import img6 from '../../Images/StudentServiceImages/student-service-image7.png'
import img7 from '../../Images/StudentServiceImages/student-service-image8.png'

const StudentServices = () => {
    return (
        <div>

            {/* top capsule  */}
            <div>
                <div className='admission-bg-round'>
                    <div className='admission-bg-color'></div>

                    <div className='show-front text-white fw-bold mx-5 px-md-5 py-4'>
                        <h2 className='pb-3 fs-1 fw-bold'>Student Success Center</h2>
                        <p className='pb-5'>NIST offers a multitude of opportunities for students to <br /> achieve a balanced approach to learning, both inside and <br /> outside the online classroom.
                        </p>
                    </div>
                </div>
            </div>


            {/*------------- Student services  ---------------------*/}

            <div>
                <div className="container py-4">
                    <div className="row row-cols-1 row-cols-md-2">

                        <div className="col col-md-4 d-flex align-items-center">
                            <div className=''>
                                <h3 className='fs-1 blueColor fw-bold'>Student Services</h3>
                            </div>
                        </div>


                        <div className="col col-md-8">
                            <p className='mid-line right-text justify-text'>NIST offers a multitude of opportunities for students to achieve a balanced approach to learning, both inside and outside the classroom activities. All activities are offered through different clubs. Our student services offerings range from student clubs, music, art, academic tutoring, and even internships in the workplace.  These services will allow students to showcase their abilities while learning critical skills to carry on throughout their NIST tenure and beyond.

                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/*------------- Students club  ---------------------*/}
            <div>
                <div className="container py-4">
                    <h2 className='text-center blueColor fw-bold'>Students Club</h2>

                    <div className="text-center my-4">
                        <img className='img-fluid' src={img1} alt="" />
                    </div>


                        <div className="">
                        <p className='right-text justify-text'>At NIST, students have a number of different opportunities to explore their many interests and talents. Club time at all levels allows students to acquire and refine skills that they may not otherwise have the opportunity or time to do during curriculum studies. It also presents an opportunity for leadership development and a respite from academics, as clubs are not graded. <br /> <br />

                        <b>Our student clubs:</b>
                        </p>

                        <ul>
                            <li>Develop school advocacy by spending time with students and teachers with similar interests</li>
                            <li>Provide individual offerings for Elementary, Middle and High School</li>
                            <li>Learning goals and skills developed vary by club</li>
                            <li>Some activities are student-led, others teacher-led</li>
                        </ul>
                        <p>Our students will learn more about the clubs they can join once enrolled at NIST.</p>
                        </div>
                    </div>
            </div>

            {/*------------- Arts and music club  ---------------------*/}
            <div>
                <div className="container py-4">
                    <h2 className='text-center blueColor fw-bold'>Arts and Music Club</h2>

                    <div className="text-center my-4 d-flex justify-content-center">
                        <img className='img-fluid' src={img2} alt="" />
                    </div>


                    <div className="">
                        <p className='right-text justify-text'>NIST Arts and Music Club is a place where kids can engage themselves to start exploring the creative arts.This effort can be an art from their own creativity or under a mentorship program.In addition, it can be one which they have been curious about trying or something completely new to them.Each club component offers multiple programs and kids creative classes including 6-week sessions, drop-ins and school break options.Every club component incorporates conversation, interaction and engaging content so each child feels seen, heard and connected every time. <br /> <br />

                        <b>Why Arts & Music?</b> <br />
                        <p>Our Arts & Music Clubs provide families with fun options to keep kids active and inspired. Parents love this type of activities when their kids join these clubs. Because they are not just sitting passively in front of a screen. Instead, they are moving, laughing, creating and engaging with peers and teaching artists alike. These clubs offer a variety of programs in the creative arts that may no longer be available in school. Kids are encouraged to dip into as many club components as they like and explore the arts freely.</p>

                        <b>The Arts & Music Clubs are:</b>
                        </p>

                        <ul>
                            <li>Live online programs in the creative arts</li>
                            <li>Interactive. Kids build community, friendships and confidence</li>
                            <li>Taught by professional teaching artists who bring their unique talent to each class they teach</li>
                            <li>Unique and diverse with creative spaces in singing, art, dance, musical theater, movement, acting, strumming and community</li>
                            <li>A safe, secure environment where kids are comfortable expressing themselves creatively, taking artistic risks and being themselves</li>
                        </ul>

                        <p>These clubs offer a variety of unique, live online programs for kids to explore singing, dance, acting, musical theater, ukulele, movement and more! </p>
                    </div>
                </div>
            </div>
            

            {/*------------- Online Tutoring Services Club  ---------------------*/}
            <div>
                <div className="container py-4">
                    <h2 className='text-center blueColor fw-bold'>Online Tutoring Services Club</h2>

                    <div className="text-center my-4 d-flex justify-content-center">
                        <img className='img-fluid' src={img3} alt="" />
                    </div>


                    <div className="">
                        <p className='right-text justify-text'>In addition to providing quality teaching and learning environment, NIST offers tutoring services to the slow learners and students who need additional care.This service is provided by our in-house student support coordinator.Support is offered in subject areas such as <b>(i) computer programming, (ii) English, (iii) French, (iv) Mathematics and (v) Science</b> for all grades.NIST is pleased to offer this additional support to students who require additional help with their work.For more information and to enroll in this program, please <Link to='/tutoring-program' className='green-color-link fw-bold'>Click Here</Link>.<br /> <br />
                        </p>

                        <b>How Does It Work?</b> <br />
                        <p>Students have access to online tutoring via the secure learning environment. When a student needs assistance, they simply type a question in the chat box or register the tutoring assistant services by <Link to='/tutoring-program' className='green-color-link fw-bold'>Click Here</Link>. Further, students can upload a file or image of the assignment into the chat box to help explain their question. Students are also able to schedule a more in-depth meeting. Student learning will be facilitated through focused questioning rather than merely providing the student with answers. Students will not be permitted to utilize the service during scheduled tests or examinations.</p>

                        <b>Can a student be a tutor?</b> <br />
                        <p>The answer is yes! Students who achieve  higher grades and demonstrates themselves as a quick learner will be given the chance to be an online tutor at NIST. Staff at student success center will contact the potential student to become a tutor. </p>

                    </div>
                </div>
            </div>


            {/*------------- Virtual Games Club  ---------------------*/}
            <div>
                <div className="container py-4">
                    <h2 className='text-center blueColor fw-bold'>Virtual Games Club</h2>

                    <div className="text-center my-4 d-flex justify-content-center">
                        <img className='img-fluid' src={img4} alt="" />
                    </div>


                    <div className="">
                        <p className='right-text justify-text'>The main objective of this facility is to prepare students for critical thinking. It will also create interest in computer coding and gaming. Virtual gaming opportunities introduce students with the future steps in the world of gaming technologies and giving them fun of traditional gaming. This club is created to enhance our student’s memory, brain’s speed and concentration, building skills for future careers and to improve the ability of multitasking in a playful way.<br /> <br />
                        </p>

                    </div>
                </div>
            </div>


            {/*------------- Community Services Club  ---------------------*/}
            <div>
                <div className="container py-4">
                    <h2 className='text-center blueColor fw-bold'>Community Services Club</h2>

                    <p className='text-center my-3'><b>40-hour community engagement program [student can start this community program at any time in any academic year (G9-12)]</b></p>

                    <p>As part of the requirements to obtain the Ontario Secondary School Diploma (OSSD) certificate, high school students are expected to complete 40 hours of community services. The Community Services club works with different entrepreneurs to help students  toward completing the OSSD requirement of community services. </p>

                    <div className="text-center my-4 d-flex justify-content-center">
                        <img className='img-fluid' src={img5} alt="" />
                    </div>


                    <p className='my-3'><b>Community Involvement Requirements</b></p>

                    <p>Students entering grade 9 must complete 40 hours of volunteer work as one of the Ministry requirements for their high school diploma. The aim is to encourage students to become actively involved in making positive contributions to their community. Students are encouraged to select many different community involvement activities in consultation with their parents. Selection of activities should take into account the age, maturity and ability of the student, the location and environment of the proposed activity, and the need for any special training, equipment and preparation. The safety of the student is paramount.<br /> <br />

                    Students must complete their community involvement activities while in Grades 9 – 12. The community involvement is completed outside of classroom hours, and may not entail paid employment. Students can now begin accumulating their hours during the summer prior to entering Grade 9. Students are encouraged to complete the 40 hours of community involvement as early as possible in high school; ideally by the end of Grade 10. Ministry guidelines have established eligible and ineligible activities for the community involvement requirement. Students and parents must follow these guidelines. <br /> <br /> <br />

                    Student Community Involvement recognizes student participation and accomplishments of a non-academic nature. It is a record of student involvement in School-sanctioned and affiliated activities and experiences including, but not limited to: out of classroom, social, athletic, leadership, service, professional and educational experiences.
                    </p> <br />

                    <p className='my-3'><b>Student involvement activities and experiences are classified under the following broad areas:</b></p>

                    <ol>
                        <li>Campus Activities and Organizations (e.g. sporting activities, religious societies)</li>
                        <li>Student Leadership (e.g. student guild positions, official leadership positions in student clubs)</li>
                    </ol>

                    <p>Involvement in activities and experiences provide students with intentional and meaningful learning outcomes and competencies. Student learning domains and learning outcomes/competencies are broadly categorized as follows:</p>

                    <ol>
                        <li>Leadership Skills Development</li>
                        <li>Intrapersonal Development</li>
                        <li>Interpersonal Competence</li>
                        <li>Knowledge Development and Application</li>
                        <li>Novel and Adaptive Thinking</li>
                        <li>Humanitarianism and Civic Engagement</li>
                        <li>Any other learning outcomes and competencies as determined by Student Support Services such as Creativity and Innovation.</li>
                    </ol>


                    <p>Issuance of the Notification of Planned Community Involvement Activities </p>

                    <ol>
                        <li>An official Student Notification of Planned Community Involvement Activities form will be issued to the student upon request. The school’s stamp shall be affixed to the Notification of Planned Community Involvement Activities form and signed by the Principal.</li>

                        <li>A student copy of the Notification of Planned Community Involvement Activities form is available electronically for student viewing and information purposes only.</li>

                        <li>The School will provide a community hours form to fill out and get signed by the manager of the place where the pupil has done community work and handed it to the School for the record. Before the end of high school, community hours will be completed and recorded on report cards. It is also uploaded on Learning Management System (LMS) for students’ record.</li>
                    </ol>

                </div>
            </div>

            {/*------------- Student Counselling Club  ---------------------*/}
            <div>
                <div className="container py-4">
                    <h2 className='text-center blueColor fw-bold'>Student Counselling Club</h2>

                    <div className="text-center my-4 d-flex justify-content-center">
                        <img className='img-fluid' src={img6} alt="" />
                    </div>


                    <div className="">
                        <p className='right-text justify-text'>Student counselling club offers sustainable counselling services to the students for supporting the mental health of our students. So we are offering/providing student counselling. It assist our students to enhance personal growth and self-actualization. Strengthen skills in dealing with psychological distress and buildup healthy emotion regulation.<br />
                        </p>
                        <p><b>We work to help our students succeed academically and socially giving them emotional guidance and help them to plan for their better future plan and career.</b></p>

                    </div>
                </div>
            </div>



            {/*------------- Internship Club  ---------------------*/}
            <div>
                <div className="container py-4">
                    <h2 className='text-center blueColor fw-bold'>Student Counselling Club</h2>

                    <div className="text-center my-4 d-flex justify-content-center">
                        <img className='img-fluid' src={img7} alt="" />
                    </div>


                    <div className="">
                        <p className='right-text justify-text'>Our student internship, or cooperative education, programs are designed to give hands-on work experience to our senior students.  This program counts towards cooperative education credits in our high school program, by placing senior students into a working environment, to give them real world, hands-on experience in a job setting. <br /> <br />
                        Students work for 220 hours for 2 periods in the schedule for 2 credits. Cooperative education credits are linked to the courses the student is taking, to allow transfer between the classroom and workplace. Students are responsible for providing their own transportation to the job site. Evaluation is a combination of the cooperative education teacher and the placement supervisor. 
                        </p>
                        <p><b>Interested students to send their inquiries to the high school course coordinator and vice-principal.</b></p>

                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default StudentServices;