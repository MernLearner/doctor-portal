import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvailableService from './AvailableService';
import Footer from '../../Shared/Footer';
import AvailableSlot from './AvailableSlot';
const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div className='lg:px-12 px-4'>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvailableService date={date}></AvailableService>
            <AvailableSlot date={date}></AvailableSlot>
            
            <Footer></Footer>
        </div>
    );
};

export default Appointment;