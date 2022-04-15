import React from 'react';
import './Register.css'

const Register = () => {
    return (
        <div>
            <h2>Please register now</h2>
            <form>
                <input type="text" placeholder='Your Name'/>
                <br/>
                <input type="email" placeholder='Your email'/>
                <br/>
                <input type="password" placeholder='Your password'/> 
                <br/>
                <input type="submit" value="Register"/>
            </form>
        </div>
    );
};

export default Register;