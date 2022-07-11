import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import CardUI from './CardUI';

const DiaryCard = () => {
  const diaries = useSelector((state) => state.diary.diaries);

  return (
    <Grid container>
      {diaries?.map((diary) => (
        <Grid key={diary.id} item md={3} xs={12} sx={{ p: 0.5 }}>
          <CardUI
            id={diary.id}
            name={diary.name}
            title={diary.title}
            cardColor={diary.cardColor}
            description={diary.description}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default DiaryCard;
