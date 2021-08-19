import { Card, Col, Row } from 'react-bootstrap'
import React, { useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { removeDiaryCard } from '../Pages/DiaryHome/actions'
import PropTypes from 'prop-types'

const DiaryCard = ({ id, title, name, description }) => {
  const dispatch = useDispatch()
  const isSeeMore = false
  const needSeeMore = description.length > 100
  const [bodyContent, setBodyContent] = useState(
    needSeeMore ? description.slice(0, 100) + '...' : description)
  const [isSeeMoreShown, setIsSeeMoreShown] = useState(isSeeMore)

  const onSeeMoreClick = () => {
    if (isSeeMoreShown && needSeeMore) {
      setBodyContent(
        description.slice(0, 100) + '...')
    } else setBodyContent((description))
    setIsSeeMoreShown(!isSeeMoreShown)
  }

  const onCardDeleteClick = () => {
    dispatch(removeDiaryCard(id))
  }

  return (
      <Card className={'m-1 diary-card'}>

        <Card.Title className={'p-3 pb-0'}>
          <Row>
            <Col className={'col-10'}>{title}</Col>
            <Col className={'col-auto'}><FaTrash color="#b25b8f"
                                                 className={'card-trash'}
                                                 onClick={() => onCardDeleteClick()}/></Col>
          </Row>
        </Card.Title>
        <Card.Subtitle
            className={'p-3 pt-0 pb-0 text-muted'}>{name}</Card.Subtitle>
        <div className={'hr'}/>
        <Card.Body>
          <Row>
            <Col>{bodyContent}</Col>
          </Row>
          <Row>
            <Col className={'see-more'} onClick={() => onSeeMoreClick()}>
              {needSeeMore
                ? isSeeMoreShown ? 'See less' : 'See more'
                : ''
              }
            </Col>
          </Row>
        </Card.Body>
      </Card>
  )
}

DiaryCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default DiaryCard
