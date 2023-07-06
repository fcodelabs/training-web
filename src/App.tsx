import React from 'react';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Signin from './containers/Signin/Signin';

// Create a browser router configuration with routes
const router = createBrowserRouter([
  { path:'/', element:<Signin/>}
])
// Render the application with the RouterProvider and the configured router
function App() {
  return (
    <RouterProvider router = {router}/>
  );
}

export default App;
