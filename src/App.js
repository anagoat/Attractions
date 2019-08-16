import React, { Component } from 'react';
import './App.scss';
// import PropTypes from 'prop-types';

import Toolbar from './components/Toolbar/Toolbar';
import Attractions from './containers/Attractions/Attractions';
import Sidebar from './containers/Sidebar/Sidebar';

class App extends Component {
    constructor (props) {
        super(props)

        this.state = {
            searchField: ''
        }
    }
    render () {
        return ( 
            <div className="App">
            <Toolbar search = {this.state.searchField} />
            <Attractions />
            <Sidebar />
        </div>
        )
    }
}


// App.propTypes = {
// };

export default App;
