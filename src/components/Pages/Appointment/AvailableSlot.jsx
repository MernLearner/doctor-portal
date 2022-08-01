import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import SingleSlot from './SingleSlot';

const AvailableSlot = ({date}) => {
    const [serviceTimeSlot, setServiceTimeSlot] = useState([]);
    const [handleModal,setHandleModal] = useState(null);
    useEffect(() => {
        fetch('serviceSlote.json')
            .then(res => res.json())
            .then(data => setServiceTimeSlot(data))
    }, []);
    return (
        <div className='mt-10'>
            <div className='text-center'>
                <h1 className='text-secondary font-semibold text-2xl'>Available slots for Teeth Orthodontics.</h1>
            </div>
            <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    serviceTimeSlot?.map(serviceTime=><SingleSlot handleModal={setHandleModal} key={serviceTime._id} service={serviceTime}></SingleSlot>)
                }
            </div>
            {
                handleModal && <BookingModal date={date} handleModal={handleModal} setHandleModal={setHandleModal}></BookingModal>
            }

        </div>
    );
};

export default AvailableSlot;