import React from 'react';
import { Link } from 'react-router-dom';
import  ElementarySchool2  from '../../Images/Kindergarten-5.png'

const TutionFees = () => {
    return (
        <div className='admission-bg'>

            {/* top capsule  */}
            <div>
                <div className='admission-bg-round'>
                    <div className='admission-bg-color'></div>

                    <div className='show-front text-white fw-bold mx-5 px-md-5 py-4'>
                        <h2 className='pb-3 fs-1 fw-bold blueColor'>Tuition Fees and <br /> Scholarships</h2>
                        <p className='pb-5'>We provide one of the competitive tuition fees for our students in different levels of study.
                        </p>
                    </div>


                </div>
            </div>


            {/*------------- Tutuion Fees  ---------------------*/}

            <div>
                <div className="container py-4">
                    <div className="row row-cols-1 row-cols-md-2">

                        <div className="col col-md-4 d-flex align-items-center">
                            <div className=''>
                                <h3 className='fs-1 blueColor fw-bold'>Tution Fees</h3>
                            </div>
                        </div>


                        <div className="col col-md-8">
                            <p className='mid-line right-text justify-text'>At NIST, we understand the financial sacrifice and commitment that parents make when they take the decision to enroll their children in a private school.As like-minded educators who value this commitment to pupil learning, the team at NIST ensures that the curriculum, teaching staff and overall student experience live up to its mission and vision. <br /> <br />

                            NIST offers a Canadian government accredited program from Kindergarten to Grade 12 and is now open for student enrolment for the current academic year in every semester (<b>September to January, February to June</b> and <b>July to August</b> ).Our overarching goal is to disseminate knowledge to all students as widely as possible.We offer special care to the underserved communities.Our fees are set lower than other private schools.<br /> <br />

                                Please refer to the detailed school tuition fees below including scholarships, financial aids and sibling discounts. It is noted that a <u>$200</u> (Two Hundred US dollar) admissions fee is applicable for all grades.

                            </p>
                        </div>
                    </div>
                </div>
            </div>


            {/*------- admission requirements  */}
            <div>
                <div className="container poppins">
                    {/* <h2 className='blueColor fw-bold text-center py-3' id='admission-procedure-guideline'>Admission Requirements</h2> */}

                    <div className="row gap-5 admission-req ">

                        <div className="col bg-white px-md-5">
                            <div>
                                <div className='text-center'>
                                    <img className='' src={ElementarySchool2} alt="" />
                                </div>

                                <div className="text-part pb-2">
                                    <div className="text-center">
                                        {/* <h3 className='py-3 blueColor fw-bold'>Elementary School</h3> */}
                                        <p className='fs-5 my-3 blueColor fw-bold'>K0: Kindergarten (JK and SK)</p>
                                        <p className='fs-5 my-3 blueColor fw-bold'>Pre-school Education (PRE)</p>
                                    </div>
                                    <ol>
                                        <li>Tuition fees for Grade 1 to 3 (Elementary and Primary School) are $6,050 (US Dollar) per year for each grade [Full-time], $600 (US Dollar) per course [Part-time].</li>

                                        <li>Tuition fees for Grade 4 to 6 (Elementary and Primary School) are $7,200 (US Dollar) per year for each grade [Full-time], $650 (US Dollar) per course [Part-time].</li>


                                    </ol>
                                </div>



                                <div className="text-part pb-5">
                                    <div className="text-center">
                                        {/* <h3 className='py-3 blueColor fw-bold'>Elementary School</h3> */}
                                        <p className='fs-5 my-3 blueColor fw-bold'>G1-6: Elementary and Primary School (ELE)</p>
                                    </div>
                                    <ol>
                                        <li>The tuition fee for both Junior Kindergarten (JK) and Senior Kindergarten (SK) is $6,600 (US Dollar) per year [Full-time], $650 (US Dollar) per course [Part-time].</li>


                                    </ol>
                                </div>
                            </div>
                        </div>


                        <div className="col bg-white px-md-5">
                            <div>
                                <div className='text-center'>
                                    <img className='' src={ElementarySchool2} alt="" />
                                </div>

                                <div className="text-part pb-2">
                                    <div className="text-center">
                                        {/* <h3 className='py-3 blueColor fw-bold'>Elementary School</h3> */}
                                        <p className='fs-5 my-3 blueColor fw-bold'>G7-8: Middle School (MID)</p>
                                    </div>
                                    <ol>
                                        <li>Tuition fees for Grade 7 to 8 (Middle School) are $7,800 (US Dollar) per year for each grade [Full-time], $700 (US Dollar) per course [Part-time].</li>


                                    </ol>
                                </div>


                                <div className="text-part pb-5">
                                    <div className="text-center">
                                        {/* <h3 className='py-3 blueColor fw-bold'>Elementary School</h3> */}
                                        <p className='fs-5 my-3 blueColor fw-bold'>G9-12: High School (HIG)</p>
                                    </div>
                                    <ol>
                                        <li>Tuition fees for Grade 9 to 12 (High School) are $9,900 (US Dollar) per year for each grade [Full-time], $1,000 (US Dollar) per course [Part-time].</li>


                                    </ol>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            </div>


            {/*---------------Final Decision  */}
            <div className="container py-5 rounded">
                <div className="row admission-req">
                    <div className="col bg-white px-md-5">
                        <h3 className='py-3 blueColor fw-bold text-center'>K12-HS: Homeschool Education (HOM) - Kindergarten to 12</h3>


                        <h5 className='pb-3'>Tuition fees for Homeschool education are <b>$15,000 (US Dollar) per year</b> [Full-time], <b>$1,500 (US Dollar) per course</b> [Part-time].</h5>

                    </div>
                </div>

                <h5 className='py-3 blueColor fw-bold'> <u>Note:</u> NIST provides courses that combine elements of both synchronous and asynchronous learning. The model will be modified by the teacher dependent on the dynamics of the class.</h5>
            </div>

            {/*--------------- special discount  */}
            <div className="container pb-5 rounded">
                <div className="row admission-req">
                    <div className="col px-md-2">
                        <h1 className='py-3 blueColor fw-bold text-center'>Special Discount on tuition fees</h1>

                        <h4 className='pb-3 justify-text' style={{fontWeight: '400'}}>NIST is offering a special discount on tuition fees to provide financial support and open the door of Canadian education for international students. The current tuition fee is already less than any standard North American private school. To further support the students worldwide, NIST has taken an initiative to have a special discount based on Countries’ GDP and economic strength.</h4>

                    </div>
                </div>

                
            </div>
            
            {/*------------- family/sibling grant  ---------------------*/}

            <div>
                <div className="container py-4">
                    <div className="row row-cols-1 row-cols-md-2">

                        <div className="col col-md-4 d-flex align-items-center">
                            <div className=''>
                                <h3 className='fs-2 blueColor fw-bold'>Family/Sibling Grant</h3>
                            </div>
                        </div>


                        <div className="col col-md-8">
                            <p className='mid-line right-text justify-text'>When two or more siblings are enrolled at NIST at the same time, you can save 10% on tuition for each subsequent sibling enrolled as a full-time student. If a family has been receiving the discount, then later finds itself with only one student who remains enrolled in NIST for any reason (such as when a sibling withdraws from the program, transfers to another school, or graduates), the family will not be eligible for the discount the next time the remaining student enrolls in a course.

                            </p>
                        </div>
                    </div>
                </div>
            </div>


            {/*------------- method of payment  ---------------------*/}

            <div>
                <div className="container py-4">
                    <div className="row row-cols-1 row-cols-md-2">

                        <div className="col col-md-4 d-flex align-items-center">
                            <div className=''>
                                <h3 className='fs-2 blueColor fw-bold'>Method of payment</h3>
                            </div>
                        </div>


                        <div className="col col-md-8">
                            <p className='mid-line right-text justify-text'>All fees are expected to be paid in advance upon enrollment, unless an arrangement has been made for a payment plan. We accept all major credit cards (Mastercard, Visa, etc.) and money transfer.  More details of payment arrangements are made available upon successful admission.

                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/*--------------- Refund Policy  */}
            <div className="container py-5 rounded">
                <div className="row admission-req">
                    <div className="col bg-white px-md-5">
                        <h2 className='py-3 blueColor fw-bold text-center'>Refund Policy</h2>


                       <p className='justify-text'>
                            Thank you for your enrolment with NIST program. We hope you are happy with your program. However, if you want to withdraw with your enrolment for any valid reason, you may withdraw it for a full refund. However,  you have to follow the deadline withdrawal date. Once withdrawal date is over, you may not get any refund. <br /> <br />

                            It is noted that all fees are expected to be paid in advance upon enrolment, unless an arrangement has been made for a payment plan. If for any reason a child must be withdrawn from school before the second week of the semester/term, a full refund of tuition fees (less registration fee) will be applicable. Thereafter, requests for refunds will be entertained on a prorated-basis. For more details please contact with us at  
                            <Link className='green-color-link'> admission@nistonline.ca.</Link>
                       </p>

                    </div>
                </div>
            </div>

            {/*------------- Scholarships ---------------------*/}

            <div>
                <div className="container py-4">
                    <div className="row row-cols-1 row-cols-md-2">

                        <div className="col col-md-4 d-flex align-items-center">
                            <div className=''>
                                <h3 className='fs-2 blueColor fw-bold'>Scholarships</h3>
                            </div>
                        </div>


                        <div className="col col-md-8">
                            <p className='mid-line right-text justify-text'>If for any reason a child must be withdrawn from school before the second week of the semester/term, a full refund of tuition fees (less registration fee) will be applicable. Thereafter, requests for refunds will be entertained on a prorated basis.

                            </p>
                        </div>
                    </div>
                </div>
            </div>


            {/*------------- Entrance Scholarships ---------------------*/}

            <div>
                <div className="container py-4">
                    <div className="row row-cols-1 row-cols-md-2">

                        <div className="col col-md-4 d-flex align-items-center">
                            <div className=''>
                                <h3 className='fs-2 blueColor fw-bold'>Entrance Scholarship</h3>
                            </div>
                        </div>


                        <div className="col col-md-8">
                            <p className='mid-line right-text justify-text'>The NIST Entrance Scholarship Program provides an opportunity for exceptional students entering Grade 7 or above to benefit from an enriched learning environment. All of our students graduate with the Ontario Secondary School Diploma (OSSD), and are accepted into their university of choice, in Canada and worldwide. <br /> <br />

                            <b>The Entrance Scholarship is open to residents of select countries only.  Please contact us to find out more.</b>

                            </p>
                        </div>
                    </div>
                </div>
            </div>


            {/*------------- NSRIC Scholarships ---------------------*/}

            <div>
                <div className="container py-4">
                    <div className="row row-cols-1 row-cols-md-2">

                        <div className="col col-md-4 d-flex align-items-center">
                            <div className=''>
                                <h3 className='fs-2 blueColor fw-bold'>NSRIC Scholarship</h3>
                            </div>
                        </div>


                        <div className="col col-md-8">
                            <p className='mid-line right-text justify-text'>NSRIC Scholarship will be offered to the NIST students based on the recommendation of the admission office of NIST. The following criteria will be applied: <br /> <br />
                            <ol>
                                <li>Students with overall 90% of marks in their previous transcript.</li>
                                <li>A continuing student at NIST with 90% and above of marks in their studies.</li>
                                <li>A demonstrated and creative project work at NIST which empower the cognitive skills of the student.</li>
                            </ol>
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            {/*------------- Merit Scholarships ---------------------*/}

            <div>
                <div className="container py-4">
                    <div className="row row-cols-1 row-cols-md-2">

                        <div className="col col-md-4 d-flex align-items-center">
                            <div className=''>
                                <h3 className='fs-2 blueColor fw-bold'>Merit Scholarship</h3>
                            </div>
                        </div>


                        <div className="col col-md-8">
                            <p className='mid-line right-text justify-text'>Merit Scholarship will be offered to the NIST students based on the academic excellence and excellent track record in their field of study.The following criteria will be applied: <br /> <br />
                            <ol>
                                    <li>Students with overall 80% of marks in their previous transcript.</li>
                                    <li>A continuing student at NIST with 80% and above of marks in their studies.</li>
                                </ol>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/*--------------- who Should Apply  */}
            <div className="container py-5 rounded">
                <div className="row admission-req">
                    <div className="col bg-white px-md-5">
                        <h2 className='py-3 blueColor fw-bold text-center'>Who should apply?</h2>


                        <ol className='fs-5'>
                            <li>Students who will be entering Grade 7 or above in September 2021 and who don’t currently attend TFS.</li>
                            <li>Entrance scholars will be selected based on academic merit, involvement in their school and/or community, as well as financial need.</li>
                            <li>Academic eligibility: candidates should be able to demonstrate a minimum A average in the past two academic years.</li>
                            <li>Financial eligibility: We define financial need as a family’s inability to pay for even a portion of NIST’s tuition fees. The Entrance Scholarships are meant to provide an enriched learning opportunity to an exceptional student who would not otherwise have the resources to attend NIST.</li>
                            <li>As financial need depends on the circumstances and composition of each family, no firm thresholds are set. However, families (including single parents) are strongly encouraged to apply.</li>
                            <li>Scholarships are intended for international applicants only, that can demonstrate a financial need.</li>
                        </ol>

                    </div>
                </div>
            </div>

            {/*------------- Financial Aid & Subsidy Programs ---------------------*/}

            <div>
                <div className="container py-4">
                    <div className="row row-cols-1 row-cols-md-2">

                        <div className="col col-md-4 d-flex align-items-center">
                            <div className=''>
                                <h3 className='fs-2 blueColor fw-bold'>Financial Aid & Subsidy Programs</h3>
                            </div>
                        </div>


                        <div className="col col-md-8">
                            <p className='mid-line right-text justify-text'>In addition to our Entrance Scholarship, NIST is also committed to making education available to all.  If you require financial aid, please contact our admissions office to inquire about our financial aid and subsidy programs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TutionFees;