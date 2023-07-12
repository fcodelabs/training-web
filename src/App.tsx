import React from 'react';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import SignIn from './containers/SignIn/SignIn';
import DiaryHome from './containers/DiaryHome/DiaryHome';
import { Container} from "@mui/material";

const containerStyles = {
  backgroundImage:"linear-gradient(-45deg, #039BE5 0%, #039BE5 33%, #00BCD4 100%);",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
  display: "flex",
  flexDirection:"column",
  alignItems: "center",
  justifyContent: "center",
}

function App() {

  // Create a browser router configuration with routes
  const router = createBrowserRouter([
    { path:'/', element:<SignIn/>},
    { path:'/home', element:<DiaryHome/>}
  ]);

  return (
    <Container maxWidth="xl" sx={containerStyles}>
      <RouterProvider router = {router}/>
    </Container>
  );
}

export default App;
