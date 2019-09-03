import React from 'react';

import './Sidebar.scss';
import Сountry from './Сountry/Сountry';
import Spinner from '../UI/Spinner/Spinner';



const Sidebar = ( { attractionsList, isFetching} ) => {
    const country = attractionsList ? attractionsList.map(attraction => (
        // eslint-disable-next-line react/jsx-pascal-case
        <Сountry 
            key={attraction.id}
            country={attraction.country}
            flag={attraction.flag}
            countryRu={attraction.countryRu}

            >
         </Сountry>
        )): null;
         
return (
    <div className="Sidebar">
        { isFetching && <Spinner /> }
        {country}
    </div>
);
}   

export default Sidebar;
