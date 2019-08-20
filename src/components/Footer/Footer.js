import React from 'react';
import { Link } from 'react-router-dom'; 

import './Footer.scss';

const Footer = () => {
    return (
        <div className="Footer">
            <strong>AllRights Reserved, { new Date().getFullUear() }</strong>

            <ul>
                <li><Link to="/" exact>Home</Link></li>
                <li><Link to="/"></Link></li>
                <li><Link to="/"></Link></li>
            </ul>
        </div>
    );
};

export default Footer; 