import {Route, Switch} from "react-router-dom";
import AllDiary from "./components/pages/AllDiary";
import LoginPage from "./components/pages/LoginPage";
import Layout from "./components/layout/Layout";
import DiaryHome from "./components/pages/DiaryHome";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path='/' exact={true}>
                    <DiaryHome/>
                </Route>
                <Route path='/home-page'>
                    <LoginPage/>
                </Route>
                <Route path='/all-diary'>
                    <AllDiary/>
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
