import React from 'react';
import PropTypes from 'prop-types';


import './Toolbar.scss';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

const Toolbar = ( {search} ) => {
    return (
        <div className="Toolbar">
            Toolbar
            <Input placeholder="Search..." />
            <Button />
        </div>
    );
};

Toolbar.propTypes = {
    search: PropTypes.string.isRequired
};

export default Toolbar;