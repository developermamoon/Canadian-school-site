import React from 'react';

const EmployeeStaffRegistration = () => {
    return (
        <div className='bg-1 d-flex justify-content-center'>
            <div className="container bg-white m-md-5 p-md-5">
                <div className='m-3 m-md-5 border border-1'>

                    <h4 className='blue-bg text-center p-3'>EMPLOYEE/STAFF REGISTRATION</h4>

                    <form className='row row-cols-1 row-cols-md-2 p-3 gy-2'>

                        <div className="col col-md-12">
                            <label htmlFor="" className='fw-bold'>Name <span className='star'>*</span> </label> <br />
                        </div>


                        <div className="col">
                            <input className='w-100' type="text" name="" id="" placeholder='First Name' required />
                            <p className='fw-bold mt-2'>First</p>
                        </div>

                        <div className="col">
                            <input className='w-100' type="text" name="" id="" placeholder='Last Name' required />
                            <p className='fw-bold mt-2'>Last</p>
                        </div>


                        <div className="col col-md-12">
                            <label htmlFor="" className='fw-bold'>Email <span className='star'>*</span> </label> <br />
                        </div>


                        <div className="col">
                            <input className='w-100' type="email" name="" id="" placeholder='Email' required />
                            <p className='fw-bold mt-2'>Enter Email</p>
                        </div>

                        <div className="col">
                            <input className='w-100' type="text" name="" id="" placeholder='Confirm Email' required />
                            <p className='fw-bold mt-2'>Confirm Email</p>
                        </div>



                        <div className="col col-md-12">
                            <label htmlFor="" className='fw-bold'>Password <span className='star'>*</span> </label> <br />
                        </div>


                        <div className="col">
                            <input className='w-100' type="email" name="" id="" placeholder='Password' required />
                            <p className='fw-bold mt-2'>Enter Password</p>
                        </div>

                        <div className="col">
                            <input className='w-100' type="text" name="" id="" placeholder='Confirm Password' required />
                            <p className='fw-bold mt-2'>Confirm Password</p>
                        </div>

                        <div className="col col-md-12">
                            <input className='btn bg-warning px-4 rounded-pill' type="submit" value="Submit" />
                        </div>
                    </form>


                </div>
            </div>
        </div>
    );
};

export default EmployeeStaffRegistration;