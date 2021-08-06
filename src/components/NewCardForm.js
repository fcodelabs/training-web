import {Button, Col, Collapse, Form, InputGroup, Row} from "react-bootstrap";
import {useState} from "react";

const NewCardForm = ({onClickAdd}) => {
    const [titleText, setTitleText] = useState('')
    const [contentText, setContentText] = useState('')
    const [isExpanded, setIsExpanded] = useState(false)

    const onSubmitClick = () => {
        if (titleText.length == 0) {
            console.log('No title')
        } else if (contentText.length == 0) {
            console.log('No content')
        } else {
            onClickAdd(titleText, contentText, 'Salitha')
            setTitleText('')
            setContentText('')
        }
    }

    const onDescriptionEnters = (e) => {
        setContentText(e.target.value)
        setIsExpanded(true)
    }

    const onTitleEnters = (e) => {
        setTitleText(e.target.value)
        setIsExpanded(true)
    }

    return (
        <Row className={'justify-content-center'}>
            <Col className={'col-8 new-card-form p-4'}>
                <Row className={'p-2'}>
                    <Col>
                        <Form.Control
                            type='text'
                            placeholder="Submit new"
                            className={'rounded-pill'}
                            value={titleText}
                            onInput={(e) => onTitleEnters(e)}/>
                    </Col>
                </Row>
                <Row className={'p-2'}>
                    <Col className={'col-12'}>
                        <Form.Control
                            as='textarea'
                            placeholder='Description'
                            className={'raw-text-box'}
                            value={contentText}
                            onInput={(e) => onDescriptionEnters(e)}/>
                    </Col>
                </Row>
                <Row className={'p-2 justify-content-center'}>
                        <Button
                            variant='primary'
                            className={'rounded-pill col-2 button'}
                            onClick={() => onSubmitClick()}>
                            Submit
                        </Button>
                </Row>
            </Col>
        </Row>
    )
        ;
};

export default NewCardForm