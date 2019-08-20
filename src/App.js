import React, { Component } from 'react';
import './App.scss';
import  { Route } from 'react-router-dom';

import Toolbar from './components/Toolbar/Toolbar';
import Attractions from './components/Attractions/Attractions';
import Sidebar from './components/Sidebar/Sidebar';
import attractionsData from './assets/data/attractions.json';
import Footer from './components/Footer/Footer';

class App extends Component {
    state = {
        searchField: '',
        isOpen: false,
        attractionsList: null,
        isFetching: false
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

            <Route path="/" render={() => (
                <Sidebar 
                attractionsList={attractionsList}
                />
            )}/>

            <Footer />
        </div>
        )
    }
}


export default App;


// yarn add react-router-dom
// npm i -g yarn
// yarn add node-sass -D
