import logo from './logo.svg';
import './App.css';
import DiaryHomeTop from './Components/Header/DiaryHomeTop';
import DiaryHome from './Pages/HomePage/DiaryHome/DiaryHome';


function App() {
  return (
    <div className="App">

   <DiaryHomeTop/>
    <DiaryHome/>
    </div>
  );
}

export default App;
