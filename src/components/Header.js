import {Container, Navbar} from "react-bootstrap";
import {useSelector} from "react-redux";

const Header = () => {
    const login = useSelector(state => state.login)
    return (
        <Navbar fixed='top' className={'header'}>
            <Container fluid>
                hello {login.isLoggedIn ? login.username : 'Guest'}
            </Container>

        </Navbar>
    )
}

export default Header