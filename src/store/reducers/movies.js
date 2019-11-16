import * as  actionsTypes  from '../actionsTypes';
import attractionsData from '../../assets/data/attractions.json';


const initialState = {  
    isFetching: false,
    attractionsList: attractionsData
};

const toggleLoading = (state, action) => {
        return {
            ...state,
            isFetching : action.status
        };
};

const setAttractionsList = (state, action) => {
        return {
            ...state,
            attractionsList : action.attractions
        };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.TOGGLE_LOADING: return toggleLoading(state, action);
        case actionsTypes.SET_ATTRACTIONS_LIST: return setAttractionsList(state, action);
        default: return state;
    }
}; 

export default reducer;