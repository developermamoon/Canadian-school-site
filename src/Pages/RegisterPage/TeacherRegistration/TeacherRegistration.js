import React, { useState } from 'react';

const TeacherRegistration = () => {
    const [hide, setHide] = useState(false);

    return (
        <div className='bg-1 d-flex justify-content-center'>
            <div className="container bg-white m-md-5 p-md-5">
                <div className='m-3 m-md-5 border border-1'>

                    <h4 className='blue-bg text-center p-3'>TEACHER REGISTRATION</h4>

                    <form className='p-3'>

                        <div className='d-flex align-items-center'>
                            <input onClick={() => setHide(true)} type="radio" name="teacher" id="NSRIC/NIST Employee" />
                            <label className='ps-2' htmlFor="NSRIC/NIST Employee">NSRIC/NIST Employee</label>
                        </div>


                        <div className='d-flex align-items-center'>
                            <input onClick={() => setHide(false)} type="radio" name="teacher" id="Becoming a NSRIC Employee" />
                            <label className='ps-2' htmlFor="Becoming a NSRIC Employee">Becoming a NSRIC Employee</label>
                        </div>


                        {
                            hide && 
                        <div className='mt-3'>
                            <label htmlFor=""><b>Faculty Employment ID (FEN):</b> *</label> <br />
                            <input type="text" className='w-100 mt-2' name="" id="" placeholder='Faculty Employment ID (FEN) from NSRIC' />
                        </div>
                        }
                        
                            <div className="mt-3">
                                <input className='btn bg-warning px-4 rounded-pill' type="submit" value="NEXT" />
                            </div>
                    </form>


                </div>
            </div>
        </div>
    );
};

export default TeacherRegistration;