import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import SignInPage from './containers/SignInPage/Page/SignInPage';
import HomePage from './containers/HomePage/HomePage';

function App() {
  return (
    <div>
      <Layout />
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>

  );
}

export default App;

