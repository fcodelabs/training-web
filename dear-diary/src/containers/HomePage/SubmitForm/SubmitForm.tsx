import './SubmitForm.css';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';

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
        console.log('Title:', title);
        console.log('Description:', description);
        setTitle('');
        setDescription('');
    };

    const handleCancel = () => {
        setTitle('');
        setDescription('');
        reset();
    };

    return (

        <div
            className={`form-container ${showForm ? 'show' : ''}`}
            style={{ position: 'fixed', top: 0, right: 0, width: '300px', height: '100vh', background: 'white' }}
        >   <div className='header-submit'>
                <div className="form-title">Submit New</div>
                <div className="form-close" onClick={handleCancel} >
                    <CloseIcon />
                </div>
            </div>


            <input type="text" value={title} onChange={handleTitleChange} placeholder="Enter title" />
            <textarea value={description} onChange={handleDescriptionChange} placeholder="Enter description" />
            <button onClick={handleSubmit}>Submit</button>
            
        </div>

    );
}

export default SubmitForm;

