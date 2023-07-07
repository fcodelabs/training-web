import { Box, Button, Grid, TextField, TextareaAutosize } from '@mui/material'
import Textarea from '@mui/joy/Textarea';

export const DiaryHome = () => {
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
                            }}>
                            Submit</Button>
                    </Grid>
                    <Textarea
                        placeholder='Enter Description'
                        style={{ borderRadius: '25px', backgroundColor: 'transparent', margin: '10px', padding: '10px', width: '80%' }}
                        minRows={4}
                    />
                </Grid>
            </Box>
        </Box >

    )
}