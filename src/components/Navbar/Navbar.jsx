import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='header-container'>
            {/* Navigation Bar */}
            <section className='header-section'>
                <div className='title-section'>
                    <Link className='company-name' to='/'><h3 className='brand-title'>Letter's From You</h3></Link>
                    <nav>
                        <Link className='menu' to='/about'>About</Link>
                        <Link className='menu' to='/company'>Company</Link>
                    </nav>
                </div>
                <div>
                    <button className='btn-login'>
                    <Link className='menu' to='/login'>Upload Document</Link>
                    </button>
                </div>
            </section>
            <section className='mobile-screen-menu'>
                {/* <h3>Mobile Screen</h3> */}
            </section>
            {/* Banner Section */}
        </div>
    );
};

export default Navbar;