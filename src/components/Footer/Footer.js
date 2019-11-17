import React from 'react';
import { NavLink } from 'react-router-dom'; 

import './Footer.scss';

const Footer = () => {
    return (
        <div className="Footer">
            <strong>All Rights Reserved, { new Date().getFullYear() }</strong>

            <ul>
                <li><NavLink to="/" exact >Home</NavLink></li>
                <li><NavLink to="/auth" >Authentication</NavLink></li>
            </ul>
        </div>
    );
};

export default Footer; 