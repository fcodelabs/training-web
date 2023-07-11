import './App.css';
import { DiaryHome } from './components/DiaryHome';
import { DiarySignIn } from './components/DiarySignIn';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* {<DiarySignIn />} */}
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