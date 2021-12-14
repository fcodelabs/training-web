import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {store} from './store';
import {getFirebase, ReactReduxFirebaseProvider} from "react-redux-firebase";
import thunk from 'redux-thunk';


ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';
// import {combineReducers,createStore, applyMiddleware} from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import Reducer from './Reducer';
// import {getFirebase, ReactReduxFirebaseProvider} from "react-redux-firebase";
// import firebase from './config/firebaseConfig';
// import { createFirestoreInstance } from 'redux-firestore';
// import mySaga from './sagas'

// const sagaMiddleware = createSagaMiddleware();

// const rootReducer=combineReducers({myFirstReducer});

// const store = createStore(Reducer, applyMiddleware(sagaMiddleware));

// sagaMiddleware.run(rootSaga);

// //const store= createStore(Reducer,applyMiddleware(thunk.withExtraArgument({getFirebase})));
// //const store=createStore(Reducer);
// // const rrfProps={
// //   firebase,
// //   config:{},
// //   dispatch: store.dispatch,
// //   createFirestoreInstance
// // }

// ReactDOM.render(
//   <Provider store={store}>
//   <ReactReduxFirebaseProvider{...rrfProps}>
//   <App />
//   </ReactReduxFirebaseProvider>
//   </Provider>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
