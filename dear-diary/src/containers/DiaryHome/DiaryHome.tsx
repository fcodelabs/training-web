import React from 'react';
import { Container, Grid, Box } from '@mui/material';
import DiaryCard from '../../components/DiaryCard/DiaryCard';
import PrimaryAppBar from '../../components/AppBar/AppBar';
import DiaryForm from '../../components/DiaryForm/DiaryForm';

const DiaryHome: React.FC = () => {
  const cardData = [
      { title: 'Card 1', username: 'thusara', content: 'Content for Card 1' },
      { title: 'Card 2', username: 'thusara', content: 'Content for Card 2' },
      { title: 'Card 3', username: 'thusara', content: 'Content for Card 3' },
      { title: 'Card 1', username: 'thusara', content: 'Content for Card 1' },
      { title: 'Card 2', username: 'thusara', content: 'Content for Card 2' },
      { title: 'Card 3', username: 'thusara', content: 'Content for Card 3 Content for Card 3 Content for Card 3 Content for Card 3 Content for Card 3 Content for Card 3 Content for Card 3 Content for Card 3 Content for Card 3 Content for Card 3 Content for Card 3 Content for Card 3 Content for Card 3 Content for Card 3 Content for Card 3 Content for Card 3 Content for Card 3 Content for Card 3 Content for Card 3 Content for Card 3' },
      { title: 'Card 1', username: 'thusara', content: 'Content for Card 1' },
      { title: 'Card 2', username: 'thusara', content: 'Content for Card 2' },
      { title: 'Card 3', username: 'thusara', content: 'Content for Card 3' },
      { title: 'Card 1', username: 'thusara', content: 'Content for Card 1' },
      { title: 'Card 2', username: 'thusara', content: 'Content for Card 2' },
      { title: 'Card 3', username: 'thusara', content: 'Content for Card 3' },
      { title: 'Card 2', username: 'thusara', content: 'Content for Card 2' },
      { title: 'Card 3', username: 'thusara', content: 'Content for Card 3' },
      { title: 'Card 1', username: 'thusara', content: 'Content for Card 1' },
      { title: 'Card 2', username: 'thusara', content: 'Content for Card 2' },
      { title: 'Card 3', username: 'thusara', content: 'Content for Card 3' },
  ];

  return (
    <>
        <PrimaryAppBar />
        <Container sx={{ minHeight: '100vh', minWidth: '100vw', backgroundColor: '#42a5f5' }}>
            <Box sx={{ paddingTop: '15vh' }}>
                <DiaryForm />
                <Grid container sx={{paddingTop: '5vh'}} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                    {cardData.map((card, index) => (
                        <Grid key={index} item xs={12} sm={6} md={3}>
                            <DiaryCard title={card.title} subtitle={card.username} description={card.content} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    </>
  );
};

export default DiaryHome;
