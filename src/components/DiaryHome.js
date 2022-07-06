import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { diaryActions } from '../store/diary-slice';
import DiaryCard from './DiaryCard';

const DiaryHome = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [cardColor, setCardColour] = useState('');

  const SubmitButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: '99c1ff',
    ml: 1,
    '&:hover': {
      backgroundColor: '88b6ff',
    },
  }));

  const titleInputHandler = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  const descriptionInputHandler = (event) => {
    event.preventDefault();
    setDescription(event.target.value);
  };
  const cardColourInputHandler = (event) => {
    event.preventDefault();
    setCardColour(event.target.value);
  };

  const submitHandler = () => {
    const randomId = Math.floor(100 + Math.random() * 900);
    if (title !== '' && description !== '') {
      dispatch(
        diaryActions.addDiary({
          id: randomId,
          name: 'React',
          title: title,
          description: description,
          cardColor: cardColor,
        })
      );

      setTitle('');
      setDescription('');
      setCardColour('');
    }
    if (title === '') {
      console.log('Missing title');
    } else if (description === '') {
      console.log('Missing description');
    }
  };

  return (
    <>
      <Grid container sx={{ alignItems: 'center', mb: 4 }}>
        <Grid item md={8} xs={8} sx={{ my: 1, display: 'flex' }}>
          <Grid item md={12}>
            <FormControl>
              <InputLabel htmlFor='title'>Title</InputLabel>
              <OutlinedInput
                value={title}
                type='text'
                onChange={titleInputHandler}
                id='title'
                label='Title'
                sx={{ borderRadius: 5 }}
                placeholder='Title'
                required
              />
            </FormControl>
          </Grid>
          <Grid item md={12} sx={{ ml: 1 }}>
            <FormControl>
              <InputLabel htmlFor='cardColor'>Card Colour</InputLabel>
              <OutlinedInput
                type='text'
                value={cardColor}
                onChange={cardColourInputHandler}
                id='cardColor'
                label='Card Color'
                sx={{ borderRadius: 5 }}
                placeholder='Hexadecimal color'
                required
              />
            </FormControl>
          </Grid>
        </Grid>

        <Grid item md={4} xs={4} sx={{ display: 'flex' }}>
          <Box sx={{ flexGrow: 1 }} />
          <SubmitButton
            onClick={submitHandler}
            size='large'
            variant='contained'
            sx={{ ml: 4, borderRadius: 5 }}
          >
            Submit
          </SubmitButton>
        </Grid>

        <Grid item md={12} sx={{ my: 1 }} xs={12}>
          <FormControl fullWidth sx={{ borderRadius: 5 }}>
            <InputLabel htmlFor='description'>Description</InputLabel>
            <OutlinedInput
              value={description}
              type='text'
              onChange={descriptionInputHandler}
              multiline
              sx={{ borderRadius: 4 }}
              rows={5}
              id='description'
              label='Description'
              placeholder='Description'
              required
            />
          </FormControl>
        </Grid>
      </Grid>
      <DiaryCard />
    </>
  );
};

export default DiaryHome;
