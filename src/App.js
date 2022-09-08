import './App.css';
import {Route,Routes,BrowserRouter} from "react-router-dom"
import DiaryCard from './component/DiaryCard';
import LogIn from './component/LogIn';
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/home" element={<DiaryCard />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
