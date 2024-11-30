import React from 'react';

const Comment = ({commentText}) => {
    return (
        <div className='max-w-[950px] text-center'>
            <h1 className='text-[48px] font-Caveat'>{commentText}</h1>
        </div>
    );
};

export default Comment;