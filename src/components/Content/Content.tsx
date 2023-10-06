import { Route, Routes } from "react-router-dom";
import SignInPage from "../../pages/SignInPage/SignInPage";
import DiaryHome from "../../pages/DiaryHomePage/DiaryHome";
import { SIGN_IN, HOME } from "../../util/routesUtil";

export default function Content() {
  return (
    <Routes>
      <Route path={SIGN_IN} element={<SignInPage />} />
      <Route path={HOME} element={<DiaryHome />} />
    </Routes>
  );
}
