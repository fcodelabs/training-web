import React from 'react'
import Background from '../../components/Background/Background';
import {  Box, Button, TextField, Typography,  Dialog} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Header from '../../components/Header/Header';
import DiaryForm from './DiaryForm/DiaryForm';
import DiaryCard from '../../components/DiaryCard/DiaryCard';
import { useSelector } from 'react-redux';

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
    justifyContent:"spaceBetween",
    height: '48px', 
    padding:'0'
  },

  textfield:{
    width: { xs: '40%', sm: '50%' },
    maxWidth: '50%',
    '& .MuiInputBase-root': {
      height: '48px', 
    },
    position: 'absolute',
    left: '50px',
    top:'200px',
  },

  submibNew:{
    backgroundColor: '#0092DD',
    width: { xs: '30%', sm: '154px' },
    height: '48px',
    position: 'absolute',
    right: '50px',
    top:'200px',

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

  diaryEntries: {
    position: 'absolute',
    top: '300px',
    left: '50px',
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: { xs: '0', sm: '35px'},
    marginRight: '50px',
  }  

}

interface Diary {
  title: string;
  description: string;
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

  const handleColse = () => {
    setOpen(false);
  }

  //const [diaries, setDiaries] = React.useState(JSON.parse(localStorage.getItem("diaries") || "[]")); // Get the existing entries

  const diaries = useSelector((state: RootState) => state.diaries);



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
          <TextField placeholder = "Search" 
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={styles.textfield} 
          />
          <Button variant="contained" 
            onClick={handleSubmitNew}
            sx={styles.submibNew}>
            Submit New
          </Button>
        </Box>
        
        <Dialog open={open} onClose={handleColse} sx={styles.dialog} >
            <DiaryForm onClose={handleColse} />
        </Dialog>

        <Box sx={styles.diaryEntries}>
            {diaries.map((diary: { title: string; description: string })  => (
            <DiaryCard title={diary.title} description={diary.description} />
            ))}
        </Box>

      </Background>
    </div>
  )
}

export default DiaryHome;
