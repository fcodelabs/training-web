import './App.css';
import {Route,Routes,BrowserRouter} from "react-router-dom"
import DiaryCard from './component/pages/DiaryCard';
import LogIn from './component/pages/LogIn';
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
