import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; 


import './Сountry.scss';

const Сountry = ({country, flag}) => {

    return (
        <div className="Сountry">
            <ul>
            {/* <p><a href={flag}>{country}</a></p> */}
            <l1><Link to="/iceland"><img className="Flag" src={flag} alt="ollo"/>{country}</Link></l1>

            </ul>
        </div>
    );
};

Сountry.propTypes = {
    onClick: PropTypes.func
};

export default Сountry;