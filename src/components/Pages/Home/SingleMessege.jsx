import React from 'react';

const SingleMessege = ({comment}) => {
    return (
        <div className='border lg:mb-0 mb-10 rounded-md p-3 shadow-md'>
            <p className='text-md font-semibold capitalize'>{comment.comment}</p>
            <div className='flex items-center mt-3'>
                <img className='w-20 h-20 border-4 border-primary rounded-full' src={comment.img} alt={comment.name} />
                <div className='ml-5 '>
                    <h1 className='text-xl font-bold text-accent capitalize'>{comment.name}</h1>
                    <h1 className='text-md font-bold text-accent capitalize'>{comment.address}</h1>
                </div>
            </div>
        </div>
    );
};

export default SingleMessege;