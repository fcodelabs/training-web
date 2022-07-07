import { useEffect } from 'react';
import './App.css';
import DiaryHome from './components/DiaryHome.jsx';
import MainHeader from './components/MainHeader.jsx';
import Title from './components/Title.jsx';
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
