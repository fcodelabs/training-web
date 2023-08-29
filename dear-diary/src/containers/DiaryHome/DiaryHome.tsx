import React from 'react';
import { Container, Box } from '@mui/material';
import PrimaryAppBar from '../../components/AppBar/AppBar';
import DiaryForm from '../../components/DiaryForm/DiaryForm';

const DiaryHome: React.FC = () => {

  return (
    <>
        <PrimaryAppBar />
        <Container sx={{ minHeight: '100vh', minWidth: '100vw', backgroundColor: '#42a5f5' }}>
            <Box sx={{ paddingTop: '15vh' }}>
                <DiaryForm />
            </Box>
        </Container>
    </>
  );
};

export default DiaryHome;
