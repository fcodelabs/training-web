import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

const DiaryHome = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const SubmitButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: '99c1ff',
    ml: 1,
    '&:hover': {
      backgroundColor: '88b6ff',
    },
  }));

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(title, description);
  };

  const titleInputHandler = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  const descriptionInputHandler = (event) => {
    event.preventDefault();
    setDescription(event.target.value);
  };

  return (
    <Grid container sx={{ alignItems: 'center', mb: 4 }}>
      <Grid item md={6} xs={8} sx={{ my: 1 }}>
        <FormControl>
          <InputLabel htmlFor='title'>Title</InputLabel>
          <OutlinedInput
            type='text'
            onChange={titleInputHandler}
            id='title'
            label='Title'
            sx={{ borderRadius: 5 }}
            placeholder='Title'
          />
        </FormControl>
      </Grid>

      <Grid item md={6} xs={4} sx={{ display: 'flex' }}>
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
            type='text'
            onChange={descriptionInputHandler}
            multiline
            sx={{ borderRadius: 4 }}
            rows={5}
            id='description'
            label='Description'
            placeholder='Description'
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default DiaryHome;
