
import React from 'react';
import clock from '../../../assets/icon/clock.png'
import place from '../../../assets/icon/map.png'
import phone from '../../../assets/icon/phone.png'
import HeroBottomSingle from './HeroBottomSingle';

const HeroBottom = () => {
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2  gap-5 items-center text-left  mt-10 lg:mt-0'>
            <HeroBottomSingle 
            img={clock} 
            bgClass={"bg-gradient-to-r from-primary to-secondary"} 
            title={"Opening Hours" }
            desc={"Lorem Ipsum is si sdj dsojs sdios "}
            ></HeroBottomSingle>
            <HeroBottomSingle 
            img={place} 
            bgClass={"bg-accent"} 
            title={"Visit our location" }
            desc={"Brooklyn, NY 10036, United States"}
            ></HeroBottomSingle>
            <HeroBottomSingle 
            img={phone} 
            bgClass={"bg-gradient-to-r from-primary to-secondary"} 
            title={"Contact us now" }
            desc={"+88 01791-180333"}
            ></HeroBottomSingle>
        </div>
    );
};

export default HeroBottom;