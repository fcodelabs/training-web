import React from 'react';
import Layout from './components/Layout/Layout';
import SignInPage from './containers/signinPage/Page/SignInPage';
import HomePage from './containers/HomePage/HomePage';

function App() {
  return (
    <div className="App">
       <Layout />
       <SignInPage />
       <HomePage />
    </div>
  );
}

export default App;
