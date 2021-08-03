import logo from './logo.svg';
import './App.css';
import {Card, Col, Container, Row} from "react-bootstrap";
import DiaryCard from "./components/DiaryCard";
import CardGrid from "./components/CardGrid";

function App() {
    return (
        <Container fluid className={'bg-gradient bg-info vh-100'}>
                    <CardGrid/>
        </Container>
    );
}

export default App;
