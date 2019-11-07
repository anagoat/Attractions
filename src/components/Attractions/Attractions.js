import React from 'react';
import PropTypes from 'prop-types';

// import Spinner from '../UI/Spinner/Spinner';
import Attraction from './Attraction/Attraction';
import './Attractions.scss';

const Attractions = ({ attractionsList, isFetching, match, startPage }) => {
    if (startPage) return (
        <div className="AttractionsNull"></div>
    );

    const selectedCountry = match.params.selectedCountry;
    const selectedAttractions = selectedCountry ? attractionsList.find(attraction => attraction.country === selectedCountry): null;
    const a = selectedAttractions ? selectedAttractions.attractions: null;

        const attractions = a ? a.map(attraction => (
            <Attraction 
                key={attraction.id}
                attraction={attraction}
            />
            )): null;
    return ( 
        <div className="Attractions">
            {/* { isFetching && <Spinner /> } */}
            { isFetching  }
            {attractions}                       
        </div>
    );
};

Attractions.propTypes = {
    attractionsLis: PropTypes.array,
    isFetching: PropTypes.bool.isRequired
};

export default Attractions;