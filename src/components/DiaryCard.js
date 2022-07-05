import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useEffect, useRef, useState } from 'react';

const DiaryCard = (props) => {
  const { name, title, subtitle, cardColor, description } = props;
  const [buttonText, setButtonText] = useState('Show More');
  const [text, setText] = useState(description);
  const [isShowMore, setShowMore] = useState(false);
  let shortText = useRef('');
  //let textToDisplay = useRef('loading');

  useEffect(() => {
    if (description.length > 100) {
      shortText.current = description.slice(0, 100);
      setText(shortText.current);
    }
  }, [description, text]);

  const showMoreHandler = () => {
    setShowMore(!isShowMore);
    if (isShowMore) {
      setButtonText('Show More');
    } else {
      setText(shortText.current);
      setButtonText('Show Less');
    }
  };

  const showCardHandler = () => {};

  return (
    <Grid container>
      <Grid item md={3} xs={12} sx={{ p: 0.5 }}>
        <Card sx={{ borderRadius: 3, backgroundColor: `${cardColor}` }}>
          <IconButton
            color='error'
            sx={{ float: 'right' }}
            onClick={showCardHandler}
          >
            <CloseIcon />
          </IconButton>
          <CardContent>
            <Typography variant='h5' component='div'>
              {title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
              {subtitle}
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color='text.secondary'
              gutterBottom
            >
              {name}
            </Typography>

            <Typography variant='body2'>
              {isShowMore ? description : text}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small' onClick={showMoreHandler} variant='text'>
              {buttonText}
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default DiaryCard;
