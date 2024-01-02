import { Routes, Route } from 'react-router-dom';
import SignInPage from './containers/SignInPage/SignInPage';
import HomePage from './containers/HomePage/HomePage';
import 'react-toastify/dist/ReactToastify.css';
import { useAppSelector } from './redux/hooks';
import { ReactElement } from 'react';

const routes = [
  { path: '/', element: <SignInPage /> },
  { path: '/home', element: <HomePage /> },
];

const PrivateRoute = ( element: ReactElement, path: string ) => {
  const isAuthenticated = useAppSelector( (state) => state.user.isLogged );
  const defaultElement = <SignInPage/>;

  return ( isAuthenticated ? 
  < Route path={path} element={element} /> : 
  < Route path={path} element={defaultElement} />)
  
};

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
