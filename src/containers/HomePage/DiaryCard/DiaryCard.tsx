import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// define interface to represent component props
interface DiaryCardProps {
  title: string;
  description: string;
}

const StyledCard = styled(Card)`
  
  width: 271px;
  height: auto;
  padding: 20px;
  border-radius: 6px;
  align-items: flex-start;
`;

const StyledCardContent = styled(CardContent)`
  align-self: flex-start;
`;

const StyledBox = styled(Box)`
  display: flex;
  height: auto;
  margin-bottom: 6px;
  align-items: flex-start;
`;

const TypographyTitle = styled(Typography)`
  color: #4B465C;
  font-family: public sans;
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

const TypographyDescription = styled(Typography)`
  color: #4B465C;
  font-family: public sans;
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  align-self: flex-start;
  text-align: left;
`;

const StyledButton = styled(Button)`
&&& {
  color: #0092DD;
  font-family: public sans;
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  text-transform: none;
  letter-spacing: 0.43px;
  width: 271px;
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 0 4px 18px 0pc rgba(75, 70, 92, 0.10);
}
`;

const DiaryCard: React.FC<DiaryCardProps> = ({ title, description }) => {
  const [showMore, setShowMore] = useState(false); // state to track whether to show more or not

  const truncatedDescription = showMore ? description : `${description.slice(0, 100)}...`; // truncate description if showMore is false

  const handleToggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <StyledCard>
      <CardContent>
        <StyledBox>
          <TypographyTitle variant="h5" component="div">
            {title}
          </TypographyTitle>
        </StyledBox>
        <StyledBox>
          <TypographyDescription variant="body2">
            {truncatedDescription}
          </TypographyDescription>
        </StyledBox>
      </CardContent>
      <CardActions>
        <StyledButton size="small" onClick={handleToggleShowMore}>
          {showMore ? 'Hide' : 'Show More'}
        </StyledButton>
      </CardActions>
    </StyledCard>
  );
};

export default DiaryCard;
