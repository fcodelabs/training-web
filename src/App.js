import DiaryHome from './pages/DiaryHome/DiaryHome';
import SignInPage from './pages/SignInPage/SignInPage';
import { Route, Routes } from "react-router-dom";


function App() {
  return (

    <Routes>
      <Route exact path='/' element={<SignInPage/>} />
      <Route path='home' element={<DiaryHome/>} />
    </Routes>


  );
}

export default App;
