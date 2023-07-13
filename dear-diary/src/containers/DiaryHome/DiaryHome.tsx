import { Box, Button, TextField, Typography, makeStyles } from '@mui/material'
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DiaryCard } from '../../components/DiaryCard';
import { addDiaryEntry, setDescription, setError, setSubmitText, setSubmitted } from '../../redux/diarySlice';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../config/firebase';


type DiaryEntry = {
    title: string;
    username: string;
    description: string;
};

export const DiaryHome = () => {
    const location = useLocation();
    const { nickname } = location.state || { nickname: '' };
    const cardsCollectionRef = collection(db, 'cards')

    const diaryEntries = useSelector((state: any) => state.diary.diaryEntries);
    const error = useSelector((state: any) => state.diary.error);
    const submitText = useSelector((state: any) => state.diary.submitText);
    const description = useSelector((state: any) => state.diary.description);
    const submitted = useSelector((state: any) => state.diary.submitted);
    const dispatch = useDispatch();

    async function handleSubmit() {
        if (submitText.trim() === '' && description.trim() === '') {
            dispatch(setError(true));
        } else {
            dispatch(addDiaryEntry({ title: submitText, username: nickname, description }));
            dispatch(setSubmitted(true));
            dispatch(setSubmitText(''));
            dispatch(setDescription(''));
            dispatch(setError(false));

            try {
                //save card entries to Firestore
                const newDiaryEntry: DiaryEntry = {
                    title: submitText,
                    username: nickname,
                    description: description
                };

                const docRef = await addDoc(cardsCollectionRef, newDiaryEntry);
                console.log('Document written with ID: ', docRef.id);
            } catch (error) {
                console.error('Error adding document: ', error);

            }
        }
    }
    return (

        <Box sx={{
            backgroundImage: 'linear-gradient(-45deg, #039BE5 0%, #039BE5 33%, #2cc7db 100%)',
            height: '100vh',
            overflowY: 'auto',
            display: 'flex',
            justifyContent: 'center',
        }}>


            <Box aria-label='diary-container' sx={{
                //backgroundColor: 'pink',
                margin: '20px',
                width: '100vw',
                height: '290px'
            }}>
                <Box>
                    <Typography
                        variant='h4'
                        align='left'
                        color='white'
                        marginLeft={'20px'}
                        marginTop={'5px'}
                        fontWeight={'bold'}>Home</Typography>
                </Box>
                <Box sx={{
                    //backgroundColor: 'purple',
                    height: '70px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <TextField
                        placeholder="Submit New"
                        variant="outlined"
                        size='small'
                        InputProps={{
                            style: {
                                borderRadius: '40px',
                                marginLeft: '20px',
                                width: '50vw'
                            }
                        }}
                        value={submitText}
                        onChange={(e) => dispatch(setSubmitText(e.target.value))}
                    />
                    <Button
                        variant="contained"
                        sx={{
                            borderRadius: '40px',
                            marginRight: '20px',
                            width: '150px',
                        }}
                        onClick={handleSubmit}>
                        Submit
                    </Button>
                </Box>
                <Box sx={{
                    //backgroundColor: 'lightblue',
                    height: '150px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <TextField
                        placeholder='Enter Description'
                        fullWidth
                        InputProps={{
                            style: {
                                borderRadius: '10px',
                                marginLeft: '20px',
                                marginRight: '20px',
                                maxWidth: '80vw',
                            }
                        }}
                        multiline
                        rows={4}
                        value={description}
                        onChange={(e) => dispatch(setDescription(e.target.value))}
                    />
                </Box>
                <Box sx={{
                    //backgroundColor: 'lightgreen',
                    height: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    {error && submitted && (
                        <Typography
                            variant='body1'
                            color='error'
                            fontSize='12'
                            marginLeft={'20px'}
                            align='left'>
                            Error: Please provide a title or description
                        </Typography>
                    )}
                </Box>
                <Box sx={{
                    //backgroundColor: 'orange',
                    height: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around'
                }}>

                    {diaryEntries.length > 0 && (
                        <Box aria-label='cards-container' sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            margin: '10px',
                            //backgroundColor: 'red',
                            justifyContent: 'space-between',
                        }}>
                            {diaryEntries.map((entry: DiaryEntry, index: number) => (
                                <Box aria-label='card-container'
                                    sx={{
                                        //backgroundColor: 'blue',
                                        //width: '350px',
                                        justifyContent: 'center'
                                    }}
                                    key={index}>
                                    <DiaryCard
                                        title={entry.title}
                                        username={entry.username}
                                        description={entry.description}
                                    />
                                </Box>
                            ))}
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    )
}