import React, { useState, useRef, useEffect } from 'react';
import { TextField, Button, Container, Stack, Typography } from '@mui/material';

interface DiaryFormProps {
    setNewCardData: React.Dispatch<
        React.SetStateAction<{ title: string; username: string; description: string }[]>
    >;
    user: string;
}

const DiaryForm: React.FC <DiaryFormProps> = ({ user, setNewCardData }) => {
    const [showForm, setShowForm] = useState(false);
    const [formError, setFormError] = useState<string | null>(null);
    const formRef = useRef(null);

    const handleFieldClick = () => {
        setShowForm(true);
    };

    const handleSubmit = (event: React.FormEvent) => {
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
            setNewCardData((prevData) => [...prevData, newDiaryEntry]);
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
