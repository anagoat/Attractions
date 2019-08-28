import React from 'react';


const wrapper = WrappedComponent => {
    const dummyState = {
        name: 'Mike',
        age: 53,
        color: 'black'
    };

    return () => (
        <WrappedComponent {...dummyState} />
    );
};

export default wrapper;