import React, { useEffect, useState } from 'react';
import './Login.css'
import toast, { Toaster } from 'react-hot-toast';


const Login = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('touching.json')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])

    const btnNotification = () => {
        toast.error('Something Wrong, Please Check', {
            duration: 1000
        })
    }

    const btnLogin = () => {        
        const userNameField = document.getElementById('input-user-name');
        const passwordField = document.getElementById('input-user-password');

        const userName = userNameField.value;
        const password = passwordField.value;

        userNameField.value = '';
        passwordField.value = '';
        
        
        // console.log(users);
        for (const user of users){
            if(user.userName === userName && user.password === password){
                window.location.pathname = '/upload';
                toast.success('Correct Information')
            }
            else{
                toast.error('Something Wrong, Please Check', {
                    duration: 1000
                })
            }
        }
    }
    
    return (
        <div>
      
            <div className="login-box">
                <input id='input-user-name' type="text" placeholder='Given UserName' /> <br />
                <input id='input-user-password' type="password" placeholder='Password' /> <br />
                <button className='btn-login' onClick={() => btnLogin()}>Login</button>                
                <Toaster />
            </div>
            
        </div>
    );
};

export default Login;