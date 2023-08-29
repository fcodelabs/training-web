import React, { useState, useRef, useEffect } from 'react';
import { TextField, Button, Container, Stack } from '@mui/material';

const DiaryForm: React.FC = () => {
    const [showForm, setShowForm] = useState(false);
    const formRef = useRef(null);
  
    const handleFieldClick = () => {
      setShowForm(true);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        console.log({
            'Title': formData.get('title'),
            'Description': formData.get('description'),
        });
        (event.target as HTMLFormElement).reset();
        setShowForm(false);
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
                <TextField label="Submit New" name="title" sx={{width:showForm ? '100%':'30%', borderRadius: 15}} margin="normal" size="small" onClick={handleFieldClick}/>
                {showForm &&(
                    <Button variant="contained" color="primary" type="submit" >
                        Submit
                    </Button>
                )}
            </Stack>
            {showForm &&(
                <TextField label="Enter Description" name="description" fullWidth margin="normal" size="medium" sx={{height: 50}} multiline/>
            )}
          </form>
      </Container>
    );
};
  
export default DiaryForm;
  