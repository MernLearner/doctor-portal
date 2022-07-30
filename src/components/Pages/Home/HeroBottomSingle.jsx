import React from 'react';


const HeroBottomSingle = ({img,bgClass,title,desc}) => {

    return (
        <div>
            <div className={`card card-side shadow-xl  lg:px-3 lg:py-6  px-3 py-5 ${bgClass}` }>
                <figure><img src={img} alt="img" /></figure>
                <div className="flex flex-col gap-2 p-3">
                    <h2 className="card-title text-white">{title}</h2>
                    <p className='text-sm text-white'>{desc}</p>
                </div>
            </div>
        </div>
    );
};

export default HeroBottomSingle;