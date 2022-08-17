
import './App.css';
import SignIn from './components/signIn/signIn'
import Cart from './components/toDoText/toDoTextBox'
import {BrowserRouter, Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>

        <Route path='/' element={<SignIn/>} />
        <Route path='/cart' element={<Cart/>} />
        
        </Routes>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
