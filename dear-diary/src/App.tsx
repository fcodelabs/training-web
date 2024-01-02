import { Routes, Route } from 'react-router-dom';
import SignInPage from './containers/SignInPage/SignInPage';
import HomePage from './containers/HomePage/HomePage';
import 'react-toastify/dist/ReactToastify.css';
import { useAppSelector } from './redux/hooks';
import { ReactElement } from 'react';
import { routes, PrivateRoute } from './routes';

function App() {
  return (
    <div>
      <Routes>
        {routes.map((route, index) => (
          PrivateRoute ( route.element, route.path ) 
        ))}
      </Routes>
    </div>
  );
}

export default App;
