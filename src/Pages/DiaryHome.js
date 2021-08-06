import {Col, Row, CardGroup} from "react-bootstrap";
import NewCardForm from "../Components/NewCardForm";
import DiaryCard from "../Components/DiaryCard";

import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchDiaryCards} from "../actions/diaryCard";
import {useFirestoreConnect} from "react-redux-firebase";

function DiaryHome() {
    const diaryCardsList = useSelector(state => state.diaryCards)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchDiaryCards())
    }, [])

    useFirestoreConnect([
        {collection: 'DiaryNotes'} // or 'todos'
    ])
    const diaryNotes = useSelector((state) => state.firestore.ordered.DiaryNotes)

    return (
        <Row className={'justify-content-center p-3 vh-100'}>
            <Col className={'col-12'}>
                <NewCardForm/>
                <CardGroup className={'justify-content-center m-3'}>
                    {
                        diaryNotes && diaryNotes.map(i => (
                            <DiaryCard
                                key={i.id}
                                id={i.id}
                                title={i.title}
                                description={i.description}
                                name={i.name}/>))
                    }
                </CardGroup>
            </Col>
        </Row>
    );
}

export default DiaryHome;
