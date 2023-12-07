import React, { useState } from 'react';
import PrimarySearchAppBar from '../../../components/SearchBar/SearchBar';
import Button from '@mui/material/Button';
import './Home.css';
import SubmitForm from '../SubmitForm/SubmitForm';
import DiaryCard from '../../../components/DiaryCard/DiaryCard';
import { useAppSelector } from '../../../redux/store/hooks';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

type HomeProps = {
  showForm: boolean;
  reset: () => void;
};

const Home: React.FC<HomeProps> = ({ showForm, reset }) => {
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

    const handleScroll = (scrollOffset: number) => {
      const imageList = document.getElementById('image-list');
      if (imageList) {
        imageList.scrollTo({
          left: imageList.scrollLeft + scrollOffset,
          behavior: 'smooth',
        });
      }
    };
    

  return (
    <div className="home-wrapper">
      <div className="home-header">Home</div>
      <div className="home-search">
        <PrimarySearchAppBar setFilteredList={setFilteredList} />
        <Button className="submitform-button" onClick={reset}>
          Submit New
        </Button>
      </div>
      <Box sx={{ width: '100%' }} className="masonry-grid">

        <ImageList
          id="image-list"
          variant="masonry"
          cols={columns}
          gap={20}
          className="mansory-grid-component"
        >
          {filteredList.length === 0 ? (
            <Typography>No diaries found.</Typography>
          ) : (
            filteredList.map((diary, key) => (
              <ImageListItem key={key}>
                <DiaryCard diary={diary} />
              </ImageListItem>
            ))
          )}
        </ImageList>

        <div className="scroll-buttons">
          <Button onClick={() => handleScroll(-300)}>
            <KeyboardArrowLeftIcon />
          </Button>
          <Button onClick={() => handleScroll(300)}>
            <KeyboardArrowRightIcon />
          </Button>
        </div>
      </Box>
      <SubmitForm showForm={showForm} reset={reset} />
    </div>
  );
};

export default Home;
