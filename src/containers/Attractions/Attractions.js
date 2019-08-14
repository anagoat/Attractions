import React, { Component } from 'react';

import './Attractions.scss';
import Attraction from './Attraction/Attraction';

class Attractions extends Component {
    state = {
        
    }

    render() {
        return (
            <div className="Attractions">
                Attractions
                <Attraction />
            </div>
        );
    }
}

export default Attractions;