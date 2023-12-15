import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInPage from "../containers/SignInPage/SignInPage";
import HomePage from "../containers/HomePage/HomePage";
import { SIGN_IN_PATH, HOME_PATH } from "../utility/routeConstants";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path={SIGN_IN_PATH} element={<SignInPage/>}/>
                <Route path={HOME_PATH} element={<HomePage/>}/>
                
            </Routes>
        </Router>
        
    );
};

export default AppRoutes;