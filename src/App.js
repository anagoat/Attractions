import React, { Component } from 'react';
import './App.scss';
import  { Route, Switch } from 'react-router-dom';

import Toolbar from './components/Toolbar/Toolbar';
import Attractions from './components/Attractions/Attractions';
import Sidebar from './components/Sidebar/Sidebar';
import attractionsData from './assets/data/attractions.json';
import Footer from './components/Footer/Footer';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
        searchField: '',
        attractionsList: attractionsData,
        isOpen: false,
        isFetching: false,
        startPage: true
    }
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
        const { searchField, isFetching, attractionsList, startPage} = this.state;

        return ( 
            <div className="App">
            <Toolbar 
                search = {searchField}
                isFetching={isFetching}
                changed={this.onChangeHandler}
                clicked={this.fetchShowplaceHandler}
            />

            <Sidebar  attractionsList={attractionsList} />

            <Switch>
                <Route path="/:selectedCountry" extend render={props => (
                    <Attractions 
                        {...props}
                        attractionsList={attractionsList}
                        isFetching={isFetching}
                    />
                )} />
                <Route path="/" extend render={props => (
                    <Attractions 
                        {...props}
                        attractionsList={attractionsList}
                        isFetching={isFetching}
                        startPage={startPage}
                    />
                )} /> 

            </Switch>

            <Footer />
        </div>
        )
    }
}


// export default withRouter(wrapper(App));
export default (App);


// yarn add react-router-dom
// npm i -g yarn
// yarn add node-sass -D
// yarn add redux
// https://maxfarseer.gitbooks.io/react-router-course-ru/content/dopisivaem_routi.html
// хорошая статья про роутер
// https://www.youtube.com/channel/UCqJyAVWwIqPWKEkfCSP1y4Q
// npm i redux react-redux

