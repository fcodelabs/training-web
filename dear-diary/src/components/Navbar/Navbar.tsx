import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import Deardiary from '../DearDiary/DearDiary';
import Profile from '../Profile/Profile';

function ResponsiveAppBar() {


    return (
        <AppBar position="static" style={{backgroundColor:'transparent', boxShadow:'none'}}>
            <Container style={{maxWidth:"2000px"}}>
                <Toolbar disableGutters>
                    {<Deardiary />}

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton >
                                <Profile/>
                            </IconButton>
                        </Tooltip>
                    
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
