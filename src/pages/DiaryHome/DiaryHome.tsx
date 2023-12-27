import React from 'react';
import {useEffect} from 'react'
import Background from '../../components/Background/Background';
import {  Box, Button, TextField, Typography, Dialog} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Header from '../../components/Header/Header';
import DiaryForm from './DiaryForm/DiaryForm';
import DiaryCard from '../../components/DiaryCard/DiaryCard';
import SnackBar from './SnackBar/SnackBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDiaries } from '../../redux/diarySlice';

const styles = {
  home:{ fontFamily:"public sans",
    color:"4B465C",
    fontWeight: "700", 
    fontSize: "36px", 
    lineHeight: "24px", 
    position:"absolute", 
    left: '50px', 
    top:'150px'
  },

  box:{
    display:"flex", 
    flexDirection:{xs:"column", sm:"row"},
    justifyContent:"space-between", 
    width: 'calc(100% - 100px)',
    gap: '10px',
    padding:'0',
    position: 'absolute',
    left: '50px',
    top:'200px',
  },
  

  textfield:{
    width: { xs: '100%', sm: '50%' },
    '& .MuiInputBase-root': {
      height: '48px', 
    },
    
    backgroundColor: 'white',
  },

  submibNew:{
    backgroundColor: '#0092DD',
    width: { xs: '100%', sm: '154px' },
    height: '48px',
    textTransform: 'none',
  },

  dialog: {
    '& .MuiDialog-paper': {
      position: 'absolute',
      top: 0,
      right: 0,
      height: '100vh',
      maxHeight: '100vh',
      width: { xs: '100%', sm: '400px' },
      padding: '0',
      margin: '0',
      borderRadius: '0',
    }
  },

  diaryEntries:{
    width: 'calc(100% - 100px)',
    margin: '100px 10px 10px 50px',
    padding: '0px 0px 50px 0px',
    position: 'absolute',
    top: { xs: '250px', sm: '200px' },
    columnCount: { xs: 1, sm: 2, md: 3, lg: 4, xl:  6}, 
    columnGap: '35px',

  },

}

interface Diary {
  title: string;
  description: string;
  nickname: string;
}

interface RootState {
  diaries: Diary[];
}


const DiaryHome = () => {

  const nickname = localStorage.getItem('nickname'); // get nickname from local storage

  const[open, setOpen] = React.useState(false); // set open state for dialog

  const handleSubmitNew = () => {
    setOpen(true);
  }

  const handleFormColse = () => {
    setOpen(false);
  }
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [submissionTime, setSubmissionTime] = React.useState<Date | null>(null);
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    const nickname = localStorage.getItem('nickname');
    dispatch(fetchDiaries({ nickname }));
  }, []); // Empty dependency array ensures the effect runs only on mount
  

  const [searchText, setSearchText] = React.useState('');
  const diaries = useSelector((state: RootState) => state.diaries);
  const [filteredDiaries, setFilteredDiaries] = React.useState<Diary[]>([]);

  useEffect(() => {
    setFilteredDiaries(diaries.filter((diary) => {
      return (
        diary.title.toLowerCase().includes(searchText.toLowerCase()) ||
        diary.description.toLowerCase().includes(searchText.toLowerCase())
      );
    }));
  }, [diaries, searchText]);


  return (
    <div>
      <Background>
        <Header userName={nickname} />
        <Box>
          <Typography
            variant="subtitle1"
            sx={styles.home}
          >
            Home
          </Typography>
        </Box>

        <Box sx={styles.box}>
          <TextField  placeholder = "Search" 
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={styles.textfield} 
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button variant="contained" 
            onClick={handleSubmitNew}
            sx={styles.submibNew}>
            Submit New
          </Button>
        </Box>
        
        <Dialog open={open} onClose={handleFormColse} sx={styles.dialog} >
            <DiaryForm onClose={handleFormColse} 
              onDiarySubmit={() => {
                setOpenSnackbar(true);
                setSubmissionTime(new Date()); 
              }}/>
        </Dialog>

        <Box sx={styles.diaryEntries}>
          {filteredDiaries.map((diaryEntry, index) => (
            <Box key={index} sx={{ marginBottom: '35px' }}>
              <DiaryCard title={diaryEntry.title} description={diaryEntry.description} />
            </Box>
          ))}
        </Box>

        <SnackBar openSnackbar={openSnackbar} handleCloseSnackbar={handleCloseSnackbar} submissionTime={submissionTime} /> 

      </Background>
    </div>
  )
}

export default DiaryHome;
