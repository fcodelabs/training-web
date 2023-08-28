import React,{ useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import logo from '../../images/logo192.png'
import { Stack } from '@mui/material';

export default function SignInCard() {
    const navigate = useNavigate();
    const [nickname, setNickname] = useState('');
    const [isNicknameValid, setIsNicknameValid] = useState(true);
    const [isDisabled, setIsDisabled] = useState(true)

    useEffect(() => {
        if (nickname.trim() === '') {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }
    }, [nickname]);

    const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newNickname = event.target.value;
        setNickname(newNickname);
        if (newNickname.trim() === '') {
            setIsNicknameValid(false);
        } else {
            setIsNicknameValid(true);
        }
    };

    const handleContinue = () => {
        console.log({
            name: nickname,
        });
        navigate('/Diary');
    };

    const createRandomName = () => {
        const randomName = Math.random().toString(36).substring(7);
        setNickname(randomName);
        setIsNicknameValid(true);
    };

    return (
        <Card variant="outlined" 
            sx={{ 
                minWidth: '58.5%',
                Width: '70vw',
                height: '50vh',
                borderRadius: 3,
                marginTop: '25vh',
                alignItems: 'center',
                justifyItems: 'center'
            }}
            >
            <CardContent sx={{ alignItems: 'center', justifyContent: 'center' }}>
                <Stack direction="row" spacing={'1vw'} sx={{ alignItems: 'center', mt: '2vh', ml: '1vw' }}>
                    <img src={logo} alt="React Logo" style={{ width: '5%', height: '5%' }} />
                    <Typography> Dear Diary </Typography>
                </Stack>
                <Stack sx={{ alignItems: 'center', justifyContent: 'center', mt: '1vh' }}>
                    <Typography component="h1" variant="h4" color='primary' sx={{ alignItems: 'center', justifyContent: 'center' }}>
                        Sign in
                    </Typography>
                </Stack>
                <Stack direction="row" spacing={'4vh'} sx={{ alignItems: 'center', justifyContent: 'center', mt: '2vh' }}>
                    <Box component="form" sx={{ alignItems: 'center', justifyContent: 'center' }}>
                        <TextField
                            margin="normal"
                            required
                            sx={{ borderRadius: 3, width: '28vw' }}
                            id="name"
                            label="Your Nickname"
                            name="name"
                            value={nickname}
                            error={!isNicknameValid}
                            helperText={!isNicknameValid && 'Nickname is required'}
                            onChange={handleNicknameChange}
                        />
                    </Box>
                    <Button
                        variant="contained"
                        sx={{ 
                            height:'6vh',
                            borderRadius: 4
                        }}
                        onClick={createRandomName}
                    >
                        Random   
                    </Button>
                </Stack>
            </CardContent>
            <CardActions sx={{ alignItems: 'center', justifyContent: 'center' }}>
                <Button
                    type="submit"
                    variant="contained"
                    disabled={isDisabled}
                    sx={{
                        mb: '3vh',
                        height:'7.5vh',
                        borderRadius: 5,
                    }}
                    onClick={handleContinue}
                >
                    Continue <ArrowForwardIcon sx={{ marginLeft: 1 }}/>
                </Button>
            </CardActions>
        </Card>
    );
}
