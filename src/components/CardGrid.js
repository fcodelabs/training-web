import DiaryCard from "./DiaryCard";
import {Row, Col} from "react-bootstrap";
import {useState} from "react";

const CardGrid = ({diaryNotesList}) => {
    return (
        <Row className={'justify-content-center m-3'}>
            {
                diaryNotesList.map(i => (<DiaryCard title={i.title} description={i.description} name={i.name}/>))
            }
        </Row>
    )
}

export default CardGrid