import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
  },
});

const CircularIndeterminate = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <ThemeProvider theme={theme}>
        <CircularProgress size={80} thickness={2} color='primary' />
      </ThemeProvider>
    </Box>
  );
};

export default CircularIndeterminate;
