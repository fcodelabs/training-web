import './App.css';
import SignIn from './components/SignIn';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' Component={SignIn}/>
        <Route path='/home'/>
      </Routes>
    </div>
  );
}

export default App;
