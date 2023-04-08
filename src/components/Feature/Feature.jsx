import React from 'react';
import './Feature.css'

const Feature = ({feature}) => {
    const {id, title, description, img} = feature;
    return (
        <div className='feature'>
            <img src={img} alt="" />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Feature;