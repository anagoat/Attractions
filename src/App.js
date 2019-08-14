import React from 'react';
import './App.scss';

import Toolbar from './components/Toolbar/Toolbar';
import Attractions from './containers/Attractions/Attractions';

const App = () => (

    <div className="App">
        <Toolbar />
        <Attractions />
    </div>
)
export default App;
