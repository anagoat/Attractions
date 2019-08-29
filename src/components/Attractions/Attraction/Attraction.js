import React from 'react';
import PropTypes from 'prop-types';

import './Attraction.scss';
import Button from '../../UI/Button/Button';

const Attraction = ( { attractionsList, countries } ) => {
    const [ {name}, {description}, {picture}, {shortDescription} ] = attractionsList;
    const { country, countryRu, flag, descriptionCountry } = countries;

    return (
        <div className="Attraction">
            <h1>{countryRu}</h1>

            <div className="attractionContent">
                <div className="ImageWrapper">
                    <img src={flag} alt={descriptionCountry} />
                </div>
            </div>
            <p>{descriptionCountry}</p>
                <Button>read more</Button>
        </div>
    );
};

Attraction.propTypes = {
    attractionsList: PropTypes.array
};

export default Attraction;

