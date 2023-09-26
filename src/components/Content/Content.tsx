import { Route, Routes } from "react-router-dom";
import SignInPage from "../../pages/SignInPage/SignInPage";
import DiaryHome from "../../pages/DiaryHomePage/DiaryHome";

export default function Content() {
  return (
    <Routes>
      <Route path="/" element={<SignInPage />} />
      <Route path="/home" element={<DiaryHome />} />
    </Routes>
  );
}
