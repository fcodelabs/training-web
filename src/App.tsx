import { createContext, useState } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import Diary from "./views/diary/pages/Diary";
import SignInPage from "./views/signin/pages/SignIn";

export const UserContext = createContext<any>({});

function App() {
  const [user, setUser] = useState("");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/" element={<Navigate to={"sign-in"} replace />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
