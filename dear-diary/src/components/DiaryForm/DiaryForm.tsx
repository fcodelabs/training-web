import React, { useState, useRef, useEffect } from 'react';
import { TextField, Button, Container, Stack, Typography } from '@mui/material';
import type { RootState } from '../../redux/store/store';
import { useSelector, useDispatch } from 'react-redux';
import { addCard } from '../../redux/card/cardSlice';
import app from '../../firebase/setup';
import { collection, getFirestore, addDoc } from 'firebase/firestore';
const db = getFirestore(app);

const DiaryForm: React.FC = () => {
    const [showForm, setShowForm] = useState(false);
    const [formError, setFormError] = useState<string | null>(null);
    const formRef = useRef(null);
    const user = useSelector((state: RootState) => state.user.user)
    const dispatch = useDispatch()

    const handleFieldClick = () => {
        setShowForm(true);
    };

    async function handleSubmit(event: React.FormEvent): Promise<void> {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const title = (formData.get('title') || '').toString();
        const description = (formData.get('description') || '').toString();

        if (!title && !description) {
            setFormError('Please provide a title and description.');
        } else if (!title){
            setFormError('Please provide a title.')
        }else if (!description){
            setFormError('Please provide a description.')
        }else {
            setFormError(null);
            console.log({
                'Title': title,
                'User Name': user,
                'Description': description,
            });
            const newDiaryEntry: { title: string; username: string; description: string } = {
                title,
                username: user,
                description,
            };
            dispatch(addCard(newDiaryEntry));

            const docRef = await addDoc(collection(db, "cards"), newDiaryEntry);
            console.log("Document written with ID: ", docRef.id);

            (event.target as HTMLFormElement).reset();
            setShowForm(false);
        }
    };

    const handleOutsideClick = (event: MouseEvent) => {
        if (formRef.current && !(formRef.current as any).contains(event.target)) {
            setShowForm(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    
    return (
        <Container>
        <form ref={formRef} onSubmit={handleSubmit}>
            <Stack direction="row" spacing={'4vh'} sx={{ mt: '2vh' }}>
                <TextField label="Submit New" name="title" sx={{ width: showForm ? '100%' : '30%', borderRadius: 15 }} margin="normal" size="small" onClick={handleFieldClick} />
                {showForm && (
                    <Button variant="contained" color="primary" type="submit">
                    Submit
                    </Button>
                )}
            </Stack>
            {showForm && (
                <>
                    <TextField label="Enter Description" name="description" fullWidth margin="normal" size="medium" sx={{ height: 50 }} multiline />
                    {formError && (
                        <Typography variant="body2" color="error">
                            {formError}
                        </Typography>
                    )}
                </>
            )}
        </form>
    </Container>
    );
};

export default DiaryForm;
