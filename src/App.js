import './App.css';
import DiaryHome from './components/DiaryHome';
import MainHeader from './components/MainHeader';
import Title from './components/Title';

function App() {
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
