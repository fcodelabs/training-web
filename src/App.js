import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import DiaryHome from './components/DiaryHome.jsx';
import MainHeader from './components/MainHeader.jsx';
import Title from './components/Title.jsx';
import { diaryActions } from './store/diary-slice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(diaryActions.getDiaries());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <>
      <MainHeader />
      <main style={{ padding: '5px' }}>
        <Title />
        <DiaryHome />
      </main>
    </>
  );
}

export default App;
