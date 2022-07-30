import React from 'react';
import SectionTitle from '../../Shared/SectionTitle';
import fluoride from '../../../assets/fluoride.png';
import cavity from '../../../assets/cavity.png';
import whitening from '../../../assets/whitening.png';
import ServiceItems from './ServiceItems';

const ServiceSection = () => {
    const services = [
        {
            _id: "01",
            img: fluoride,
            title: "Fluoride Treatment",
            desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            _id: "02",
            img: cavity,
            title: "Cavity Filling",
            desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            _id: "03",
            img: whitening,
            title: "Teeth Whitening",
            desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
    ]
    return (
        <section >
            <SectionTitle title={"OUR SERVICES"} subtitle={"Services We Provide"}></SectionTitle>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service=><ServiceItems service={service } key={service._id}></ServiceItems>)
                }
            </div>

        </section>
    );
};

export default ServiceSection;