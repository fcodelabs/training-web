import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import DiaryHome from './pages/DiaryHome.jsx';
import SignInPage from './pages/SignInPage';

function App() {
  return (
    <>
      <main style={{ padding: '5px' }}>
        <Routes>
          <Route path='/' element={<Navigate to='/signin' />} />
          <Route path='/signin' element={<SignInPage />} />
          <Route path='/home/:name' element={<DiaryHome />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
