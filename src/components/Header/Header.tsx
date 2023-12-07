import React from 'react'
import { Box, Typography, Avatar } from '@mui/material';
import logo from './logo.png';

interface HeaderProps {
    userName: string;
  }
  
const Header: React.FC<HeaderProps> = ({ userName }) => {
  return (
    <div>
      <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} sx={{ mt:'10px', ml:'20px', padding:'24px', gap:'12px', position: 'relative'}}>
          <Box display={'flex'} alignItems={'center'} >
            <img src={logo} alt="Logo" style={{ height: '40px', width: '40px', marginRight: '10px'}}/>
            <Typography
              variant="subtitle1"
              color="#4B465C"
              fontFamily="public sans"
              sx={{height: "24px", fontStyle: "normal", fontWeight: "500", fontSize: "24px", lineHeight: "24px"}}
            >
              Dear Diary
            </Typography>
          </Box>
          <Box display={'flex'} flexDirection={'column'} alignItems={'center'} sx={{height: '98px', width: '72px', mr: '20px'}}>
            <Avatar sx={{ bgcolor: '#0092DD', width: '72px', height: '72px' }}>S</Avatar>
            <Typography  sx={{fontFamily: 'public sans', fontWeight:'500', fontSize:'17px'}} >
              {userName}
            </Typography>
          </Box>
        </Box>
    </div>
  )
}

export default Header

