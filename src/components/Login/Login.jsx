import React, { useEffect, useState } from 'react';
import { btnLogin } from '../Root/auth';
import './Login.css'

const Login = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('touching.json')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])

    const btnLogin = data => {
        const userNameField = document.getElementById('input-user-name');
        const passwordField = document.getElementById('input-user-password');
        const loginInstructions = document.getElementById('login-instructions');
        loginInstructions.innerText = '';
        const userName = userNameField.value;
        const password = passwordField.value;
        userNameField.value = '';
        passwordField.value = '';

        if(isNaN(userName) && userName === 'number' && password === 'string'){
            loginInstructions.innerText = 'Please check your entry';
            return;
        }
        
        // console.log(users);
        for (const user of users){
            if(user.userName === userName && user.password === password){
                console.log('Data Matched');
                window.location.pathname = '/upload';
                loginInstructions.style.color = 'green';
                loginInstructions.innerText = 'Correct Information';
            }
            else{
                loginInstructions.innerText = 'Something is wrong'
                loginInstructions.style.color = 'red';
            }
        }
    }
    
    return (
        <div>
            <div className="login-box">
                <input id='input-user-name' type="text" placeholder='Given UserName' /> <br />
                <input id='input-user-password' type="password" placeholder='Password' /> <br />
                <button className='btn-login' onClick={() => btnLogin()}>Login</button>
                <p id='login-instructions'>Welcome to <span className='brand-title'>Letters From You</span></p>
            </div>
        </div>
    );
};

export default Login;