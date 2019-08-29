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
        isFetching: false,
        a:null
    }
    func = () => {
        this.setState({a: this.props.location.search}) ;
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
        const { searchField, isFetching, attractionsList, a} = this.state;

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
{/* 
            <Attractions
                attractionsList={attractionsList}
                isFetching={isFetching}
            /> */}

            <Route path="/:id" render={ () => (
                <Attractions
                    attractionsList={attractionsList}
                    isFetching={isFetching}
                    a={a}
                />
            )}
            /> 
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