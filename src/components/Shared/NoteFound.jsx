import React from 'react';
import { Link } from 'react-router-dom';
const NoteFound = () => {
    return (
        <div className='flex items-center justify-center w-screen h-screen'>
            <div>
            <h1 className='text-red-600 text-4xl font-bold capitalize'>Page Not Found</h1>
            <h6 className='text-green-500 btn-primary mt-5 bg-primary rounded-lg'><Link to={"/"}>Go to home</Link></h6>
            </div>
        </div>
    );
};

export default NoteFound;