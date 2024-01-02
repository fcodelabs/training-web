import { Routes, Route } from 'react-router-dom';
import SignInPage from './containers/SignInPage/SignInPage';
import HomePage from './containers/HomePage/HomePage';
import 'react-toastify/dist/ReactToastify.css';
import { useAppSelector } from './redux/hooks';
import { ReactElement } from 'react';

export const routes = [
    { path: '/', element: <SignInPage /> },
    { path: '/home', element: <HomePage /> },
  ];
  
export const PrivateRoute = ( element: ReactElement, path: string ) => {
    const isAuthenticated = useAppSelector( (state) => state.user.isLogged );
    const defaultElement = <SignInPage/>;
  
    return ( isAuthenticated ? 
    < Route path={path} element={element} /> : 
    < Route path={path} element={defaultElement} />)
    
  };