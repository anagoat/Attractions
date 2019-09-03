const initialState = {  
    name: 'Mike',
    age: 53
};

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'CHANGE_NAME': 
            return {
                ...state,
                name:action.name
            };

        default: return state;
    }
};

export default reducer;