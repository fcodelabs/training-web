import { Route, Routes } from "react-router-dom";
import SignInPage from "../../pages/SignInPage/SignInPage";
import DiaryHome from "../../pages/DiaryHomePage/DiaryHome";
import { signIn, home } from "../../util/RoutesUtil";

export default function Content() {
  return (
    <Routes>
      <Route path={signIn} element={<SignInPage />} />
      <Route path={home} element={<DiaryHome />} />
    </Routes>
  );
}
