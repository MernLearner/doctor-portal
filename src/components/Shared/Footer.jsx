import React from 'react';
import footerBg from '../../assets/footer-bg.png'
import { Link } from "react-router-dom"

const Footer = () => {
    const services = <>
        <li className='text-md font-bold text-gray-600 uppercase'>Services</li>
        <li>
            <Link className="text-sm font-semibold capitalize" to={"/"}>Emergency Checkup</Link>
        </li>
        <li>
            <Link className="text-sm font-semibold capitalize" to={"/"}>Monthly Checkup</Link>
        </li>
        <li>
            <Link className="text-sm font-semibold capitalize" to={"/"}>Weekly Checkup</Link>
        </li>
        <li>
            <Link className="text-sm font-semibold capitalize" to={"/"}>Deep Checkup</Link>
        </li>
    </>
    const oralhelth = <>
        <li className='text-md font-bold text-gray-600 uppercase'>ORAL HEALTH</li>
        <li>
            <Link className="text-sm font-semibold capitalize" to={"/"}>Fluoride Treatment</Link>
        </li>
        <li>
            <Link className="text-sm font-semibold capitalize" to={"/"}>Cavity Filling</Link>
        </li>
        <li>
            <Link className="text-sm font-semibold capitalize" to={"/"}>Teath Whitening</Link>
        </li>
    </>
    const address = <>
        <li className='text-md font-bold text-gray-600 uppercase'>OUR ADDRESS</li>
        <li>
            <p className="text-sm font-semibold capitalize" to={"/"}>New York - 101010 Hudson</p>
        </li>
    </>
    return (
        <div className='p-10 '
            style={{ background: `url(${footerBg})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
        >
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 list-none'>
                <div>{services}</div>
                <div>{oralhelth}</div>
                <div>{address}</div>
            </div>
            <div className='my-10 '>
                <h1 className='text-center capitalize text-md font-semibold'>Copyright 2022 All Rights Reserved</h1>
            </div>

        </div>
    );
};

export default Footer;