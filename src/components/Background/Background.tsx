import React, { ReactNode } from 'react';
import { Box } from '@mui/material';

interface BackgroundProps {
  children: ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/background.png'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 1,
        minHeight: '100vh',
        width: '100%',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }}
    >
      {children}
    </Box>
  );
};

export default Background;
