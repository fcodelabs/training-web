import './App.css';
import { DiaryHome } from './components/DiaryHome';
import { DiarySignIn } from './components/DiarySignIn';
import {Routes,Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      {/* <MuiCard />/ */}
      <DiaryHome />
    </div>
  );
}

export default App;
