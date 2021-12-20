import DiaryHome from './Pages/DiaryHome/DiaryHome';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginFrom from './Pages/Login/LoginFrom';

function App() {
  return (
    <div className='content'>
      <Routes>
        <Route path="/" element={<LoginFrom/>}></Route>
        <Route path='/home' element={<DiaryHome/>}></Route>
      </Routes>
    </div>    
  );
}

export default App;
