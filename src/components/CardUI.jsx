import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { diaryActions } from '../store/diary-slice';

const CardUI = (props) => {
  const totalDiaries = useSelector((state) => state.diary.totalDiaries);
  const dispatch = useDispatch();
  const { id, name, title, cardColor, description } = props;
  const [buttonText, setButtonText] = useState('Show More');
  const [text, setText] = useState(description);
  const [isShowMore, setShowMore] = useState(false);
  let shortText = useRef('');

  useEffect(() => {
    if (description?.length > 100) {
      shortText.current = description.slice(0, 100).concat(' ', '...');
      setText(shortText.current);
    }
  }, [description]);

  const showMoreHandler = () => {
    setShowMore(!isShowMore);
    if (isShowMore) {
      setButtonText('Show More');
    } else {
      setButtonText('Show Less');
    }
  };

  const showCardCloseHandler = () => {
    dispatch(diaryActions.removeDiary({ id, totalDiaries }));
  };

  return (
    <Card sx={{ borderRadius: 3, backgroundColor: `#${cardColor}` }}>
      <IconButton
        color='error'
        sx={{ float: 'right' }}
        onClick={showCardCloseHandler}
      >
        <CloseIcon />
      </IconButton>
      <CardContent>
        <Typography variant='h5' component='div'>
          {title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          {name}
        </Typography>
        <Typography variant='body2'>
          {isShowMore ? description : text}
        </Typography>
      </CardContent>
      <CardActions>
        {description?.length > 100 && (
          <Button size='small' onClick={showMoreHandler} variant='text'>
            {buttonText}
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default CardUI;
