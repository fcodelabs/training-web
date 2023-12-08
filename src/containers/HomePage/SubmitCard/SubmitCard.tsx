import * as React from 'react';
import { TextField, Button, IconButton } from '@mui/material';
import { useState } from 'react';
import "@fontsource/public-sans/";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface SubmitCardProps {
    onClose: () => void;
}

const SubmitCard: React.FC<SubmitCardProps> = ({ onClose }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value);
    };

    const handleSubmit = () => {
        console.log('Title:', title);
        console.log('Description:', description);
        if (title === '') {
            toast.error('Please enter title');
            return;
        };
        if (description === '') {
            toast.error('Please enter description');
            return;
        };
        if (title === '' || description === '') {
            toast.error('Please enter title and description');
            return;
        };
        if (title !== '' && description !== '') {
            toast.success('Submitted successfully');
        };
        onClose();
    };

    return (
        <div style={{ width: '400px', backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', boxSizing: 'border-box', position: 'relative', height: '100vh' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <span style={{
                    color: '#4B465C',
                    fontFamily: 'public sans',
                    fontFeatureSettings: "'clig' off, 'liga' off",
                    fontSize: '18px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '24px',
                }}>Submit New</span>
                <IconButton style={{ backgroundColor: '#4B465C29', width: '24px', height: '24px', borderRadius: '6px', padding: '7px' }} color="inherit" onClick={onClose}>
                    <img src={process.env.PUBLIC_URL+'close.svg'} alt="Close Icon" />
                </IconButton>
            </div>
            <form>
                <div style={{ marginBottom: '20px' }}>
                    <span style={{
                        marginBottom: '8px', marginRight: '330px',
                        fontFamily: 'public sans',
                        fontFeatureSettings: "'clig' off, 'liga' off",
                        fontSize: '13px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: 'normal',
                        color: '#4B465C'
                    }}>Title</span>
                    <TextField
                        style={{ marginTop: '10px' }}
                        label="Placeholder"
                        variant="outlined"
                        fullWidth
                        size='small'
                        value={title}
                        onChange={handleTitleChange}
                    />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <span style={{
                        marginBottom: '8px', marginRight: '330px',
                        fontFamily: 'public sans',
                        fontFeatureSettings: "'clig' off, 'liga' off",
                        fontSize: '13px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: 'normal',
                        color: '#4B465C'
                    }}>Description</span>
                    <TextField
                        style={{ marginTop: '10px' }}
                        label="Placeholder"
                        variant="outlined"
                        multiline
                        rows={13}
                        fullWidth
                        value={description}
                        onChange={handleDescriptionChange}
                    />
                </div>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <Button
                        style={{
                            width: '94px', height: '38px', padding: '10px 20px', gap: '12px', borderRadius: '6px',
                            fontFamily: 'public sans',
                            fontSize: '15px',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            lineHeight: '18px',
                            color: '#ffffff',
                            backgroundColor: '#0092DD',
                            letterSpacing: '0.43px',
                            textTransform: 'none',
                        }}
                        variant="contained"
                        disableElevation
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                    <Button
                        style={{
                            width: '94px', height: '38px', padding: '10px 20px', gap: '12px', borderRadius: '6px',
                            fontFamily: 'public sans',
                            fontSize: '15px',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            lineHeight: '18px',
                            color: '#A8AAAE',
                            backgroundColor: 'rgba(168, 170, 174, 0.16)',
                            letterSpacing: '0.43px',
                            textTransform: 'none',
                        }}
                        variant="contained"
                        disableElevation
                        onClick={onClose}
                    >
                        Cancel
                    </Button>
                </div>
                <ToastContainer position="top-right" autoClose={3000} />
            </form>
        </div>
    );
};

export default SubmitCard;
