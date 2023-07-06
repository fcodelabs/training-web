import React from 'react';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Signin from './containers/Signin/Signin'
const router = createBrowserRouter([
  { path:'/', element:<Signin/>}
])
function App() {
  return (
    <RouterProvider router = {router}/>
  );
}

export default App;
