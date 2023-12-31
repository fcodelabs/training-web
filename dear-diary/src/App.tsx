import { Routes, Route } from 'react-router-dom';
import SignInPage from './containers/SignInPage/SignInPage';
import HomePage from './containers/HomePage/HomePage';
import 'react-toastify/dist/ReactToastify.css';

const routes = [
  { path: '/', element: <SignInPage /> },
  { path: '/home', element: <HomePage /> },
];


function App() {
  return (
    <div>
      <Routes>
      {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
          
        ))}
      </Routes>
    </div>
  );
}

export default App;

