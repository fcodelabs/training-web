import {useState} from "react";
import {Col,  Row} from "react-bootstrap";
import NewCardForm from "../Components/NewCardForm";
import DiaryCard from "../Components/DiaryCard";

import {useSelector} from "react-redux";


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

function DiaryHome() {
    const diaryCardsList = useSelector(state=>state.diaryCards)
    const [diaryNotes, setNotes] = useState(diaryCardsList)
    const addNote = (title, content, author) => {
        setNotes([...diaryNotes, {title: title, name: author, description: content}])
    }
    return (
            <Row className={'justify-content-center p-3 vh-100'}>
                <Col className={'col-12'}>
                    <NewCardForm onClickAdd={addNote}/>
                    <Row className={'justify-content-center m-3'}>
                        {
                            [...diaryCardsList].map(i => (<DiaryCard title={i.title} description={i.description} name={i.name}/>))
                        }
                    </Row>
                </Col>
            </Row>
    );
}

export default DiaryHome;
