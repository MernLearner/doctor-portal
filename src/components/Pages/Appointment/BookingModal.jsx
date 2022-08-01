import React from 'react';
import { format } from 'date-fns';
const BookingModal = ({ handleModal,setHandleModal, date }) => {

    const handleBooking = (e) => {
        e.preventDefault();
        const bookingDate = e.target.bookingDate.value;
        const timeSlote = e.target.timeSlote.value;
        const serviceName = e.target.serviceName.value;

        const booking = {
            bookingDate, timeSlote, serviceName
        }
        setHandleModal(null);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box text-center">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary" >{handleModal.name}</h3>
                    <div className='grid grid-cols-1 mt-3'>

                        <form className='' onSubmit={handleBooking}>
                            <input name='bookingDate' type="text" readOnly value={format(date, 'PP')} className="mt-2 input input-bordered w-full max-w-xs" />
                            <select name='timeSlote' className="mt-2 select select-bordered w-full max-w-xs">
                                {
                                    handleModal?.slots?.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
                                }
                            </select>
                            <input name='serviceName' type="text" placeholder="Type here" className="mt-2 input input-bordered w-full max-w-xs" value={handleModal.name} />
                            <input name='d-name' type="text" placeholder="Type here" className="mt-2 input input-bordered w-full max-w-xs" />
                            <input name='n-dame' type="text" placeholder="Type here" className="mt-2 input input-bordered w-full max-w-xs" />
                            <input name='n-a' type="text" placeholder="Type here" className="mt-2 input input-bordered w-full max-w-xs" />
                            <input type="submit" className='mt-2 cursor-pointer hover:bg-primary bg-secondary border-0 text-white font-semibold text-lg input input-bordered w-full max-w-xs' value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;