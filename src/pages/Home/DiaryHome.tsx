import React from 'react'
import Background from '../../components/Background/Background';
import {  Box, Button, TextField, Typography, Card, Container, CardContent} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Header from '../../components/Header/Header';


const DiaryHome = () => {

  const userName = "Sumathi";

  return (
    <div>
      <Background>
        <Header userName={userName} />
        <Box>
          <Typography
            variant="subtitle1"
            color="#4B465C"
            fontFamily="public sans"
            sx={{ fontWeight: "700", fontSize: "36px", lineHeight: "24px", position:"absolute", left: '50px', top:'150px'}}
          >
            Home
          </Typography>
        </Box>

        <Box display={'flex'} justifyContent={'space-between'}>
          <TextField placeholder="Search Diary Entries" id="search"  
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              width: '530px',
              maxWidth: '50%',
              height: '48px',
              position: 'absolute',
              left: '50px',
              top:'200px'
            }} 
          />
          <Button variant="contained" 
            sx={{
              backgroundColor: '#0092DD',
              width: '154px',
              height: '48px',
              position: 'absolute',
              right: '50px',
              top:'200px'
            }}>
            Submit New
          </Button>
        </Box>


      </Background>
    </div>
  )
}

export default DiaryHome;
