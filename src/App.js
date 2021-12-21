import DiaryHome from './Pages/DiaryHome/DiaryHome';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './Pages/Login/LoginForm';

function App() {
  return (
    <div className='content'>
      <Routes>
        <Route path="/" element={<LoginForm/>}></Route>
        <Route path='/home' element={<DiaryHome/>}></Route>
      </Routes>
    </div>    
  );
}

export default App;
