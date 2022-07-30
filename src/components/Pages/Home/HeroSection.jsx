import React from 'react';

import HeroImg from '../../../assets/chair.png'
import PrimaryButton from '../../Shared/PrimaryButton';

const HeroSection = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col  lg:flex-row-reverse ">
                    <img src={HeroImg} alt={HeroImg} className="max-w-md rounded-lg shadow-2xl " />
                    <div >
                        <h1 className="text-5xl font-bold text-left">Your New Smile Starts Here!</h1>
                        <p className="py-6 text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                        <div className='text-left'>
                        <PrimaryButton link={"/"}>get started</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;