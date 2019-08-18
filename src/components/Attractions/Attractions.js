import React from 'react';
import PropTypes from 'prop-types';

import Spinner from '../UI/Spinner/Spinner';
import Attraction from './Attraction/Attraction';
import './Attractions.scss';

const Attractions = ({ attractionsList, isFetching }) => {
        const attractions = attractionsList ? attractionsList.map(attraction => (
            <Attraction 
                key={attraction.id}
                attractionsList={attraction}
            />
            )): null;
             
    return (
        <div className="Attractions">
            { isFetching && <Spinner /> }
            {attractions}
        </div>
    );
};

Attractions.propTypes = {
    attractionsLis: PropTypes.array,
    isFetching: PropTypes.bool.isRequired
};

export default Attractions;