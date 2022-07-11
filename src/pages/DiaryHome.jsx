import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import DiaryCard from '../components/DiaryCard.jsx';
import Title from '../components/Title.jsx';
import MainHeader from '../components/MainHeader.jsx';
import { purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { addDoc, doc, updateDoc } from 'firebase/firestore';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import colRef, { db } from '../firebaseConfig';
import { useParams } from 'react-router-dom';

const DiaryHome = () => {
  const params = useParams();
  const totalDiaries = useSelector((state) => state.diary.totalDiaries);
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
    if (title !== '' && description !== '') {
      addDoc(colRef, {
        name: params.name,
        title: title,
        description: description,
        cardColor: cardColor,
      });

      updateDoc(doc(db, 'totalDiaries', 'SEoX1XiXBAtlN8le3f3b'), {
        totalDiaries: parseInt(totalDiaries) + 1,
      });

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
      <MainHeader />

      <Title />

      <Grid container sx={{ alignItems: 'center', my: 2 }}>
        <Grid item md={8} xs={8} sx={{ my: 1, display: 'flex' }}>
          <Grid item md={8}>
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
