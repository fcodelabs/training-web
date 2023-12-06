import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import logo from '../assets/image1.png';

const Header = () => {
    return (
        <div>
        <Container style={{}}  >
        <Box sx={{ bgcolor: 'rgba(0, 123, 255, 0)', height: 'auto', width: '742px', padding: '24px', gap: '12px', alignItems: 'center', display: 'flex', }}>
        <img src={logo} alt="Logo" style={{ width: '40px', height: '40px',}} />
          <span style={{ color: "#4B465C", fontSize: "24px", fontWeight: '500', lineHeight: '24px', fontFamily: 'public sans', fontFeatureSettings: "'clig' off, 'liga' off", height: 'auto' }}>Dear Diary</span>
        </Box>
        
      </Container>
        </div>
    );
};

export default Header;