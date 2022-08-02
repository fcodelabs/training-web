import SignIn from "./pages/SignIn/SignIn";
import DiaryCard from "./pages/DiaryCard/DiaryCard";

import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  
   
  return (
   // <SignIn />
  //  <Switch>
  //   <Route path="/SignIn">
  //     <SignIn /></Route>
  //   <Route path="/DiaryCard">
  //     <DiaryCard />
  //   </Route>
  //  </Switch>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />}/>
        <Route path="/diary" element={<DiaryCard />}/>
      </Routes>
   </BrowserRouter>
  
  );
}

export default App;
