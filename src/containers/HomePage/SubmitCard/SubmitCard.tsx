import React, { useState } from 'react';
import { TextField, Button, IconButton } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 400px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  position: relative;
  height: 100vh;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledTitle = styled.span`
  color: #4B465C;
  font-family: public sans;
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

const StyledCloseButton = styled(IconButton)`
&&&{
  background-color: #4B465C29;
  width: 24px;
  height: 24px;
  border-radius: 6px;
  padding: 7px;
}
`;

const StyledSpan = styled.span`
  margin-bottom: 8px;
  margin-right: 330px;
  font-family: public sans;
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #4B465C;
`;

const StyledTextFieldContainer = styled.div`
  margin-bottom: 20px;
`;

const StyledTextFieldInput = styled(TextField)`
  margin-top: 10px;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledSubmitButton = styled(Button)`
&&&{
  width: 94px;
  height: 38px;
  padding: 10px 20px;
  gap: 12px;
  border-radius: 6px;
  font-family: public sans;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  color: #ffffff;
  background-color: #0092DD;
  letter-spacing: 0.43px;
  text-transform: none;
}
`;

const StyledCancelButton = styled(Button)`
&&&{
  width: 94px;
  height: 38px;
  padding: 10px 20px;
  gap: 12px;
  border-radius: 6px;
  font-family: public sans;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  color: #A8AAAE;
  background-color: rgba(168, 170, 174, 0.16);
  letter-spacing: 0.43px;
  text-transform: none;
}
`;

const StyledToast = styled(ToastContainer)`
  position: top-right;
`;

// define interface to represent component props
interface SubmitCardProps {
  onClose: () => void;
  onsubmit: (title: string, description: string) => void;
}

const SubmitCard: React.FC<SubmitCardProps> = ({ onClose, onsubmit }) => {
  const [title, setTitle] = useState('');             // add state for title
  const [description, setDescription] = useState(''); // add state for description

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value); // update title state
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value); // update description state
  };

  const handleSubmit = () => {
    // add validation for title and description
    // if title is empty, show toast error message
    if (title === '') {
      toast.error('Please enter title');
      return;
    }
    // if description is empty, show toast error message
    if (description === '') {
      toast.error('Please enter description');
      return;
    }
    // if title and description are empty, show toast error message
    if (title === '' || description === '') {
      toast.error('Please enter title and description');
      return;
    }
    // if title and description are not empty, show toast success message
    if (title !== '' && description !== '') {
      toast.success('Submitted successfully');
    }
    // call onsubmit function with title and description
    onsubmit(title, description);
    onClose();
  };

  return (
    <StyledContainer>
      <StyledHeader>
        <StyledTitle>Submit New</StyledTitle>
        <StyledCloseButton color="inherit" onClick={onClose}>
          <img src={process.env.PUBLIC_URL + 'close.svg'} alt="Close Icon" />
        </StyledCloseButton>
      </StyledHeader>
      <form>
        <StyledTextFieldContainer>
          <StyledSpan>Title</StyledSpan>
          <StyledTextFieldInput
            label="Placeholder"
            variant="outlined"
            fullWidth
            size="small"
            value={title}
            onChange={handleTitleChange} // update title state
          />
        </StyledTextFieldContainer>
        <StyledTextFieldContainer>
          <StyledSpan>Description</StyledSpan>
          <StyledTextFieldInput
            label="Placeholder"
            variant="outlined"
            multiline
            rows={13} // set rows to 13
            fullWidth
            value={description}
            onChange={handleDescriptionChange} // update description state
          />
        </StyledTextFieldContainer>
        <StyledButtonContainer>
          <StyledSubmitButton variant="contained" disableElevation onClick={handleSubmit}>
            Submit
          </StyledSubmitButton>
          <StyledCancelButton variant="contained" disableElevation onClick={onClose}>
            Cancel
          </StyledCancelButton>
        </StyledButtonContainer>
        {/* add toast container to show toast messages */}
        <StyledToast position="top-right" autoClose={3000} />
      </form>
    </StyledContainer>
  );
};

export default SubmitCard;
