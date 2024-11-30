import React from 'react';
import ErrorJson from './error.json'
import Lottie from 'lottie-react';
const Error = () => {
    return (
        <div>
            <Lottie className='w-screen h-screen' animationData={ErrorJson} />
        </div>
    );
};

export default Error;