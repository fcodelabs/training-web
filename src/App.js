import logo from './logo.svg';
import './App.css';
import DiaryHome from './Pages/DiaryHome/DiaryHome';
import DiaryHomeTop from './Components/Header/DiaryHomeTop';


function App() {
  return (
    <div className="App">

   <DiaryHomeTop/>
    <DiaryHome/>
    </div>
  );
}

export default App;
