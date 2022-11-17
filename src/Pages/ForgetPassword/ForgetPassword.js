import React from 'react';

const ForgetPassword = () => {
    return (
        <div className='container mx-auto w-50 py-3 px-5'>
            <p>
                Lost your password? Please enter your username or email address. <br /> You will receive a link to create a new password via email. <br />

            </p>

            <form action="">
                <label htmlFor="">Username or email</label>
                <input type="email" className='w-100 my-2' name="" id="" />
                
                <button className='btn btn-primary px-4 py-2' type='submit'>RESET PASSWORD</button>
            </form>
        </div>
    );
};

export default ForgetPassword;