import { Box, Button, Grid, TextField } from '@mui/material'
import Textarea from '@mui/joy/Textarea';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { DiaryCard } from './DiaryCard';

export const DiaryHome = () => {
    const location = useLocation();
    const { nickname } = location.state?.nickname || '';

    const [submitText, setSubmitText] = useState('');
    const [description, setDescription] = useState('');
    const [submitted, setSubmitted] = useState(false);
    
    function handleSubmit() {
        console.log(submitText);
        console.log(description);
        setSubmitted(true);

    }

    return (
        <Box sx={{
            backgroundImage: 'linear-gradient(-45deg, #039BE5 0%, #039BE5 33%, #00BCD4 100%)',
            backgroundAttachment: 'fixed',
            display: 'flex',
            justifyContent: 'center',
            // alignItems: 'center',
            height: '100vh',
            width: '100%'
        }}>
            <Box sx={{ width: '100%' }}>
                <Grid container direction={'column'} >
                    <Grid container direction={'row'} alignItems='center'>
                        <TextField
                            placeholder='Submit New'
                            variant='outlined'
                            InputProps={{
                                style: {
                                    borderRadius: 25,
                                    width: '70vw',
                                    height: '40px',
                                    margin: 10,
                                    background: 'transparent',
                                    border: '0',
                                },
                            }}
                            value={submitText}
                            onChange={(e) => setSubmitText(e.target.value)}
                        />
                        <Button
                            variant='contained'
                            sx={{
                                color: 'black',
                                borderRadius: 25,
                                width: '140px',
                                margin: 2,
                                size: 'small',
                                backgroundColor: '#2a79fa'
                            }}
                            onClick={handleSubmit}>
                            Submit</Button>
                    </Grid>
                    <Textarea
                        placeholder='Enter Description'
                        style={{ borderRadius: '25px', backgroundColor: 'transparent', margin: '10px', padding: '10px', width: '80%' }}
                        minRows={4}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    {submitted && (<DiaryCard
                        title={submitText}
                        username={nickname}
                        description={description}
                        />
                    )}
                </Grid>
            </Box>
        </Box >

    )
}