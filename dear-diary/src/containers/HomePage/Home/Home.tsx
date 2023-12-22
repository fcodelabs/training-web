import React, { useState } from 'react';
import PrimarySearchAppBar from '../../../components/SearchBar/SearchBar';
import Button from '@mui/material/Button';
import SubmitForm from '../SubmitForm/SubmitForm';
import DiaryCard from '../../../components/DiaryCard/DiaryCard';
import { useAppSelector } from '../../../redux/hooks';
import { useMediaQuery, useTheme, Grid, Typography } from '@mui/material';
import styled from 'styled-components';

const HomeWrapper = styled.div`
    padding: 10px 10px 10px 4px;
    display: flex;
    flex-direction: column;`

const BlurredBackground = styled.div<{ showForm: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2; /* Ensure it's on top of other elements */
  display: ${(props) => (props.showForm ? 'block' : 'none')};
`;
const HomeHeader = styled.div`
    font-size: 26px;
    color: #4b465c;
    font-weight: 500;
`;

const HomeSearch = styled.div`
    padding-top: 2%;
    padding-bottom: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;;
   `
  

const ScrollableGridContainer = styled.div`
    padding-top: 1%;
    overflow-y: auto;
`
const SubmitFormButton = styled(Button)`
    min-width : 15vh !important;
    color: white !important;
    background-color: #0092DD !important;
    text-transform: none !important;

    @media screen and (max-width: 800px) {
    min-width :16vh !important; 
  }`


type HomeProps = {
  showform: boolean;
  reset: () => void;
};

const Home: React.FC<HomeProps> = ({ showform, reset }) => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('xl'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.up('sm'));

  const diaries = useAppSelector((state) => state.diaryCard.cards);
  const [filteredList, setFilteredList] = useState(diaries);

  const columns = isLargeScreen
    ? 6
    : isMediumScreen
      ? 4
      : isSmallScreen
        ? 3
        : isExtraSmallScreen
          ? 2
          : 1;


  return (
    <HomeWrapper>
       <BlurredBackground showForm={showform} />
      <HomeHeader>Home</HomeHeader>
      <HomeSearch>
        <PrimarySearchAppBar setFilteredList={setFilteredList} />
        <SubmitFormButton onClick={reset}>
          Submit New
        </SubmitFormButton>
      </HomeSearch>
      <ScrollableGridContainer>

        {filteredList.length === 0 ? (
          <Typography>No diaries found.</Typography>
        ) :
          <Grid container spacing={3}>
            {[...Array(columns)].map((_, colIndex) => (
              <Grid key={colIndex} item xs={12} sm={6} md={4} lg={3} xl={2}>
                {filteredList
                  .filter((_, index) => index % columns === colIndex)
                  .map((diary, key) => (
                    <Grid key={key} item xs={12}>
                      <DiaryCard diary={diary} />
                    </Grid>
                  ))}
              </Grid>
            ))}
          </Grid>}
      </ScrollableGridContainer>

      <SubmitForm showform={showform} reset={reset} />
    </HomeWrapper>
  );
};

export default Home;
