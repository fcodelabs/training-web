import './App.css';
import DiaryCard from './components/DiaryCard';
import DiaryHome from './components/DiaryHome';



function App() {
  return (
    <div className="App">
      <DiaryHome />
      <DiaryCard tittle='Task1' subtitle='subtitle' color='red' description='simple text'/>
    </div>
  );
}

export default App;
