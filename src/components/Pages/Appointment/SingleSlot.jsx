import React from 'react';

const SingleSlot = ({ service,handleModal }) => {
    const { name, slots } = service;
    return (
        <div className="card  my-shadow ">
            <div className="card-body text-center">
                <h1 className='text-secondary text-xl font-semibold '>{name}</h1>
                <p>{slots.length > 0 ? slots[0]:"Try Another Day"}</p>
                <p className='text-md font-normal text-gray-500'>{slots.length} {slots.length > 0 ? "spaces" : "space"} Available</p>
                <div className="card-actions justify-center">
                    <label onClick={()=>handleModal(service)} htmlFor="booking-modal" className="btn bg-secondary hover:bg-primary border-0 text-lg capitalize text-white modal-button">Booking Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default SingleSlot;