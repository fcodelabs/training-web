import { Route } from 'react-router-dom';
import SignIn from './pages/SignIn/SignIn';
import Home from './pages/DiaryHome/DiaryHome';

const routes = (
  <>
    <Route path="/" element={<SignIn />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="/home" element={<Home />} />
  </>
);

export default routes;