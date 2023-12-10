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
        backgroundAttachment: 'fixed',
        opacity: 1,
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      <div style={{ position: 'relative', minHeight: '100vh', overflow: 'auto' }}>
        {children}
      </div>
    </Box>
  );
};

export default Background;
