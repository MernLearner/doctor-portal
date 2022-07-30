import React from 'react';
import { Link } from 'react-router-dom';
const PrimaryButton = ({children,link}) => {
    return (
        <Link to={`${link}`} className="btn border-0 text-white  bg-gradient-to-r from-primary to-secondary hover:shadow-md">{children}</Link >
    );
};

export default PrimaryButton;