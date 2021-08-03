import DiaryCard from "./DiaryCard";
import {Row, Col} from "react-bootstrap";

const CardGrid = (diaryNotesList) => {
    return (
        <Row className={'justify-content-center'}>

                {
                    [1, 3, 4, 5].map(i => (<DiaryCard/>))
                }
        </Row>
    )
}

export default CardGrid