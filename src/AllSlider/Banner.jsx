import React from 'react';

const Banner = ({imgLink}) => {
    return (
        <div className='rounded-2xl w-full overflow-hidden'>
                <img className='h-[500px] xl:h-auto w-full' src={imgLink} alt="" />
        </div>
    );
};

export default Banner;