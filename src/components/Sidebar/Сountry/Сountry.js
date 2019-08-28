import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; 


import './Сountry.scss';

const Сountry = ({country, flag}) => {

    return (
        <div className="Сountry">
            <ul>
            <li><Link to={'/'+ country}><img className="Flag" src={flag} alt="ollo"/><p>{country}</p></Link></li>
            </ul>
        </div>
    );
};

Сountry.propTypes = {
    onClick: PropTypes.func
};

export default Сountry;