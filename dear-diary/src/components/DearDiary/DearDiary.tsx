import styled from "styled-components";

const SignInPageHeaderBackground = styled.div`
  z-index: 1;
  width: 95%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2% 2% 2% 2%;
`;

const SignInPageLogo = styled.img`
  z-index: 1;
  width: 35px;
  height: 35px;
  object-fit: cover;
  margin-right: 1%;
  @media screen and (max-width: 768px) {
    transform: scale(0.85);
  }
`;

const SignInPageTitle = styled.div`
  z-index: 1;
  font-size: 24px;
  font-weight: 500;
  color: #4b465c;
  @media screen and (max-width: 768px) {
    transform: scale(0.85);
  }
`;

const DearDiary = () => {
  return (
    <SignInPageHeaderBackground >
      <SignInPageLogo src={"/logo.png"} alt="logo" />
      <SignInPageTitle >Dear Diary</SignInPageTitle>
    </SignInPageHeaderBackground>
  );
};

export default DearDiary;
