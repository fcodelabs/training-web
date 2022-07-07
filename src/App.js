import { useEffect } from 'react';
import './App.css';
import DiaryHome from './components/DiaryHome';
import MainHeader from './components/MainHeader';
import Title from './components/Title';
import { firebaseConfig } from './firebaseConfig';

function App() {
  useEffect(() => {
    firebaseConfig();
  }, []);

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
