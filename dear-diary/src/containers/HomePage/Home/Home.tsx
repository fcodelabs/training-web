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
    flex-direction: column;
`
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
    width: 100%;`;

const ScrollableGridContainer = styled.div`
    overflow-y: auto;
`
const SubmitFormButton = styled(Button)`
    border: 0.1px solid black !important;
    width : 12% ;
    color: white !important;
    box-shadow: 0px 4px 4px 0px rgba(50, 50, 50, 0.638);
    background-color: #0092DD !important;
    text-transform: none !important;

    @media screen and (max-width: 1000px) {
    min-width :24vh !important; 
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
          <Grid container spacing={2}>
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
