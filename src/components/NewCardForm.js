import { Button, Col, Collapse, Form, Row } from 'react-bootstrap'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addDiaryCard } from '../actions/diaryCard'

const NewCardForm = () => {
  const dispatch = useDispatch()
  const login = useSelector(state => state.login)
  let [titleText, setTitleText] = useState('')
  let [contentText, setContentText] = useState('')
  const [isExpanded, setIsExpanded] = useState(false)

  const onSubmitClick = () => {
    if (titleText.length === 0) {
      console.log('No title')
    } else if (contentText.length === 0) {
      console.log('No content')
    } else {
      dispatch(addDiaryCard(
        { title: titleText, name: login.username, description: contentText }))
      setTitleText('')
      setContentText('')
      titleText = ''
      contentText = ''
      setTimeout(() => {
        checkFormExpandStatus()
      }, 3000)
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

  const checkFormExpandStatus = () => {
    if (titleText.length > 0 || contentText.length > 0) setIsExpanded(true)
    else setIsExpanded(false)
  }

  return (
      <Row className={'justify-content-center'}>
        <Col className={'col-8 new-card-form p-4'}>
          <Row className={'p-2'}>
            <Col>
              <Form.Control
                  type="text"
                  placeholder="Submit new"
                  className={'rounded-pill'}
                  value={titleText}
                  onInput={(e) => onTitleEnters(e)}
                  onBlur={() => checkFormExpandStatus()}
                  onFocus={() => setIsExpanded(true)}
              />
            </Col>
          </Row>

          <Collapse in={isExpanded}>
            <div id="collapsable">
              <Row className={'p-2'}>
                <Col className={'col-12'}>
                  <Form.Control
                      as="textarea"
                      placeholder="Description"
                      className={'raw-text-box'}
                      value={contentText}
                      onInput={(e) => onDescriptionEnters(e)}
                      onBlur={() => checkFormExpandStatus()}
                      onFocus={() => setIsExpanded(true)}
                  />
                </Col>
              </Row>
              <Row className={'p-2 justify-content-center'}>
                <Button
                    variant="primary"
                    className={'rounded-pill col-2 button'}
                    onClick={() => onSubmitClick()}>
                  Submit
                </Button>
              </Row>
            </div>
          </Collapse>
        </Col>
      </Row>
  )
}

export default NewCardForm
