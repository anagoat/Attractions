import React from 'react';
import { Link } from 'react-router-dom'; 
import PropTypes from 'prop-types';

import './Attraction.scss';
import Button from '../../UI/Button/Button';

const Attraction = ( { attraction } ) => {
    const { name, description, picture,  shortDescription } = attraction;

    return (
        <div className="Attraction">
            <h1>{name}</h1>
            <div className="attractionContent">
                <div className="ImageWrapper">
                    <img src={picture} alt={shortDescription} />
                </div>
            </div>
            <p>{description}</p>
                <Button>
                    <li><Link to={'/'+ name}>read more</Link></li>
                </Button>
        </div>
    );
};

Attraction.propTypes = {
    attractionsList: PropTypes.array
};

export default Attraction;

