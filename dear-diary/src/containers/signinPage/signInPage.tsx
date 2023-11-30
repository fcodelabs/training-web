

import "./signInPage.css";
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import logo from "./logo.png"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const SignInPage = () => {
    return (
        <div className="signin-page-wrapper">
            <div className="signin-page">

                <div className="signin-page-header-background">
                    <img src={logo} alt="logo" className="signin-page-logo" />
                    <div className="signin-page-title">
                        Dear Diary
                    </div>
                </div>

                <div className="signin-page-form-wrapper">
                    <div className="sign-in-title">
                        Sign In
                    </div>

                    <form className="sign-in-form">
                        <TextField id="outlined-basic" label="name" variant="outlined" className="text-field-login" size="small" />
                        <div className="random-button">
                            <Button variant="contained" className="btn-random" style={{ textTransform: 'none' }}>
                                Random
                            </Button>
                        </div>
                    </form>

                    <div className="signin-submit-button">
                        <Button variant="contained" className="btn-continue" style={{ textTransform: 'none' }}>
                            Continue
                            <ArrowForwardIcon/>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;