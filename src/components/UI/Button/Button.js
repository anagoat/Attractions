import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ type, clicked, children }) => (
    <button
        className='Button'
        type={type}
        onClick={clicked}    
    >
        {children}
    </button>

)

Button.propTypes = {
    type: PropTypes.string,
    clicked: PropTypes.func
    
};

export default Button;