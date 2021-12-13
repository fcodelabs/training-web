import logo from './logo.svg';
import './App.css';
import DiaryHome from './components/DiaryHome';
import DiaryHomeTop from './components/DiaryHomeTop';

function App() {
  return (
    <div className="App">
   <DiaryHomeTop/>
    <DiaryHome/>
    </div>
  );
}

export default App;
