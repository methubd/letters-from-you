import React, { useContext, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Registration = () => {
    const {createUser, setUser} = useContext(AuthContext);

    const [error, setError] = useState(null);

    const handleRegistration = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value; 
        const password = form.password.value;
        const confirm = form.confirm.value; 
        if(password !== confirm){
            toast.error('Password Not Matched')
            return;
        }
        else if(password.length < 6){
            toast.error('Password must be in 6 charecter')
            return;
        }

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            setUser(loggedUser);
        })
        .catch(error => {
            if(error.message === 'Firebase: Error (auth/email-already-in-use).'){
                toast.error('Email Address Already Registered')
            }
        })
        
    }
    return (
        <div className='login-box'>
            <h2>User Registration</h2>
            <form onSubmit={handleRegistration}>
                <input name="email" id='input-user-name' type="text" placeholder='Valid Email' /> <br />
                <input name="password" id='input-user-password'  type="password" placeholder='Password' /> <br />
                <input name="confirm" id='input-confirm-password' type="password" placeholder='Confrim Password' /> <br />
                <input className='btn-login' type="submit" value="Create Account" />
                <Toaster />
            </form>
            <p>{error}</p>
        </div>
    );
};

export default Registration;