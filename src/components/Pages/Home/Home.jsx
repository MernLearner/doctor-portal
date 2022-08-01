import React from 'react';
import Footer from '../../Shared/Footer';
import SectionDivider from '../../Shared/SectionDivider';
import Appointment from './MakeAppointment';
import ContactForm from './ContactForm';
import DentalCare from './DentalCare';
import HeroBottom from './HeroBottom';
import HeroSection from './HeroSection';
import ServiceSection from './ServiceSection';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className='lg:px-12 px-4'>
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
            <ContactForm></ContactForm>
            <SectionDivider></SectionDivider>
            <Footer></Footer>
        </div>
    );
};

export default Home;




