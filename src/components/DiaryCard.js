import {Button, Card, Col, Row} from "react-bootstrap";
import {useState} from "react";

const DiaryCard = ({title, name, description}) => {
    let isSeeMore = false
    const [bodyContent, setBody] = useState(description.slice(0, 100) + '...')
    const [isAllShown, setSeeMore] = useState(isSeeMore)
    const onSeeMoreClick = () => {
        if (isAllShown) setBody(description.slice(0, 100) + '...')
        else setBody((description))

        setSeeMore(!isAllShown)

    }
    return (
            <Card className={'m-1 diary-card'}>
                <Card.Title className={'p-3 pb-0'}>{title}</Card.Title>
                <Card.Subtitle className={'p-3 pt-0 pb-0 text-muted'}>{name}</Card.Subtitle>
                <Card.Body>
                    <Row>
                        <Col>{bodyContent}</Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant={'link'} onClick={() => onSeeMoreClick()}>
                                {isAllShown ? 'See less' : 'See more'}
                            </Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
    )
}

DiaryCard.defaultProps = {
    title: "Title",
    name: 'Jhon Doe',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula odio at diam dictum porttitor. Pellentesque lectus arcu, egestas sit amet mattis a, facilisis non magnac'
}

export default DiaryCard
