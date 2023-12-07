import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import SignInPage from './containers/SignInPage/SignInPage';
import HomePage from './containers/HomePage/Page/HomePage';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div>
      <ToastContainer/>
      <Layout />
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>

  );
}

export default App;

