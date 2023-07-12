import './App.css';
import { DiaryCard } from './components/DiaryCard/DiaryCard';
import { DiaryHome } from './containers/DiaryHome/DiaryHome';
import { DiarySignIn } from './containers/DiarySignIn/DiarySignIn';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<DiarySignIn />} />
          <Route path="/home" element={<DiaryHome />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;