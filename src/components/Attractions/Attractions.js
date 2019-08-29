import React from 'react';
import PropTypes from 'prop-types';

import Spinner from '../UI/Spinner/Spinner';
import Attraction from './Attraction/Attraction';
import './Attractions.scss';

const Attractions = ({ attractionsList, isFetching, a }) => {
    console.log('[a]', a);
    console.log('[attractionsList]', attractionsList);
        const attractions = attractionsList ? attractionsList.map(attraction => (
            <Attraction 
                key={attraction.id}
                attractionsList={attraction.attractions}
                countries={attraction}
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