import React, { useState } from 'react';
import PrimarySearchAppBar from '../../../components/SearchBar/SearchBar';
import Button from '@mui/material/Button';
import './Home.css';
import SubmitForm from '../SubmitForm/SubmitForm';
import DiaryCard from '../../../components/DiaryCard/DiaryCard';
import { useAppSelector } from '../../../redux/store/hooks';
import { Box, Typography } from '@mui/material';

type HomeProps = {
  showForm: boolean;
  reset: () => void;
};

const Home: React.FC<HomeProps> = ({ showForm, reset }) => {
  const diaries = useAppSelector((state) => state.diaryCard.cards);
  const [filteredList, setFilteredList] = useState(diaries);

  return (
    <div className="home-wrapper">
      <div className="home-header">Home</div>
      <div className="home-search">
        <PrimarySearchAppBar setFilteredList={setFilteredList} />
        <Button className="search-button" onClick={reset}>
          Submit New
        </Button>
      </div>
      <Box className="home-body">
        {filteredList.length === 0 ? (
          <Typography >No diaries found.</Typography>
        ) : (
          filteredList.map((diary, key) => (
            <DiaryCard key={key} diary={diary} />
          ))
        )}
      </Box>
      <SubmitForm showForm={showForm} reset={reset} />
    </div>
  );
};

export default Home;
