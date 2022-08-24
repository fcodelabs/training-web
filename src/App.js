import "./App.css";
import ToDoListPage from "./Pages/ToDoList";
import SignIn from "./components/SignComponent/SignIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/cart" element={<ToDoListPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
