import {Container} from "react-bootstrap";
import {BrowserRouter, Route} from "react-router-dom";
import DiaryHome from "./Pages/DiaryHome";
import LoginPage from "./Pages/LoginPage";
import Header from "./Components/Header";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchDiaryCards} from "./actions/diaryCard";


function App() {

    const login = useSelector(state => state.login)
    return (
        <BrowserRouter>
            <Header/>
            <Container fluid className={'vh-100 main'}>
                {
                    login.isLoggedIn
                        ?
                        <Route exact path={'/'}>
                            <DiaryHome/>
                        </Route>
                        :
                        <LoginPage/>
                }
                <Route path={'/login'}>
                    <LoginPage/>
                </Route>
            </Container>
        </BrowserRouter>
    );
}

export default App;
