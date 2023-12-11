import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Deardiary from '../DearDiary/DearDiary';
import Profile from '../Profile/Profile';
import './Navbar.css';

function NavBar() {

    return (
        <AppBar position="static" className='appbar-main'>
            <Container className='appbar-container'>
                <Toolbar disableGutters>
                    {<Deardiary />}

                    <Box sx={{ flexGrow: 0, paddingRight:"2%" }}>
                        <Profile />

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;
