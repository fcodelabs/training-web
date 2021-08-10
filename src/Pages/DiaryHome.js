import React, { useEffect } from 'react'
import { CardGroup, Col, Row } from 'react-bootstrap'
import NewCardForm from '../components/NewCardForm'
import DiaryCard from '../components/DiaryCard'

import { useDispatch, useSelector } from 'react-redux'

import { startDiaryNotesFirestoreSync } from '../actions/firestore'

function DiaryHome () {
  const diaryCardsList = useSelector(state => state.diaryCards)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(startDiaryNotesFirestoreSync())
  })

  return (
      <Row className={'justify-content-center p-3 vh-100'}>
        <Col className={'col-12 overlay'}>
          <NewCardForm/>
          <CardGroup className={'justify-content-center m-3'}>
            {
              diaryCardsList && diaryCardsList.map(i => (
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
  )
}

export default DiaryHome
