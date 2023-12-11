import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import SignInPage from './containers/SignInPage/SignInPage';
import HomePage from './containers/HomePage/Page/HomePage';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const routes = [
  { path: '/', element: <SignInPage /> },
  { path: '/home', element: <HomePage /> },
];



function App() {
  return (
    <div>
      <ToastContainer/>
      <Layout />
      <Routes>
      {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;

