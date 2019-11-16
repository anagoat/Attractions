import { TOGGLE_LOADING, SET_ATTRACTIONS_LIST } from '../actionsTypes';
// import { dispatch } from 'rxjs/internal/observable/pairs';
import attractionsData from '../../assets/data/attractions.json';


export const fetchAttractions = attractionsList => {
    return dispatch => {
        dispatch(toggleLoading(true));
        dispatch(setAttractionsList(attractionsData));
    };
};

const toggleLoading = status => {
    return {
        type: TOGGLE_LOADING,
        status
    };
};

const setAttractionsList = attractions => {
    return {
        type: SET_ATTRACTIONS_LIST,
        attractions
    };
};
