import React from 'react';
import { Link } from 'react-router-dom';
import HeroImg from '../../../assets/chair.png'

const HeroSection = () => {
    return (
        <div>
            <div className="hero min-h-screen border-b">
                <div className="hero-content flex-col  lg:flex-row-reverse ">
                    <img src={HeroImg} alt={HeroImg} className="max-w-md rounded-lg shadow-2xl " />
                    <div >
                        <h1 className="text-5xl font-bold text-left">Your New Smile Starts Here!</h1>
                        <p className="py-6 text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                        <div className='text-left'>
                        <Link to={"/"} className="btn border-0 text-white  bg-gradient-to-r from-primary to-secondary hover:shadow-md">Get Started</Link >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;