import React from 'react';
import PropTypes from 'prop-types';


import './Сountry.scss';

const Сountry = ({country}) => {

    return (
        <div className="Сountry"
        >
            <p><a href="##########">{country}</a></p>
        </div>
    );

    
};

Сountry.propTypes = {
    onClick: PropTypes.func
};

export default Сountry;