import React from 'react'
import ReactDOM from 'react-dom'
import './assets/index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.min.css'
import { store, rrfProps } from './Utils/store'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'

ReactDOM.render(
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <React.StrictMode>
          <App/>
        </React.StrictMode>
      </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root')
)
reportWebVitals()
