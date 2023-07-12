import { Box, Button, Grid, TextField, Typography, makeStyles } from '@mui/material'
import Textarea from '@mui/joy/Textarea';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { DiaryCard } from '../../components/DiaryCard/DiaryCard';

type DiaryEntry = {
    title: string;
    username: string;
    description: string;
};

export const DiaryHome = () => {
    const location = useLocation();
    const { nickname } = location.state?.nickname || '';


    const [submitText, setSubmitText] = useState('');
    const [description, setDescription] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [diaryEntries, setDiaryEntries] = useState<DiaryEntry[]>([]);

    function handleSubmit() {
        if (submitText.trim() === '' && description.trim() === '') {
            setError(true);
        } else {
            setSubmitted(true);
            setDiaryEntries((prevEntries) => [
                ...prevEntries,
                {
                    title: submitText,
                    username: nickname,
                    description: description,
                },
            ]);
            setSubmitText('');
            setDescription('');
            setError(false);
        }
    }

    return (
        <Box sx={{
            backgroundImage: 'linear-gradient(-45deg, #039BE5 0%, #039BE5 33%, #00BCD4 100%)',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            overflowX: 'hidden',
            minHeight: '100vh',
            overflowY: 'auto'

        }}>
            <Box sx={{
                width: '100%',
                margin: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Grid container direction={'column'} >
                    <Grid
                        container direction={'row'}
                        alignItems='center'
                        justifyContent='center'
                        width='100%'>

                        <Grid item xs={8} alignItems='center'>
                            <TextField
                                placeholder='Submit New'
                                variant='outlined'
                                InputProps={{
                                    style: {
                                        borderRadius: 25,
                                        width: '800px',
                                        height: '40px',
                                        margin: 2,
                                        background: 'transparent',
                                        border: '0',
                                    },
                                }}
                                value={submitText}
                                onChange={(e) => setSubmitText(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={4}>

                            <Button
                                variant='contained'
                                color='primary'
                                sx={{
                                    color: 'black',
                                    borderRadius: 25,
                                    width: '100%',
                                    maxWidth: 200,
                                    margin: 2,
                                    size: 'small',
                                    // backgroundColor: '#2a79fa'
                                }}
                                onClick={handleSubmit}>
                                Submit</Button>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent='center'>
                        <Grid item xs={12}>
                            <TextField
                                placeholder='Enter Description'
                                style={{
                                    borderRadius: '25px',
                                    backgroundColor: 'transparent',
                                    margin: '10px',
                                    padding: '10px',
                                    width: '95vw'
                                }}
                                multiline
                                rows={6}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            {error && submitted && (
                                <Box sx={{ textAlign: 'center', marginTop: '10px', marginLeft: '10px' }}>
                                    <Typography variant='body1' color='error' fontSize='12' align='left'>
                                        Error: Please provide a title or description.
                                    </Typography>
                                </Box>
                            )}
                        </Grid>
                    </Grid>
                    {diaryEntries.length > 0 && (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
                            {diaryEntries.map((entry, index) => (
                                <Box key={index} sx={{ margin: '10px' }}>
                                    <DiaryCard
                                        title={entry.title}
                                        username={entry.username}
                                        description={entry.description}
                                    />
                                </Box>
                            ))}
                        </Box>
                    )}
                </Grid>
            </Box >
        </Box>
    )
}