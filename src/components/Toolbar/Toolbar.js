import React from 'react';
import PropTypes from 'prop-types';

import './Toolbar.scss';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

const Toolbar = ( { search, isFetching, changed, clicked } ) => (

    <div className="Toolbar">
            <Input 
                name="seatchField"
                placeholder="Search..."
                value={search}
                onChangeHandler={changed}
            />

            <Button clicked={clicked}>
                { isFetching ? 'Searching...' : 'Search' }
            </Button>
        </div>
);

Toolbar.propTypes = {
    search: PropTypes.string.isRequired,
    changed:PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    clicked: PropTypes.func
};

export default Toolbar;