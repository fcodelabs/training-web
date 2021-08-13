import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import DiaryHome from './DiaryHome'
import LoginPage from './LoginPage'
import Header from '../Components/Header'
import { useSelector } from 'react-redux'
import NotFoundPage from './NotFount'

function App () {
  const login = useSelector(state => state.login)
  return (
      <BrowserRouter>
        <Header/>
        <Container fluid className={'vh-100 main no-scroll'}>
          <Switch>
            <Route exact path='/login'><LoginPage/></Route>
            <Route exact path='/'>
              { login.isLoggedIn ? <DiaryHome/> : <Redirect to='/login'/> }
            </Route>
            <Route><NotFoundPage/></Route>
          </Switch>
        </Container>
      </BrowserRouter>
  )
}

export default App
