import * as React from 'react'
import DearDiaryCard from '../Components/DearDiaryCard'
import Typography from '@mui/material/Typography'
import SubmitForm from '../Components/SubmitForm'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import { Home } from '@material-ui/icons'
import { Search as SearchIcon } from '@material-ui/icons'
import { AccountCircle } from '@material-ui/icons';
import { Menu, MenuItem } from '@mui/material';
import CardList from '../Components/CardList';



function DearDiaryPage() {
    //triggering the transition of the userIcon
    const [anchorEl, setAnchorEl] = React.useState(null);

    //handleing transition by setting the current state of the target
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            {/* Navigation bar  */}
            <Box sx={{
                flexGrow: 1,
                width: '100%',
                height: '100%'
            }

            }>
                <AppBar position="static" elevation={0} style={{ background: "transparent" }}>
                    <Toolbar>
                        <IconButton
                            size="normal"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 4 }}
                        >
                            <Home />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            Dear Diary
                        </Typography>
                        <Search style={{ borderRadius: "12px" }}>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            {/* action Elements */}
                            <MenuItem onClick={handleClose}>My Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>My Inbox</MenuItem>
                            <hr />
                            <MenuItem onClick={handleClose}>Log Out</MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>
            </Box>
            <Typography variant='h3' color="#37E2D5" style={{ margin: "20px" }}>Home</Typography>
            {/* Submit Form           */}
            <SubmitForm />
            {/* Calling diary Card  */}


        </div>

    )
}
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));



export default DearDiaryPage