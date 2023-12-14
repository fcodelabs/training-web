
// Import necessary styles
import './SubmitForm.css';
import CloseIcon from '@mui/icons-material/Close';
import { Button, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';

interface SubmitFormProps {
    showForm: boolean;
    reset: () => void;
}

const SubmitForm: React.FC<SubmitFormProps> = ({ showForm, reset }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value);
    };

    const handleSubmit = () => {
        setTitle('');
        setDescription('');
        
    };

    const handleCancel = () => {
        setTitle('');
        setDescription('');
        reset()
    };

    return (
        <div className={`submit-form ${showForm ? 'expanded' : 'collapsed'}`}>
            <div className='header-submit'>
                <div className="form-title">Submit New</div>
                <div className="form-close" onClick={handleCancel}>
                    <CloseIcon />
                </div>
            </div>
            <div className='submit-title'>
                <div style={{ padding: "1%", fontSize: '15px' }}>Title</div>
                <TextField value={title} onChange={handleTitleChange} placeholder="Enter title" size='small' style={{ width: "99%" }} />
            </div>

            <div className='submit-desc'>
                <div style={{ padding: "1%", fontSize: '15px' }}>Description</div>
                <TextField value={description} onChange={handleDescriptionChange} placeholder="Descryption" multiline rows={10} style={{ width: "95%" }} />
            </div>

            <div>
                <Button className='submit-button' variant="contained" onClick={handleSubmit} style={{ background: "#3f51b5", color: "white" }}>Submit</Button>
                <Button className='cancel-button' variant="contained" onClick={handleCancel} style={{ background: "#3f51b5", color: "white" }}>Cancel</Button>
            </div>
        </div>
    );
}

export default SubmitForm;
