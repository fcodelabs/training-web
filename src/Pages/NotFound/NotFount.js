import React from 'react'
import { Button, Col, Image, Row } from 'react-bootstrap'
import notfoundImage from '../../assets/404.png'

import { useHistory } from 'react-router-dom/cjs/react-router-dom'

function NotFoundPage () {
  const history = useHistory()

  const onOkayClicked = () => {
    history.push('/')
  }

  return (
      <Row className={'justify-content-center  vh-100'}>
        <Col className={'col-4'}>
          <Row className={'justify-content-center align-items-center p-3'}>
            <Image
                src={notfoundImage}
            />
          </Row>
          <Row className={'justify-content-center align-items-center p-3'}>
            <Button
                variant="primary"
                className={'rounded-pill button-login'}
                onClick={() => onOkayClicked()}>
              Okay
            </Button>
          </Row>
        </Col>
      </Row>
  )
}

export default NotFoundPage
