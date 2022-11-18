import React, { Suspense } from "react";
import { Routes } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

// const loading = (
//   <div className="pt-3 text-center">
//     <div className="sk-spinner sk-spinner-pulse"></div>
//   </div>
// );

const SignIn = React.lazy(() => import("./pages/SignIn/SignIn.js"));
const Home = React.lazy(() => import("./pages/DiaryHome/DiaryHome.js"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
