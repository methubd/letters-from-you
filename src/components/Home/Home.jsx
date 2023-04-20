import React, { useContext } from 'react';
import './Home.css'
import '../Navbar/Navbar.css'
import { Link, useLoaderData } from 'react-router-dom';
import Feature from '../Feature/Feature';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Home = () => {
    const {user} = useContext(AuthContext);
    const features = useLoaderData();
    // console.log(features);
    return (
        <div>
            <section className='banner-section'>
                <div className="banner-image">
                    <h1>Let <span className='brand-title'>“Letter’s From You”</span> <br /> send your company’s <br /> next round of disputes. <br />
                    { user ? "" :
                        <Link to='/registration'>
                        <button className='btn-login'>Create a new Account</button>
                        </Link>
                    }
                    </h1>
                    
                </div>
            </section>
            
            <main>
                <div className="company-description">
                    <h1>Just Upload your Documents, We'll do the Rest</h1>
                    <p><span className='brand-title'>“Letter’s From You”</span> is what credit repair agencies need to insure that <br /> all their clients dispute letters are mailed and processed with no delay.</p>
                </div>
                
                {/* Features  */}
                <div className="features">
                        {
                            features.map(feature => <Feature 
                                feature = {feature}
                                key = {feature.id}
                                ></Feature>)
                        }
                </div>
            </main>
        </div>
    );
};

export default Home;