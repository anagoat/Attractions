import React from 'react';
import PropTypes from 'prop-types';

import Spinner from '../UI/Spinner/Spinner';
import Attraction from './Attraction/Attraction';
import './Attractions.scss';

const Attractions = ({ attractionsList, isFetching, match}) => {
    console.log('[isFetching]',isFetching );


    
    const selectedCountry = match.params.selectedCountry;
    const selectedAttractions = attractionsList.find(attraction => attraction.country === selectedCountry);

    console.log('[selectedCountry]', selectedCountry);
    console.log('[attractionsList]', attractionsList);
    console.log('[selectedAttractions]', selectedAttractions);
    const a = selectedAttractions.attractions;
    console.log('[a]', a);

        const attractions = a ? a.map(attraction => (
            <Attraction 
                key={attraction.id}
                attraction={attraction}
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