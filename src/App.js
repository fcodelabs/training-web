
import './App.css';
import SignIn from './components/SignPage/SignIn'
import Cart from './components/ToDO/ToDo'
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
