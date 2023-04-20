import React, { useContext, useEffect, useState } from 'react';
import './Login.css'
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const Login = () => {
    const {logIn, setUser, user, googleLogin} = useContext(AuthContext);
    const navigator = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value; 
        const password = form.password.value; 

        logIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            setUser(loggedUser);
            form.reset();
            navigator('/');
        })
        .catch(error => {
            
        })
    }

    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            navigator('/')
        })
    }
    return (
        <div>
      
            <div className="login-box">
                <h2>Please Login</h2>
                <form onSubmit={handleLogin}>
                    <input name='email' id='input-user-name' type="text" placeholder='User Email' /> <br />
                    <input name='password' id='input-user-password' type="password" placeholder='Password' /> <br />
                    <input className='btn-login' type="submit" value="Login" name="" id="" />
                </form>           
                <Toaster />
            <p>Forget Password <Link>Reset Now</Link> </p>
            <button onClick={handleGoogleLogin} className='btn-google'>Login with Google</button>
            </div>
            
        </div>
    );
};

export default Login;