import React from 'react';
import { Link } from 'react-router-dom';
import './InternationalStudents.css'

const InternationaStudents = () => {
    return (
        <div className=''>
            {/*-------------top capsule-----------*/}
            <div>
                <div className='admission-bg-round'>
                    <div className='admission-bg-color'></div>

                    <div className='show-front text-white fw-bold mx-5 px-md-5 py-4'>
                        <h1 className='pb-3 fs-1 fw-bold'>
                            International Students</h1>
                        <p className='pb-5 fs-5'>Anybody seeking a quality education can attend the NSRIC <br /> International School in Toronto (NIST) from anywhere in the world!
                        </p>
                    </div>
                </div>
            </div>

            {/*------------- global students -----------*/}
            <div className="container pt-5 pb-4">
                <h1 className='blueColor fw-bold'>Global Students</h1>
                <p className='fs-5'>Anybody seeking a quality education can attend the NSRIC International School of Toronto (NIST) from anywhere in the world!  Students from across the globe choose NIST in order to earn individual credits or work towards obtaining their high school diplomas.  The Ontario Secondary School Diploma (OSSD) is accepted by colleges and universities around the world and can be earned completely online with NIST. <br /> <br />
                <b>Below are answers to some frequently asked questions regarding international students:</b>
                </p>
            </div>


            {/*------------- student key benefits and key feature -----------*/}
            <div className="container">
                <div className='ps-3'>
                    <h1 className='blueColor fw-bold'>Student’s Key Benefits</h1>
                    <ul>
                        <li>School admission facilities from Kindergarten (KG) to Grade 12</li>
                        <li>Opportunity to get admission to a Canadian school</li>
                        <li>Obtaining an Ontario secondary school diploma (OSSD) certificate</li>
                        <li>Opportunity to travel by family member(s) to Canada with student upon visa approval</li>
                        <li>Facilities for both synchronous and asynchronous class environments</li>
                        <li>Canadian ministry of education school board identification number (ID)</li>
                        <li>Up to 60% off on tuition fees by offering scholarship for all students</li>
                        <li>Free counseling on student admission, mental health and special need  </li>
                    </ul>
                </div>

                <div className='ps-3'>
                    <h1 className='blueColor fw-bold'>Key Features</h1>
                    <ul>
                        <li>Following Canadian curriculum </li>
                        <li>The Canadian government-approved school </li>
                        <li>Schooling in Canada with parental supervision </li>
                        <li>Opportunity of parents to accompany with children  </li>
                        <li>Schooling in the local branch(s)  </li>
                        <li>Schooling in online and on-campus  </li>
                        <li>The pathway toward permanent resident (PR) in Canada </li>
                        <li>No formal exam up to G8, only assessments  </li>
                        <li>No need for IELTS, TOEFL etc. </li>
                        <li>100% tuition fees waiver in case of parents’ expiration </li>
                        <li>50% tuition fees waiver in case of parent’s permanent disability </li>
                        <li>100% transparency and hassle-free system </li>
                        <li>Online admission facilities </li>
                        <li>100% secure online fee payment facilities </li>
                        <li>Co-curricular activity </li>
                        <li>Special opportunity to learn religion  </li>
                        <li>Fun and activity-based preschool program (i.e., KG and play group)</li>
                    </ul>
                </div>
            </div>

            {/*--------------- have questions-----------------  */}
            <div className="container my-5 rounded boxShadow">
                <div className="row admission-req">
                    <div className="col bg-white px-md-3">
                        <h2 className='py-3 blueColor fw-bold'>Have Questions?</h2>

                        <p className='fw-bold'>Who are international students?</p>
                        <p className='justify-text'>At NIST, students are considered international students if they are neither Canadian citizens nor permanent residents in Canada. If you are registering from an address outside of Canada and (1) are a Canadian citizen, or (2) have a permanent residence in Canada, you are not considered an international student.
                        </p>

                        
                        <p className='fw-bold'>Do I need a student visa or study permit to register with NIST?</p>
                        <p className='justify-text'>No, students are not required to obtain student visas or study permits to complete courses with NIST. Our courses are completely accessible online, and the diploma requirements (i.e. community involvement hours and the Ontario Secondary School Literacy Test) can be completed in any country. <br /> <br />

                            If you do plan to come to Canada to study at any point, please contact <a className='green-color-link' href='https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit.html'>Citizenship and Immigration Canada</a> for more information on entrance and residency permits and visas. This is not required by NIST, and NIST does not facilitate or offer any student exchange programs.

                        </p>


                        <p className='fw-bold'>As an international high school student, can I take only a few courses with NIST?</p>
                        <p className='justify-text'>If you would like to take a few courses with NIST for any reason, you can begin at any time.You can get started by reviewing the available courses.You will need to determine if each course you would like to take has a prerequisite. <br /> <br />

                        If your selected course has a prerequisite and you have previously completed courses outside of Ontario, please contact our course coordinator to inquire about our Prerequisite Waiver Application.  You will then be asked to submit the waiver application form along with your supporting documentation and photo ID prior to registering.

                        <br /> <br />

                        Once you receive approval from the NIST course coordinator, you can proceed with registering online. <br /> <br />
                        
                        If you have any other questions about course selection obtaining the OSSD, please reach out to our course coordinator or vice-principal.

                        </p>

                        

                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default InternationaStudents;