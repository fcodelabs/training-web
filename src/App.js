import './App.css';
import { Container} from "react-bootstrap";
import {BrowserRouter, Route} from "react-router-dom";
import DiaryHome from "./Pages/DiaryHome";
import LoginPage from "./Pages/LoginPage";
import Header from "./Components/Header";

function App() {
    return (
        <BrowserRouter>
            <Container fluid className={'vh-100 main'}>
                <Header/>
                <Route exact path={'/'}>
                    <DiaryHome/>
                </Route>
               <Route path={'/login'}>
                   <LoginPage/>
               </Route>
            </Container>
        </BrowserRouter>
    );
}

export default App;
