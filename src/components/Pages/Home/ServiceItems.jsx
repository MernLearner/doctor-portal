import React from 'react';

const ServiceItems = ({ service }) => {
    return (
        <div className='border rounded-md p-5  shadow-md text-center'>
            <div className=' mx-auto'>
                <img className='w-20 h-20 mx-auto' src={service.img} alt={service.title} />
            </div>
            <h1 className='mt-5 text-lg text-accent font-semibold'>{service.title}</h1>
            <h1 className='text-sm'>{service.desc}</h1>
        </div>
    );
};

export default ServiceItems;