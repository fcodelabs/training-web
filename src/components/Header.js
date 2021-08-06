import {Col, Container, Navbar, Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import logo from '../images/logo.svg'
import profile from '../images/profile.svg'
import unknown from '../images/unknown.svg'

const Header = () => {
    const login = useSelector(state => state.login)
    return (
        <Navbar className={'top-band navbar-dark'}>
            <Container>
                <Navbar.Brand>
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top nav-logo"
                        alt="DD"
                    />
                    Dear Diary
                </Navbar.Brand>
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
                </Navbar.Text>
            </Container>
        </Navbar>
    )
}

export default Header