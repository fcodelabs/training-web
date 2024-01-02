import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import "@fontsource/public-sans/";
import styled from 'styled-components';

const StyledBox = styled(Box)`
  bgcolor: rgba(0, 123, 255, 0);
  height: auto;
  width: auto;
  padding: 24px;
  gap: 12px;
  align-items: center;
  display: flex;
`;

const StyledSpan = styled.span`
  color: #4b465c;
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  font-family: public sans;
  font-feature-settings: 'clig' off, 'liga' off;
  height: auto;
`;

const StyledImg = styled.img`
  width: 40px;
  height: 40px;
`;  

const Header = () => {
    return (
        <div>
        <Container>
        <StyledBox>
        <StyledImg src={'/logo/image1.png'} alt="Logo"/>
          <StyledSpan>Dear Diary</StyledSpan>
        </StyledBox>
        
      </Container>
        </div>
    );
};

export default Header;