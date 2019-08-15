import React from 'react';
import './App.scss';

import Toolbar from './components/Toolbar/Toolbar';
import Attractions from './containers/Attractions/Attractions';
import Sidebar from './containers/Sidebar/Sidebar';

const App = () => (

    <div className="App">
        <Toolbar />
        <Attractions />
        <Sidebar />
    </div>
)
export default App;
