import SignIn from "./pages/SignIn/SignIn";
import DiaryCard from "./component/DiaryCard/DiaryCard";

import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Switch,
  
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
        <Route path="/diaryHome/:name"  element={<DiaryHome/>}/>
        <Route path="/diaryCard" element={<DiaryCard/>}/>
      </Routes>
      
   </BrowserRouter>
   
  
  );
}

export default App;
