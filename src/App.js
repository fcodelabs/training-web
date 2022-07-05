import './App.css';
import DiaryCard from './components/DiaryCard';
import MainHeader from './components/MainHeader';
import Title from './components/Title';

function App() {
  const text =
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution';
  return (
    <>
      <MainHeader />
      <main style={{ padding: '5px' }}>
        <Title />
        <DiaryCard
          name={'test'}
          title={'React'}
          subtitle={'Learning React'}
          description={text}
          cardColor={'#b6fce5'}
        />
      </main>
    </>
  );
}

export default App;
