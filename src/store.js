import {configureStore,applyMiddleware,compose} from 'redux';  

//const initialState = {};

const store = configureStore(
    
    //initialState,

    compose(
        applyMiddleware(...applyMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    )
);

export default store;