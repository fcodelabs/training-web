import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store'
import {addDiaryCard, removeDiaryCard} from "./actions/diaryCard";

import {Provider} from "react-redux";
//
// const unsubscribe = store.subscribe(() => {
//     console.log('store changed', store.getState())
// })
store.dispatch(addDiaryCard('New Title','Salitha' ,'Hello world qwe rty abc'))
store.dispatch(addDiaryCard('New Title','Salitha' ,'Hello world qwe rty abc'))
store.dispatch(addDiaryCard('New Title','Salitha' ,'Hello world qwe rty abc'))

setTimeout(()=>store.dispatch(removeDiaryCard(1)), 5000)
// store.dispatch(removeDiaryCard(1))

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>
    ,
    document.getElementById('root')
);
reportWebVitals();
