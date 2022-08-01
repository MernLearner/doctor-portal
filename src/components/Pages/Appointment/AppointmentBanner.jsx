import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import chair from '../../../assets/chair.png'
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({date,setDate}) => {
    
    return (
        <div className="hero  min-h-screen">
            <div className="hero-content gap-10 flex-col lg:flex-row-reverse">
                <img src={chair} className="lg:max-w-lg rounded-lg shadow-2xl" alt='chair' />
                <div className='border rounded-xl my-shadow' >
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;