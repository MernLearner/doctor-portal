import React from 'react';
import PrimaryButton from '../../Shared/PrimaryButton';
import treatment from '../../../assets/treatment.png';

const DentalCare = () => {
    return (
    <section className="hero  text-left lg:px-20 mb-20">
            <div className="hero-content justify-between flex-col gap-10 lg:flex-row-reverse">
                <div className='order-1 '>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton link={'/about'}>get started</PrimaryButton>
                </div>
                
                <img src={treatment} alt={"dentalImage"} className="sm:max-w-sm rounded-lg shadow-2xl lg:order-1"  />
            </div>
        </section>
    );
};

export default DentalCare;