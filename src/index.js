import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/store'
import {Provider} from "react-redux";
import {ReactReduxFirebaseProvider} from 'react-redux-firebase'
import rrfProps from "./firebase";

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root')
);
reportWebVitals();
