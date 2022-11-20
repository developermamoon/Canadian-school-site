import React from 'react';
import logo from '../../../Images/logo.jpg'
import './Banner1.css'

const Banner1 = () => {
    return (
        <div>
            <div className="">
                <div className="row row-cols-1 row-cols-md-3 g-0">

                    <div className="col col-md-2 p-0 text-center d-flex justify-content-center align-items-center">
                        <p className='time-text'>NSRIC Time <br />
                            (EST-Toronto Time)</p>
                    </div>

                    {/* middle part */}
                    <div className="col col-md-8 p-0 text-center text-md-s d-md-flex justify-content-center align-items-center">

                        <img className='logo' src={logo} alt="" />

                        <div className="text-part">
                            <h3 className='school-name'>NSRIC International School in Toronto</h3>
                            <h4 className='canada'>Ontario, Canada</h4>
                            <h4 className='linking-life'>Linking life with learning!</h4>
                        </div>
                    </div>

                    <div className="col col-md-2 p-0 text-center d-flex justify-content-center align-items-center">
                        <p className='time-text'>Local Time</p>
                    </div>
                </div>

                <div>
                    <h5 className='BSID text-center mb-0'>Authorized and Registered Online K12 School by the Ministry of Education, Ontario, Canada - BSID No: 665414</h5>
                </div>
            </div>
        </div>
    );
};

export default Banner1;