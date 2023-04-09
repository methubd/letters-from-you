import React from 'react';
import './UploadDocument.css'
import toast, { Toaster } from 'react-hot-toast';

const UploadDocument = () => {
    
    const showAMsg = () => {

        toast.error('Thank you for your click, we re still working on it.')
    }

    return (
        <div>
            <div className='upload-container'>
                <h2>Upload Your Document Here</h2>
                <Toaster />
                <button onClick={() => showAMsg ()} className='btn-secondary'>Click Here</button>
            </div>
        </div>
    );
};

export default UploadDocument;