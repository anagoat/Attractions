const initialState = {  
    sayHello : false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAY_HELLO': 
            return { sayHello : true };
            default: return state;
    }
};

export default reducer;