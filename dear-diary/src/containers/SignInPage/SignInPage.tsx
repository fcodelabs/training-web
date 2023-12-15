import styled from 'styled-components';
import getrandomName from "../../utilities/randomNameGenerator";
import { Button, TextField } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { userLoggedIn } from "../../redux/user/userSlice";
import { Background } from "../../components/Layout/Layout";
import DearDiary from '../../components/DearDiary/DearDiary';

const SignInPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    z-index: 1;
`;

const SignInPageContainer = styled.div`
    display: flex;
    z-index: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    background-color: rgba(255, 255, 255, 0.796);
    border-radius: 5px;
    box-shadow: 10px 10px 10px 0px rgba(175, 175, 175, 0.244);
`;

const SignInPageFormWrapper = styled.div`
    width: 70%;
    padding: 2% 5% 2% 5%;
`;

const SignInTitle = styled.div`
    text-align: center;
    color: #0092DD;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    padding-bottom: 2%;
    padding-top: 1%;
`;

const SignInForm = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1% 2% 1% 2%;
`;

const LoginTextField = styled(TextField)`
    width: 100%;
    font-size: 16px;
`;

const RandomButton = styled.div`
    margin-left: 2%;
`;

const RandomButtonStyled = styled(Button)`
    text-transform: none !important;
    font-size: 100%;
    background: rgba(0, 146, 221, 0.16) !important;
    color: #0092DD !important;
`;

const SubmitButtonWrapper = styled.div`
    text-align: center;
    margin-top: 3%;
    padding-bottom: 3%;
    width: 100%;
`;

const SubmitButtonStyled = styled(Button)`
    text-transform: none !important;
    font-size: 100%;
    color: rgb(255, 255, 255) !important;
    background: #0093dda8 !important;
`;

const MediaQueryStyles = styled.div`
    @media screen and (max-width: 768px) {
        ${SignInPageContainer} {
            width: 95%;
            justify-content: center;
        }

        ${SignInTitle} {
            transform: scale(0.75);
        }

        ${SignInPageFormWrapper}{
            width: 98%;
        }

        ${SignInPageFormWrapper} {
            width: 98%;
        }

        ${SignInForm} {
            padding: 5% 5% 5% 0%;
            transform: scale(0.85);
        }

        ${SubmitButtonStyled} {
            transform: scale(0.85);
        }
    }
`;

const SignInPage = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [nameRandom, SetRandomName] = useState("");

    const handleLogin = () => {
        dispatch(userLoggedIn(nameRandom));
        navigate('/home');
    };

    return (
        <MediaQueryStyles>
            <Background >
            <SignInPageWrapper>
                <SignInPageContainer>
                    <DearDiary/>
                    <SignInPageFormWrapper>
                        <SignInTitle>Sign In</SignInTitle>
                        <SignInForm>
                            <LoginTextField
                                id="outlined-basic"
                                label="Random name"
                                variant="outlined"
                                className="text-field-login"
                                size="small"
                                value={nameRandom}
                                onChange={(e) => SetRandomName(e.target.value)}
                            />
                            <RandomButton>
                                <RandomButtonStyled variant="contained" className="btn-random" onClick={() => SetRandomName(getrandomName)}>
                                    Random
                                </RandomButtonStyled>
                            </RandomButton>
                        </SignInForm>
                        <SubmitButtonWrapper>
                            <SubmitButtonStyled variant="contained" className="btn-continue" onClick={() => handleLogin()} disabled={!nameRandom}>
                                Continue
                                <ArrowForwardIcon />
                            </SubmitButtonStyled>
                        </SubmitButtonWrapper>
                    </SignInPageFormWrapper>
                </SignInPageContainer>
            </SignInPageWrapper>
        </Background>
        </MediaQueryStyles>
    );
};

export default SignInPage;
