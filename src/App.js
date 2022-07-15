import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import DiaryHome from './pages/DiaryHome.jsx';
import SignInPage from './pages/SignInPage';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { diaryActions } from './store/diary-slice';
import CircularIndeterminate from './components/CircularIndeterminate';

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    dispatch(diaryActions.getDiaries());
  }, [dispatch]);

  return (
    <>
      {loading && <CircularIndeterminate />}
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
