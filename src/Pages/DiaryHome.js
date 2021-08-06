import {Col,  Row} from "react-bootstrap";
import NewCardForm from "../Components/NewCardForm";
import DiaryCard from "../Components/DiaryCard";

import {useSelector} from "react-redux";

function DiaryHome() {
    const diaryCardsList = useSelector(state=>state.diaryCards)

    return (
            <Row className={'justify-content-center p-3 vh-100'}>
                <Col className={'col-12'}>
                    <NewCardForm/>
                    <Row className={'justify-content-center m-3'}>
                        {
                            [...diaryCardsList].map(i => (<DiaryCard id={i.id} title={i.title} description={i.description} name={i.name}/>))
                        }
                    </Row>
                </Col>
            </Row>
    );
}

export default DiaryHome;
