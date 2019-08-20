import React, { Component } from 'react';
import './App.scss';
// import PropTypes from 'prop-types';

import Toolbar from './components/Toolbar/Toolbar';
import Attractions from './components/Attractions/Attractions';
import Sidebar from './components/Sidebar/Sidebar';
import attractionsData from './assets/data/attractions.json';
// import Spinner from './components/UI/Spinner/Spinner';

class App extends Component {
    state = {
        searchField: '',
        isOpen: false,
        attractionsList: null,
        isFetching: false,
        country: ''
    }

    onChangeHandler = event => {
        this.setState({ searchField: event.target.value });
    }

    fetchShowplaceHandler = () => {
        this.setState(( prevState ) => ({
            isFetching: !prevState.isFetching
        }));

        const attractionsList = attractionsData;

        setTimeout(() => {
            this.setState(( prevState ) => ({
                attractionsList: attractionsList,
                isFetching: !prevState.isFetching
    
            })); 
        }, 100);

    }

    render () {
        const { searchField, isFetching, attractionsList} = this.state;

        return ( 
            <div className="App">
            <Toolbar 
                search = {searchField}
                isFetching={isFetching}
                changed={this.onChangeHandler}
                clicked={this.fetchShowplaceHandler}
            />

            <Sidebar 
                attractionsList={attractionsList}
            />

            <Attractions
                attractionsList={attractionsList}
            />
        </div>
        )
    }
}


// App.propTypes = {
// };

export default App;
