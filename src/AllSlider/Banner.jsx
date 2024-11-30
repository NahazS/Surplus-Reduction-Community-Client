import React from 'react';

const Banner = ({imgLink}) => {
    return (
        <div className='rounded-2xl w-full overflow-hidden'>
                <img src={imgLink} alt="" />
        </div>
    );
};

export default Banner;