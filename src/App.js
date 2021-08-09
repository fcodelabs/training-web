import './App.css';
import { Container} from "react-bootstrap";
import {BrowserRouter, Route} from "react-router-dom";
import NewCardForm from "./components/NewCardForm";
import DiaryHome from "./Pages/DiaryHome";
import LoginPage from "./Pages/LoginPage";
import Header from "./components/Header";

function App() {
    return (
        <BrowserRouter>
            <Container fluid className={'vh-100 main'}>
                <Header/>
                <Route exact path={'/'} component>
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
