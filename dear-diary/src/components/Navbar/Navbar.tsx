
import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Deardiary from '../DearDiary/DearDiary';
import Profile from '../Profile/Profile';

const StyledAppBar = styled(AppBar)`
    background-color: transparent !important;
    box-shadow: none !important;
    `;

const StyledContainer = styled(Container)`
    max-width: 2000px !important;
    padding: 9px 0 0 0 !important;
    `;

const ProfileWrapper = styled.div`
    flex-grow: 1;
    padding-right: 2% !important; `

function NavBar() {
    return (
        <StyledAppBar position="static">
            <StyledContainer>
                <Toolbar disableGutters>
                    {<Deardiary />}
                    <ProfileWrapper>
                        <Profile />
                    </ProfileWrapper>
                </Toolbar>
            </StyledContainer>
        </StyledAppBar>
    );
}

export default NavBar;
