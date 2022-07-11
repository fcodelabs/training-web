import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import DiaryHome from './pages/DiaryHome.jsx';
import SignInPage from './pages/SignInPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { diaryActions } from './store/diary-slice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(diaryActions.getDiaries());
  }, [dispatch]);

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
