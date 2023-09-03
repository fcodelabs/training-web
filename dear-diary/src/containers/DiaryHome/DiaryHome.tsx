import React, {useState} from 'react';
import { Container, Grid, Box } from '@mui/material';
import DiaryCard from '../../components/DiaryCard/DiaryCard';
import PrimaryAppBar from '../../components/AppBar/AppBar';
import DiaryForm from '../../components/DiaryForm/DiaryForm';

interface diaryHomeProps { user: string; }

const DiaryHome: React.FC<diaryHomeProps> = ({ user }) => {
  const [newCardData, setNewCardData] = useState<{ title: string; username: string; description: string }[]>([]);

  return (
    <>
        <PrimaryAppBar />
        <Container sx={{ minHeight: '100vh', minWidth: '100vw', backgroundColor: '#42a5f5' }}>
            <Box sx={{ paddingTop: '15vh' }}>
                <DiaryForm user={user} setNewCardData={setNewCardData}/>
                <Grid container sx={{paddingTop: '5vh'}} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                    {newCardData.map((card, index) => (
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
