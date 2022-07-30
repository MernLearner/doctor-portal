import React from 'react';


const HeroBottomSingle = ({img,bgClass,title,desc}) => {

    return (
        <div>
            <div className={`card card-side shadow-xl  p-3 ${bgClass}` }>
                <figure><img src={img} alt="img" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white">{title}</h2>
                    <p className='text-md text-white'>{desc}</p>
                </div>
            </div>
        </div>
    );
};

export default HeroBottomSingle;