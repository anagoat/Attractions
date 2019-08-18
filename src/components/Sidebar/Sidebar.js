import React from 'react';

import './Sidebar.scss';
import Сountry from './Сountry/Сountry';
import Spinner from '../UI/Spinner/Spinner';



const Sidebar = ( { attractionsList, isFetching } ) => {
    console.log('[attractionsList]', attractionsList);
    const country = attractionsList ? attractionsList.map(attraction => (
        // eslint-disable-next-line react/jsx-pascal-case
        <Сountry 
            key={attraction.id}
            country={attraction.name}
        />
        )): null;
         
return (
    <div className="Sidebar">
        { isFetching && <Spinner /> }
        {country}
    </div>
);
}   

export default Sidebar;
