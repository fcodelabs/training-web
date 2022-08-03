import SignIn from "./pages/SignIn/SignIn";
import DiaryCard from "./component/DiaryCard/DiaryCard";

import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import DiaryHome from "./pages/DiaryHome/DiaryHome";

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
        <Route path="/diaryHome" element={<DiaryHome/>}/>
      </Routes>
   </BrowserRouter>
  
  );
}

export default App;
