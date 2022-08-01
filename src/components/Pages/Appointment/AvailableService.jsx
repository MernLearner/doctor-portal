import React from 'react';
import { format } from 'date-fns';
import ServiceName from './ServiceName';

const AvailableService = ({date}) => {
    const serviceName = [
        {
            id:1,
            name:"Teeth Orthodontics"
        },
        {
            id:2,
            name:"Cosmetic Dentistry"
        },
        {
            id:3,
            name:"Teeth Cleaning"
        },
        {
            id:4,
            name:"Cavity Protection"
        },
        {
            id:5,
            name:"Pediatric Dental"
        },
        {
            id:6,
            name:"Oral Surgery"
        }
    ]
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-secondary font-semibold text-2xl'>Available Services on {format(date, 'PP')}</h1>
                <p className='text-gray-500 font-normal text-xl'>Please select a service.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                {
                    serviceName.map(service=><ServiceName key={service.id} service={service}></ServiceName>)
                }
            </div>
        </div>
    );
};

export default AvailableService;