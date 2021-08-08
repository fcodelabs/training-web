import React from 'react'
import { Col, Container, Navbar, Row, Spinner } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import logo from '../assets/logo.svg'
import profile from '../assets/profile.svg'
import unknown from '../assets/unknown.svg'

const Header = () => {
  const login = useSelector(state => state.login)
  const isLoading = useSelector(state => state.loading)
  return (
      <Navbar className={'top-band navbar-dark'}>
        <Container>
          <Navbar.Brand>
            <img
                src={logo}
                width="30px"
                height="30px"
                className="d-inline-block align-top nav-logo"
                alt="DD"
            />
            Dear Diary
            {
              isLoading && (<Spinner animation="border" className={'spinner'}/>)
            }
          </Navbar.Brand>
          {login.isLoggedIn &&
          <Navbar.Text className={'col-auto'}>
            <Row className={'align-items-center'}>
              <Col className={'col-auto p-0'}>
                Signed in as: {login.isLoggedIn ? login.username : 'Guest'}
              </Col>
              <Col className={'col-auto p-0'}>
                <img
                    src={login.isLoggedIn ? profile : unknown}
                    className="d-inline-block align-top nav-profile-img "
                    alt="DD"
                />
              </Col>
            </Row>
          </Navbar.Text>}
        </Container>
      </Navbar>
  )
}

export default Header
