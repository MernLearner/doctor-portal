import React from 'react';
import PrimaryButton from '../../Shared/PrimaryButton'
import doctor from '../../../assets/doctor.png'
import bgimg from '../../../assets/appointment.png'
const MakeAppointment = () => {
    return (
        <section >
            <div >
                <div style={{ background: `url(${bgimg})`, backgroundPosition: "center" ,backgroundRepeat:"no-repeat",backgroundSize:"cover" }}
                    className='lg:flex items-end justify-between  mt-10 border '>
                    <div className='lg:w-6/12 hidden lg:block' >
                        <img className='mt-[-100px]' src={doctor} alt={'doctor'} />
                    </div>
                    <div className='text-left lg:w-6/12  lg:mb-28 lg:pr-10 p-10'>
                        <h1 className='text-secondary capitalize text-lg font-bold'>Appointment</h1>
                        <h1 className='text-white text-3xl capitalize font-bold mt-5 mb-3'>Make an appointment Today</h1>
                        <p className='text-white text-md mb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton link={"/"}>get started</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;