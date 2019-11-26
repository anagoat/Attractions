import React from 'react';
import PropTypes from 'prop-types';

import './Input.scss';

const Input = ({ type = 'text', name, placeholder, value, onChangeHandler, onBlurHandler }) => (
        <input 
            className="Input"
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
         />
)

Input.propTypes = {
    type: PropTypes.string, 
    placeholder : PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChangeHandler:PropTypes.func.isRequired,
    onBlurHandler:PropTypes.func,
    name:PropTypes.string.isRequired
};

export default Input;