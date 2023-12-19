import styled from 'styled-components';
import ValidateDiaryCard from '../../../utilities/validation';
import CloseIcon from '@mui/icons-material/Close';
import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useAppDispatch } from '../../../redux/hooks';
import { addCardByUser } from '../../../redux/diarycard/diaryCardSlice';

type Diary = {
    title: string;
    body: string;
};

type SubmitFormProps = {
    showform: boolean;
    reset: () => void;
};

const StyledSubmitForm = styled.div<{ showform: boolean }>`
  z-index: 5;
  position: fixed;
  top: 0;
  width: 300px;
  height: 100vh;
  background-color: white;
  padding: 1%;
  right: ${({ showform }) => (showform ? '0' : '-100%')};
  transition: right 0.5s ease-in-out;`;

const HeaderSubmit = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 95%;
  padding: 2% 2% 5% 2%;`;

const FormClose = styled.div`
  transition: transform 0.3s ease-in-out;
  background-color: rgba(170, 170, 170, 0.619);
  font-size: 20px;
  border-radius: 20%;
  font-weight: 500;
  padding: 1% 1% 0% 1%;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }`;

const FormTitle = styled.div`
  font-size: 20px;
  color: #4b465c;
  font-weight: 500;`;

const SubmitTitle = styled.div`
  font-size: 20px;
  color: #4b465c;
  font-weight: 500;
  padding: 1% 2% 0% 2%;`;

const SubmitDesc = styled.div`
  font-size: 20px;
  color: #4b465c;
  font-weight: 500;
  width: 100%;
  padding: 5% 2% 0% 2%;`;

const SubmitButton = styled(Button)`
  background-color: #0092dd !important;
  text-transform: none !important;
  margin: 5% 2% 2% 2% !important;
  color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);`;

const CancelButton = styled(Button)`
  text-transform: none !important;
  background-color: #828282 !important;
  margin: 5% 2% 2% 2% !important;
  color: rgb(255, 255, 255);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);`;

const SubmitFormBar = styled.div`
  padding: 1%; 
  font-size: 15px;`;

const TextFieldSingleLine = styled(TextField)`
  width: 99%;`

const TextFieldMultiLine = styled(TextField)`
  width: 95%;`

const SubmitForm: React.FC<SubmitFormProps> = ({ showform, reset }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useAppDispatch();

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value);
    };

    const handleSubmit = () => {
        const newDiary: Diary = {
            title: title,
            body: description,
        };
        if (!ValidateDiaryCard(title, description)) {
            return;
        }
        dispatch(addCardByUser(newDiary));
        setTitle('');
        setDescription('');
        reset();
    };

    const handleCancel = () => {
        setTitle('');
        setDescription('');
    };

    const handleClose = () => {
        setTitle('');
        setDescription('');
        reset();
    };

    return (
        <StyledSubmitForm showform={showform}>
            <HeaderSubmit>
                <FormTitle>Submit New</FormTitle>
                <FormClose onClick={handleClose}>
                    <CloseIcon />
                </FormClose>
            </HeaderSubmit>
            <SubmitTitle>
                <SubmitFormBar>Title</SubmitFormBar>
                <TextFieldSingleLine value={title} onChange={handleTitleChange} placeholder="Enter title" size="small" />
            </SubmitTitle>
            <SubmitDesc>
                <SubmitFormBar>Description</SubmitFormBar>
                <TextFieldMultiLine value={description} onChange={handleDescriptionChange} placeholder="Descryption" multiline rows={10} />
            </SubmitDesc>
            <div>
                <SubmitButton variant="contained" onClick={handleSubmit}>
                    Submit
                </SubmitButton>
                <CancelButton variant="contained" onClick={handleCancel}>
                    Cancel
                </CancelButton>
            </div>
        </StyledSubmitForm>
    );
};

export default SubmitForm;
