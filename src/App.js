import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <div>
           <p>Testing Application for Training People</p>
       </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         This is the test application for new training people
        </a>
          <p>
              Hello People. Welcome to the training Project
          </p>
      </header>
    </div>
  );
}

export default App;
