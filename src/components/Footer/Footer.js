import React from 'react';
import { Link } from 'react-router-dom'; 

import './Footer.scss';

const Footer = () => {
    return (
        <div className="Footer">
            <strong>AllRights Reserved, { new Date().getFullYear() }</strong>

            <ul>
                <li><Link to="/" >Home</Link></li>
            </ul>
        </div>
    );
};

export default Footer; 