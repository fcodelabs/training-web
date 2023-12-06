import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from '../../assets/image1.png';
import bgimage from '../../assets/bg.png';
import user from '../../assets/user.png';
import { IconButton } from '@mui/material';
import Header from '../../components/header';

const HomePage = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                width: '100%',
                background: `url(${bgimage}) center center / cover no-repeat`,
                overflowX: 'hidden',
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', }}>
                <Container className="homeHeader" sx={{ display: 'flex', alignItems: 'center', width: '100%', marginLeft: '0px', marginTop: '60px', marginRight: '60px', justifyContent: 'space-between' }}>
                    <Header />
                    <IconButton style={{ width: '72px', height: '72px', alignSelf: 'flex-end', backgroundColor: 'rgba(1, 169, 255, 0.33)', border: '5px solid #01A9FF', borderRadius: 90, borderColor: '#01A9FF' }} color="inherit" >
                        <img src={user} alt="User Icon" />
                    </IconButton>
                </Container>
            </div>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignSelf: 'flex-start',
                    marginTop: '30px',
                    marginLeft: '60px',
                }}
            >
                <span
                    style={{
                        height: '39px',
                        color: '#4B465C',
                        fontFamily: 'public sans',
                        fontFeatureSettings: "'clig' off, 'liga' off",
                        fontSize: '36px',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        lineHeight: '24px',
                        marginBottom: '20px',
                    }}
                >
                    Home
                </span>
            </div>
            
            <div>
            <Container
                sx={{ display: 'flex', alignItems: 'center', width: '100%', marginLeft: '36px', marginTop: '0px', marginRight: '0px', justifyContent: 'space-between' }}
            >
                <TextField
                    style={{
                        
                        width: '530px',
                        borderRadius: '8px',
                        backgroundColor: '#ffffff',
                    }}
                    id="outlined-basic"
                    label="Placeholder"
                    variant="outlined"
                    size="small"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                                
                            </InputAdornment>
                        ),
                    }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    style={{
                        alignSelf: 'flex-end',
                        backgroundColor: '#0092DD',
                        color: '#ffffff',
                        borderRadius: '8px',
                        width: 'auto',
                        fontFamily: 'public sans',
                        fontFeatureSettings: "'clig' off, 'liga' off",
                        fontSize: '17px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: '22px',
                        letterSpacing: '0.43px',
                        textTransform: 'none',
                        
                    }}
                >
                    Submit New
                </Button>
            </Container>
            </div>
        </div>
    );
};

export default HomePage;
