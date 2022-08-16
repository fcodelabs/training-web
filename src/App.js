
import './App.css';
import SignUp from './components/SignUp/SignUp';
import Navbar from './components/layout/Navbar';
import Todo from './components/todo/Todo';


function App() {
  return (
    <div >
      <Navbar/>
      <Todo/>
      {/* <header className="App App-header">
        < SignUp/>
      </header> */}
    </div>
  );
}

export default App;
