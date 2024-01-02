import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import Header from '../../components/Header/Header';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import DiaryCard from './DiaryCard/DiaryCard';
import SubmitCard from './SubmitCard/SubmitCard';
import "@fontsource/public-sans/";
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Alert from '@mui/material/Alert';
import DoneIcon from '@mui/icons-material/Done';

import { useEffect } from 'react';
import { RootState, useAppDispatch } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { diaryCardActions } from '../../redux/diary/slice';
import { useNavigate } from 'react-router-dom';

import CalculateTimeElapsed from '../../utility/calculateTimeElapsed';

const StyledMainDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    position: relative;
    background-image: url(/bg/bg.png);
    background-size: cover;
    background-repeat: no-repeat;
    overflow-x: hidden;
`;

const StyledHeaderDiv = styled.div`
    display: flex;
    align-items: center;
`;

const StyledHeaderGrid = styled(Grid)`
    display: flex;
    align-items: center;
    width: 100%;
    margin-left: 16px;
    margin-top: 60px;
    margin-right: 60px;
    justify-content: space-between;
`;

const StyledIconButton = styled(IconButton)`
&&& {
    width: 80px;
    height: 80px;
    align-self: flex-end;
    background-color: rgba(1, 169, 255, 0.33);
    border: 8px solid #01A9FF;
    border-radius: 90px;
    border-color: #01A9FF;
    overflow: hidden;
    margin-right: 10px;
}
`;

const StyledUserIconDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledNickName = styled.span`
    color: #4B465C;
    font-family: public sans;
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0.43px;
    margin-top: 4px;
`;

const StyledHomeDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    margin-top: 30px;
    margin-left: 60px;
`;

const StyledTitleSpan = styled.span`
    height: 39px;
    color: #4B465C;
    font-family: public sans;
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    margin-bottom: 20px;
`;

const StyledSearchGrid = styled(Grid)`
    display: flex;
    align-items: center;
    margin-left: 60px;
    margin-top: 0px;
    margin-right: 60px;
    justify-content: space-between;
    gap: 5px;
`;

const StyledTextField = styled(TextField)`
    
    width: 530px;
    border-radius: 8px;
    background-color: #ffffff;
    
`;

const StyledSubmitButton = styled(Button)`
&&& {
    background-color: #0092DD;
    color: #ffffff;
    border-radius: 8px;
    width: auto;
    height: auto;
    padding: 13px 26px;
    font-family: public sans;
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0.43px;
    text-transform: none;
}
`;

const DiaryCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    margin-top: 20px;
    margin-left: 60px;
    
    margin-bottom: 10px;
    
`;

const ToastContainerMsg = styled.span
    `
    color: #4B465C;
    font-family: public sans;
    
    font-size: 15px;
    
    font-weight: 600;
    line-height: 22px;
    
    
`;

const ToastContainerTime = styled.span`
&&&{
    color: rgba(75, 70, 92, 0.55);
    font-family: public sans;
    font-weight: 400;
    font-size: 13px;
    text-align: right;
    margin-left: 50px;
    line-height: 20px;
    
}`;



interface DiaryCardProps {
    title: string;
    description: string;
    username: string;
};


const HomePage = () => {
    const [showSubmitCard, setShowSubmitCard] = useState(false);            // state to track if submit card is open or not
    const [diaryEntries, setDiaryEntries] = useState<DiaryCardProps[]>([]); // state to track diary entries
    const [showAlert, setShowAlert] = useState(false);                      // sate to track alert
    const [submitTime, setSubmitTime] = useState<Date | null>(null);        // state to track submit time
    const [elapsedTime, setElapsedTime] = useState<string>('');             // state to track elapsed time
    const [searchQuery, setSearchQuery] = useState('');                     // state to track search query

    const dispatch = useDispatch();
    const history = useNavigate();               // get history from react router dom

    const location = useLocation();              // get location from react router dom
    const nickName = location.state?.name || null;  // from that location get name

    // checking the diary card list array
    useEffect(() => {
        console.log("Diary Card List:", diaryEntries);
    }, [diaryEntries]);

    // fetching the diarycard according to the username
    // useEffect(() => {
    //     console.log("fetching diary card list");
    //     dispatch(diaryCardActions.fetchDiaryCardList(nickName));
    // }, [dispatch, nickName]);

    useEffect(() => {
        if (!nickName) {
            history('/'); // Redirect to the signing page if nickname is empty
        } else {
          dispatch(diaryCardActions.fetchDiaryCardList(nickName));
        }
      }, [dispatch, history, nickName]);

    // function to handle submit card
    const handleOnSubmitCard = (title: string, description: string) => {
        // create new diary card
        console.log('Handling submit card:', { title, description, username: nickName });
        dispatch(diaryCardActions.addDiaryCard({ title, description, username: nickName })) // addding a new diary card to db

        // add new diary card to diary entries
        
        setSubmitTime(new Date()); // Capture the time when the user submits the card
        handleCloseSubmitCard();
        // show alert
        setShowAlert(true);
    };


    // function to handle submit button
    const handleSubmit = () => {
        setShowSubmitCard(true);

    };

    // function to handle close submit card
    const handleCloseSubmitCard = () => {
        setShowSubmitCard(false);

    };

    const entries = useSelector((state: RootState) => state.diaryCardList.diaryCardList);

    useEffect(() => {
        setDiaryEntries(entries);
    }, [entries]);

    

    // Function to filter diary entries based on search query
    const filteredDiaryEntries = diaryEntries.filter((entry) => {
        const searchTerms = `${entry.title} ${entry.description} ${entry.username}`.toLowerCase();
        return searchTerms.includes(searchQuery.toLowerCase());
    });


    

    // Function to calculate and update elapsed time
    const updateElapsedTime = () => {
        const timeElapsed = CalculateTimeElapsed(submitTime);
    
        // Check if there is any time elapsed
        if (timeElapsed) {
            setElapsedTime(`${timeElapsed}`);
        }
    };

    // Effect to update elapsed time every second
    useEffect(() => {
        const intervalId = setInterval(updateElapsedTime, 1000);

        // Clear interval on component unmount
        return () => clearInterval(intervalId);
    }, [submitTime]);

    return (
        <StyledMainDiv
        >
            {/* if submitcard is visible */}
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

            <StyledHeaderDiv>
                <StyledHeaderGrid
                >
                    <Header />
                    <StyledUserIconDiv>
                        <StyledIconButton color="inherit" >

                            <img src={'/homePage/user.png'} alt="User Icon" />

                        </StyledIconButton>

                        <StyledNickName>{nickName}</StyledNickName>
                    </StyledUserIconDiv>

                </StyledHeaderGrid>
            </StyledHeaderDiv>

            <StyledHomeDiv>
                <StyledTitleSpan>
                    Home
                </StyledTitleSpan>
            </StyledHomeDiv>

            <div>
                <StyledSearchGrid>
                    <StyledTextField
                        id="outlined-basic"
                        label=""
                        variant="outlined"
                        size="small"
                        placeholder="Placeholder"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),

                        }}
                    />
                    <StyledSubmitButton
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                    >
                        Submit New
                    </StyledSubmitButton>
                </StyledSearchGrid>
            </div>


            {/* if submit card is available using Modal to visbible submit card */}
            <Modal
                open={showSubmitCard} // if submit card is open
                onClose={handleCloseSubmitCard} // on close submit card
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',

                }}
            >
                {/* Rendering SubmitcARD */}
                <SubmitCard onClose={handleCloseSubmitCard} onsubmit={handleOnSubmitCard} />
            </Modal>

            {/* Rendering Diary Cards */}
            <DiaryCardContainer>
                {filteredDiaryEntries.length === 0 && (
                    <div>
                        <h1>No Diary Entries Found</h1>
                    </div>
                )}
                {filteredDiaryEntries.map((diaryCard, index) => (
                    <div style={{ width: '271px' }}>
                        <DiaryCard
                            key={index}
                            title={diaryCard.title}
                            description={diaryCard.description}
                        />
                    </div>
                ))}
            </DiaryCardContainer>

            {/* Render Alert */}
            <Alert
                severity="success"
                onClose={() => setShowAlert(false)}
                icon={<DoneIcon />}
                sx={{
                    position: 'fixed',
                    top: 148,
                    right: 60,
                    zIndex: 1000,
                    width: 'auto',
                    height: 'auto',
                    display: showAlert ? 'flex' : 'none',
                    backgroundColor: 'white',
                    '& .MuiIconButton-root': {
                        color: 'rgba(75, 70, 92, 0.55)', 
                    },

                }}
            >
                <ToastContainerMsg>Record Saved Successfully.</ToastContainerMsg>
                <ToastContainerTime>{elapsedTime && `${elapsedTime} ago`}</ToastContainerTime>
            </Alert>

        </StyledMainDiv>
    );
};



export default HomePage;
