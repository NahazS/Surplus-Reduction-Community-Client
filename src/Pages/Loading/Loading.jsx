import React from 'react';
import LoadingJson from './loading.json'
import Lottie from 'lottie-react';
const Loading = () => {
    return (
        <div>
            <Lottie className='w-screen h-screen' animationData={LoadingJson} />
        </div>
    );
};

export default Loading;