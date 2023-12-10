import React from 'react'
import { Box, Typography } from '@mui/material';

const styles = {
  box: {display:'flex', 
    alignContent:'center', 
    justifyContent:'space-between', 
    mt:'10px', 
    ml:'20px', 
    padding:'24px', 
    gap:'12px',
  },

  logo: { height: '40px', 
    width: '40px', 
    marginRight: '10px'
  },

  title: {fontFamily:"public sans" ,
    color:"#4B465C",
    height: "24px", 
    fontWeight: "500", 
    fontSize: "24px", 
    lineHeight: "24px"
  },

  profile:{display:'flex',
  flexDirection:"column", 
  alignItems:"center", 
  height: '98px', 
  width: '72px', 
  mr: '20px'},

  avatar: {bgcolor: '#0092DD', 
    width: '72px', 
    height: '72px'
  },
   username:{fontFamily: 'public sans', 
   fontWeight:'500', 
   fontSize:'17px'
   }

}


interface HeaderProps {
    userName: string | null;
  }
  
const Header: React.FC<HeaderProps> = ({ userName }) => {
  return (
    <div>
      <Box sx={styles.box}>
          <Box display={'flex'} alignItems={'center'} >
            <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" style={styles.logo}/>
            <Typography sx={styles.title}>
              Dear Diary
            </Typography>
          </Box>
          <Box sx={styles.profile}>
            <img src={process.env.PUBLIC_URL + '/Avatar.png' } alt="avatar" style={styles.avatar}/>
            <Typography  sx={styles.username} >
              {userName}
            </Typography>
          </Box>
        </Box>
    </div>
  )
}

export default Header

