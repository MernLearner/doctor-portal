import React from 'react';

const ServiceName = ({service}) => {
    return (
        <div className='my-shadow text-secondary text-center text-xl font-semibold rounded-xl  px-4 py-10 cursor-pointer'>
            <h1>{service.name}</h1>
        </div>
    );
};

export default ServiceName;