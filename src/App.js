import logo from './logo.svg';
import './App.css';
import {Card, Col, Container, Row} from "react-bootstrap";
import CardGrid from "./components/CardGrid";
import NewCardForm from "./components/NewCardForm";
import {useState} from "react";

const notes = [
    {
        title: "Tisstle",
        name: 'Jhon Doe',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula odio at diam dictum porttitor. Pellentesque lectus arcu, egestas sit amet mattis a, facilisis non magnac'
    },
    {
        title: "Title",
        name: 'Jhon Doe',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula odio at diam dictum porttitor. Pellentesque lectus arcu, egestas sit amet mattis a, facilisis non magnac'
    }
]

function App() {
    const [diaryNotes, setNotes] =  useState(notes)
    const addNote = (title, content, author) =>{
        setNotes([...diaryNotes, {title: title, name: author, description: content}])
    }
    return (
        <Container fluid className={'vh-100 main'}>
            <NewCardForm onClickAdd = {addNote}/>
            <CardGrid diaryNotesList={diaryNotes} />
        </Container>
    );
}

export default App;
