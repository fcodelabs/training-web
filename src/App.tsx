import { Route, Navigate, Routes } from "react-router-dom";
import Diary from "./views/diary/pages/Diary";
import SignInPage from "./views/signin/pages/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/diary" element={<Diary />} />
      <Route path="/" element={<Navigate to={"sign-in"} replace />} />
    </Routes>
  );
}

export default App;
