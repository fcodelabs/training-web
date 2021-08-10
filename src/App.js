import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Route } from 'react-router-dom'
import DiaryHome from './Pages/DiaryHome'
import LoginPage from './Pages/LoginPage'
import Header from './components/Header'
import { useSelector } from 'react-redux'

function App () {
  const login = useSelector(state => state.login)
  return (
      <BrowserRouter>
        <Header/>
        <Container fluid className={'vh-100 main no-scroll'}>
          {
            login.isLoggedIn
              ? <Route exact path={'/'}>
                  <DiaryHome/>
                </Route>
              : <LoginPage/>
          }
          <Route path={'/login'}>
            <LoginPage/>
          </Route>
        </Container>
      </BrowserRouter>
  )
}

export default App
