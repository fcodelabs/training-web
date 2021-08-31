import './App.css';
import DiaryHome from "./pages/DiaryHome/DiaryHome";
import {
    Switch,
    Route,
    useLocation
} from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
