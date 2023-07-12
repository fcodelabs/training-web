import './App.css';
import SignIn from './pages/Signin/SignIn';
import Form from './pages/Form/Form';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' Component={SignIn}/>
        <Route path='/home' Component={Form}/>
      </Routes>
    </div>
  );
}

export default App;
