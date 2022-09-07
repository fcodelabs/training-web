import './App.css';
import {Route,Routes,BrowserRouter} from "react-router-dom"
import DiaryCard from './component/Pages/DiaryCard';
import LogIn from './component/Pages/LogIn';
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
