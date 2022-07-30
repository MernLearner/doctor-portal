import React from 'react';

const SectionTitle = ({title,subtitle}) => {
    return (
        <div className=' mb-16'>
            <h1 className='text-xl text-primary uppercase font-bold'>{title}</h1>
            <h2 className='text-2xl text-accent capitalize font-semibold'>{subtitle}</h2>
        </div>
    );
};

export default SectionTitle;