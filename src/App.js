import './App.css';
import { Container} from "react-bootstrap";
import CardGrid from "./Components/CardGrid";
import {BrowserRouter, Route} from "react-router-dom";
import NewCardForm from "./Components/NewCardForm";
import DiaryHome from "./Pages/DiaryHome";
import LoginPage from "./Pages/LoginPage";
import Header from "./Components/Header";

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
