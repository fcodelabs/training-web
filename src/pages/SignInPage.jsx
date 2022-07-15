import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';
import CircularIndeterminate from '../components/CircularIndeterminate';

const SignInPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const namesArray = [
    'James',
    'Mary',
    'Robert',
    'Patricia',
    'John',
    'Jennifer',
    'Michael',
    'Linda',
    'David',
    'Elizabeth',
    'William',
    'Barbara',
    'Richard',
    'Susan',
    'Joseph',
    'Jessica',
    'Thomas',
    'Sarah',
    'Charles',
    'Karen',
    'Christopher',
    'Lisa',
    'Daniel',
    'Nancy',
    'Matthew',
    'Betty',
    'Anthony',
    'Margaret',
    'Mark',
    'Sandra',
    'Donald',
    'Ashley',
    'Steven',
    'Kimberly',
    'Paul',
    'Emily',
    'Andrew',
    'Donna',
    'Joshua',
    'Jeffery',
    'Shyann',
  ];

  const SubmitButton = styled(Button)(({ theme }) => ({
    color: 'white',
    backgroundColor: '99c1ff',
    '&:hover': {
      backgroundColor: '88b6ff',
    },
  }));

  const userNameHandler = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const namePickerHandler = () => {
    const index = Math.floor(Math.random() * namesArray.length);
    setName(namesArray[index]);
  };

  const submitNameHandler = () => {
    navigate('/home/' + name);
  };

  return (
    <>
      {isLoading ? (
        <CircularIndeterminate />
      ) : (
        <Grid
          container
          item
          sx={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Grid item md={6} sx={{ m: 'auto' }} xs={11}>
            <Card sx={{ borderRadius: 3 }}>
              <CardContent>
                <Grid sx={{ display: 'flex', alignItems: 'center', mb: 0 }}>
                  <img src={logo} alt='logo' width={60} />
                  <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                    Deary Card
                  </Typography>
                </Grid>
                <Typography
                  variant='h4'
                  component='div'
                  sx={{
                    mx: 'auto',
                    color: '#039be5',
                    textAlign: 'center',
                  }}
                >
                  Sign In
                </Typography>

                <Grid
                  container
                  spacing={1}
                  item
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mt: 4,
                    textAlign: 'center',
                  }}
                >
                  <Grid item md={7} xs={12}>
                    <FormControl fullWidth>
                      <InputLabel htmlFor='title'>Name</InputLabel>
                      <OutlinedInput
                        onChange={userNameHandler}
                        value={name}
                        type='text'
                        id='title'
                        label='Title'
                        sx={{ borderRadius: 3 }}
                        placeholder='Your Nickname'
                        required
                      />
                    </FormControl>
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <SubmitButton
                      onClick={namePickerHandler}
                      size='large'
                      variant='contained'
                      sx={{ borderRadius: 5 }}
                    >
                      random
                    </SubmitButton>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <SubmitButton
                  disabled={name === ''}
                  onClick={submitNameHandler}
                  size='large'
                  variant='contained'
                  sx={{ my: 2, borderRadius: 5, mx: 'auto' }}
                  endIcon={<ArrowForwardIcon />}
                >
                  continue
                </SubmitButton>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default SignInPage;
