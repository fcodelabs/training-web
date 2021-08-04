import {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import NewCardForm from "./components/NewCardForm";

function DiaryHome() {
    const [diaryNotes, setNotes] = useState(notes)
    const addNote = (title, content, author) => {
        setNotes([...diaryNotes, {title: title, name: author, description: content}])
    }
    return (
            <Row className={'justify-content-center align-items-center vh-100'}>
                <Col className={'col-8'}>
                    <NewCardForm onClickAdd={addNote}/>
                </Col>
            </Row>
    );
}

export default DiaryHome;
