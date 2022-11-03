import logo from './logo.svg';
import './App.css';
import SignInPage from '../src/pages/SignInPage/SignInPage'
import Dashboard from '../src/pages/Dashboard/Dashboard'
import DiaryCard from '../src/components/DiaryCard/DiaryCard'
import {BrowserRouter,Route,Routes}from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      {/* <Route exact path="/"element={<SignInPage/>}/>
      <Route path="Dashboard"element={<Dashboard/>}/> */}
      <Route path="/"element={<DiaryCard/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
