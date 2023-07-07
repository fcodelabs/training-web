import React from 'react';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Signin from './containers/Signin/Signin';
import DiaryHome from './containers/DiaryHome/DiaryHome';
import { Container} from "@mui/material";

// Create a browser router configuration with routes
const router = createBrowserRouter([
  { path:'/', element:<Signin/>},
  { path:'/home', element:<DiaryHome/>}
])
// Render the application with the RouterProvider and the configured router
function App() {
  return (
    <Container
        maxWidth="xl"
        sx={{
          backgroundImage:
            "linear-gradient(-45deg, #039BE5 0%, #039BE5 33%, #00BCD4 100%);",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
            <RouterProvider router = {router}/>
    </Container>
  );
}

export default App;
