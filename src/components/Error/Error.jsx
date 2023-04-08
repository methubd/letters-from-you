import React from 'react';
import './Error.css'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='error-container'>
            <Link className='company-name' to='/'><h3>Letter's From You</h3></Link>
            <h2>WE ARE SORRY, PAGE NOT FOUND</h2>
            <button className='btn-primary'><Link className='btn-primary' to='/'>Home Page</Link></button>
        </div>
    );
};

export default Error;