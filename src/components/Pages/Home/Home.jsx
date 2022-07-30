import React from 'react';
import SectionDivider from '../../Shared/SectionDivider';
import Appointment from './Appointment';
import DentalCare from './DentalCare';
import HeroBottom from './HeroBottom';
import HeroSection from './HeroSection';
import ServiceSection from './ServiceSection';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className='px-12'>
            <HeroSection></HeroSection>
            <SectionDivider></SectionDivider>
            <HeroBottom></HeroBottom>
            <SectionDivider></SectionDivider>
            <ServiceSection ></ServiceSection>
            <SectionDivider></SectionDivider>
            <DentalCare></DentalCare>
            <SectionDivider></SectionDivider>
            <Appointment></Appointment>
            <SectionDivider></SectionDivider>
            <Testimonial></Testimonial>
            <SectionDivider></SectionDivider>
        </div>
    );
};

export default Home;