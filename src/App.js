import React, { Component } from 'react';
import './App.scss';
import  { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Toolbar from './components/Toolbar/Toolbar';
import Attractions from './components/Attractions/Attractions';
import Sidebar from './components/Sidebar/Sidebar';
import attractionsData from './assets/data/attractions.json';
import Footer from './components/Footer/Footer';
import Auth from './components/Auth/Auth';
import { fetchAttractions } from './store/actions/movies';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchField: '',
            email: '',
            password: '',
            mode: 'signup'
        }
    }

    onChangeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onBlurHandler = e => {
        console.log('%c[BLUR]', 'color: orange');
        console.log('[e.target]', e.target);
    }
    

    componentDidMount() {
        fetchAttractions();
    };

    onSubmitHandler = e => {
        e.preventDefault();

        const { email, password } = this.state;

        const submitedData = {
            email,
            password
        }

        console.log('%c[SUBMITTED]', 'color: green; font-sty: italic;');
        console.log( JSON.stringify(submitedData, null, 2));
    }

    switchModeHandler =() => {
        this.setState(prevState => ({
            mode: prevState.mode === 'signup' ? 'signin' : 'signup'
        }))
    }

    render () {
        const { searchField,  startPage, email, password, mode} = this.state;
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
                <Route path="/auth" render={props => (
                    <Auth
                        {...props}    
                        email={email}
                        password={password}
                        mode={mode}
                        onChangeHandler={this.onChangeHandler}
                        onSubmitHandler={this.onSubmitHandler}
                        switchModeHandler={this.switchModeHandler}
                        onBlurHandler={this.onBlurHandler}
                    />

                )} /> 
                
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
// https://uigradients.com/