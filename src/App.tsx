import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import routes from './routes';


function App() {
  return (
    <Router>
      <Routes>
        {routes}
      </Routes>
    </Router>
  );
}

export default App;
