import React from 'react';
import { Container, Grid, Box } from '@mui/material';
import DiaryCard from '../../components/DiaryCard/DiaryCard';
import PrimaryAppBar from '../../components/AppBar/AppBar';
import DiaryForm from '../../components/DiaryForm/DiaryForm';
import type { RootState } from '../../redux/store/store';
import { useSelector } from 'react-redux';

const DiaryHome: React.FC = () => {
  const cards = useSelector((state: RootState) => state.cards.cards)
  return (
    <>
        <PrimaryAppBar />
        <Container sx={{ minHeight: '100vh', minWidth: '100vw', backgroundColor: '#42a5f5' }}>
            <Box sx={{ paddingTop: '15vh' }}>
                <DiaryForm />
                <Grid container sx={{paddingTop: '5vh'}} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                    {cards.map((card, index) => (
                        <Grid key={index} item xs={12} sm={6} md={3}>
                            <DiaryCard title={card.title} subtitle={card.username} description={card.description} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    </>
  );
};

export default DiaryHome;
