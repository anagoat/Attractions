import React from 'react';

import './Toolbar.scss';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

const Toolbar = () => {
    return (
        <div className="Toolbar">
            Toolbar
            <Input />
            <Button />
        </div>
    );
};

export default Toolbar;