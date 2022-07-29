import React from 'react';


const HeroBottomSingle = ({img,bg,title,desc}) => {
    console.log(`bg-${bg}`);
    return (
        <div>
            <div className={`card card-side shadow-xl  p-3 bg-${bg}` }>
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