import { Card, Col, Row } from 'react-bootstrap'
import React, { useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { removeDiaryCard } from '../actions/diaryCard'
import PropTypes from 'prop-types'

const DiaryCard = ({ id, title, name, description }) => {
  const dispatch = useDispatch()
  const isSeeMore = false
  const needSeeMore = description.length > 100
  const [bodyContent, setBody] = useState(
    needSeeMore ? description.slice(0, 100) + '...' : description)
  const [isSeeMoreShown, setSeeMore] = useState(isSeeMore)

  const onSeeMoreClick = () => {
    if (isSeeMoreShown && needSeeMore) {
      setBody(
        description.slice(0, 100) + '...')
    } else setBody((description))
    setSeeMore(!isSeeMoreShown)
  }

  const onCardDeleteClick = () => {
    dispatch(removeDiaryCard(id))
  }

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
                        <Col className={'see-more'} onClick={() => onSeeMoreClick()}>
                            {needSeeMore
                                ? isAllShown ? 'See less' : 'See more'
                                : ''
                            }
                            {/*<Button variant={'link'} onClick={() => onSeeMoreClick()}>*/}
                            {/*    {isAllShown ? 'See less' : 'See more'}*/}
                            {/*</Button>*/}
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
