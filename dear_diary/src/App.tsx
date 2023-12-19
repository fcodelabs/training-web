import DiaryHomePage from './Pages/DiaryHome/DiaryHomePage';
import SignInPage from './Pages/SignInPage/SignInPage';
import LayoutBackground from './Components/LayoutBackground/LayoutBackground';
import { createBrowserRouter , Route, Link, createRoutesFromElements, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
        <Route index element={<SignInPage/>}/>
        <Route path="/diary-home" element={<DiaryHomePage/>}/>
      </Route>
  )
)

function App() {
  return ( 
    
    <RouterProvider router={router}
    />
      
  );
}

export default App;
