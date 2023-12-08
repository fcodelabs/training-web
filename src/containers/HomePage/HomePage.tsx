import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import Header from '../../components/header';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import DiaryCard from './DiaryCard/DiaryCard';
import SubmitCard from './SubmitCard/SubmitCard';
import "@fontsource/public-sans/";
import { useLocation } from 'react-router-dom';

interface DiaryCardProps {
    title: string;
    description: string;
};

const HomePage = () => {
    const [showSubmitCard, setShowSubmitCard] = useState(false);
    const [diaryEntries, setDiaryEntries] = useState<DiaryCardProps[]>([]);

    const handleOnSubmitCard = (title: string, description: string) => {
        const newDiaryCard: DiaryCardProps = {
            title,
            description,
        };

        setDiaryEntries([newDiaryCard, ...diaryEntries]);
    };

    const location = useLocation();
    const nickName = location.state.name || {};

    console.log('nickName', nickName);

    const handleSubmit = () => {
        setShowSubmitCard(true);
    };

    const handleCloseSubmitCard = () => {
        setShowSubmitCard(false);
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                width: '100%',
                position: 'relative',
                backgroundImage: `url(${process.env.PUBLIC_URL}/bg.png)`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                overflowX: 'hidden',
            }}
        >
            {showSubmitCard && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0, 0, 0, 0.5)',
                        backdropFilter: 'blur(5px)',
                        zIndex: 2,
                    }}
                    onClick={handleCloseSubmitCard}
                />
            )}

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Grid
                    className="homeHeader"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                        marginLeft: '0px',
                        marginTop: '60px',
                        marginRight: '60px',
                        justifyContent: 'space-between',
                    }}
                >
                    <Header />
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <IconButton
                            style={{
                                width: '80px',
                                height: '80px',
                                alignSelf: 'flex-end',
                                backgroundColor: 'rgba(1, 169, 255, 0.33)',
                                border: '8px solid #01A9FF',
                                borderRadius: 90,
                                borderColor: '#01A9FF',
                                overflow: 'hidden',
                                marginRight: '10px'
                            }}
                            color="inherit"
                        >
                            <img src={process.env.PUBLIC_URL + '/user.png'} alt="User Icon" />

                        </IconButton>

                        <span style={{
                            fontFamily: 'public sans', marginTop: '4px',
                            color: '#4B465C',
                            fontFeatureSettings: "'clig' off, 'liga' off",
                            fontSize: '17px',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            lineHeight: '22px',
                            letterSpacing: '0.43px',
                        }}>{nickName}</span>
                    </div>

                </Grid>
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
                <Grid
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        marginLeft: '60px',
                        marginTop: '0px',
                        marginRight: '60px',
                        justifyContent: 'space-between',
                    }}
                >
                    <TextField
                        style={{
                            width: '530px',
                            borderRadius: '8px',
                            backgroundColor: '#ffffff',
                        }}
                        id="outlined-basic"
                        label=""
                        variant="outlined"
                        size="small"
                        placeholder="Placeholder"
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
                            backgroundColor: '#0092DD',
                            color: '#ffffff',
                            borderRadius: '8px',
                            width: 'auto',
                            height: 'auto',
                            padding: '13px 26px',
                            fontFamily: 'public sans',
                            fontFeatureSettings: "'clig' off, 'liga' off",
                            fontSize: '17px',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            lineHeight: '22px',
                            letterSpacing: '0.43px',
                            textTransform: 'none',
                        }}
                        onClick={handleSubmit}
                    >
                        Submit New
                    </Button>
                </Grid>
            </div>
            
            <Modal
                open={showSubmitCard}
                onClose={handleCloseSubmitCard}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',

                }}
            >
                <SubmitCard onClose={handleCloseSubmitCard} onsubmit={handleOnSubmitCard}/>
            </Modal>
                {diaryEntries.map((diaryCard) => (
                    <DiaryCard title={diaryCard.title} description={diaryCard.description} />
                ))}
        </div>
    );
};

export default HomePage;
