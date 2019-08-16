import React from 'react';
import PropTypes from 'prop-types';

import './Input.scss';

const Input = ({ type = 'text', placeholder }) => (
        <input 
            className="Input"
            type={type}
            placeholder={placeholder}
            value=''
         />
)

Input.propTypes = {
    placegolder: PropTypes.string, 
};

export default Input;