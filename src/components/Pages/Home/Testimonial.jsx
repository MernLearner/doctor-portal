import React from 'react';
import people1 from "../../../assets/people-1.png"
import people2 from "../../../assets/people-2.png"
import people3 from "../../../assets/people-3.png"
import SectionTitle from '../../Shared/SectionTitle'
import quote from '../../../assets/quote.svg'
import SingleMessege from './SingleMessege';

const Testimonial = () => {
    const testimonial = [
        {
            _id: "01",
            comment: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name: "Winson Herry",
            address: "California",
            img: people1
        },
        {
            _id: "02",
            comment: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name: "Winson Herry",
            address: "California",
            img: people2
        },
        {
            _id: "03",
            comment: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name: "Winson Herry",
            address: "California",
            img: people3
        },
    ]
    return (
        <div>
            <div className='flex justify-between items-center text-left'>
                <SectionTitle title={"OUR SERVICES"} subtitle={"Services We Provide"}></SectionTitle>
                <div><img className='w-40 h-40' src={quote} alt={"{quote"} /></div>
            </div>
            <div className='sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    testimonial.map(comment=><SingleMessege comment={comment} key={testimonial._id}></SingleMessege>)
                }
            </div>

        </div>
    );
};

export default Testimonial;