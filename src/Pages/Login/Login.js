import React from 'react';
import './Login.css'
import logo from '../../Images/logo.jpg'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='d-flex justify-content-center'>
            <div className='login-bg px-5'>
                <div className='text-center'>
                    <img className='login-logo mt-5' src={logo} alt="" />
                </div>

                <h3 className='blueColor text-center my-4'>Welcome to</h3>

                <p className='blueColor fw-bold text-center'>NSRIC International School in Toronto (NIST)</p>

                <div className='mt-4 px-4'>
                    <form action="">
                        <label htmlFor="email" className='text-white'>Username or Email Address
                        </label> <br />
                        <input type="email" className='w-100' name="email" id="" /> <br />

                        <label htmlFor="password" className='text-white mt-3'>Password
                        </label> <br />
                        <input type="password" className='w-100' name="password" id="" />


                        <input type="checkbox" name="remeberMe" id="remeberMe" />

                        <label htmlFor="remeberMe" className='ms-2 text-white mt-3'>Remember Me
                        </label> <br />

                        <button className='btn btn-light w-100 rounded-pill my-3 py-2' type='submit'>Log In</button>

                    </form>

                    <small className='link-colors'>
                        <Link to='/forget-password'>Lost your password? </Link>
                        | New User?
                        <Link to='/student-registration'> Register Here</Link>
                    </small>
                </div>
            </div>
        </div>
    );
};

export default Login;