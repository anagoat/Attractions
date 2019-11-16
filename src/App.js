import React, { Component } from 'react';
import './App.scss';
import  { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Toolbar from './components/Toolbar/Toolbar';
import Attractions from './components/Attractions/Attractions';
import Sidebar from './components/Sidebar/Sidebar';
import attractionsData from './assets/data/attractions.json';
import Footer from './components/Footer/Footer';
import { fetchAttractions } from './store/actions/movies';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
    }
}

    componentDidMount() {
        fetchAttractions();
    };
    render () {
        const { searchField,  startPage} = this.state;
        const { isFetching, attractionsList} = this.props;
        
        return ( 
            <div className="App">
            <Toolbar 
                search = {searchField}
                isFetching={isFetching}
                changed={this.onChangeHandler}
                clicked={() => fetchAttractions(searchField)}
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

const mapStateToProps = state => {
    return {
        attractionsList: state.movies.attractionsList,
        isFetching: state.movies.isFetching
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAttractions: () => dispatch(fetchAttractions())
    };
};

// export default withRouter(wrapper(App));
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);


// yarn add react-router-dom
// npm i -g yarn
// yarn add node-sass -D
// yarn add redux
// https://maxfarseer.gitbooks.io/react-router-course-ru/content/dopisivaem_routi.html
// хорошая статья про роутер
// https://www.youtube.com/channel/UCqJyAVWwIqPWKEkfCSP1y4Q
// npm i redux react-redux
