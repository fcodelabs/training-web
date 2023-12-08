import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInPage from "../containers/SignInPage/SignInPage";
import HomePage from "../containers/HomePage/HomePage";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignInPage/>}/>
                <Route path='/home' element={<HomePage/>}/>
                
            </Routes>
        </Router>
        
    );
};

export default AppRoutes;