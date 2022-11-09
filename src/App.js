
import './App.css';
import SignInPage from '../src/pages/SignInPage/SignInPage'
import DiaryHome from '../src/pages/DiaryHome/DiaryHome'
import {BrowserRouter,Route,Routes}from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route exact path="/"element={<SignInPage/>}/>
      <Route path="DiaryHome"element={<DiaryHome/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
