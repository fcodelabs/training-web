// signin page is a container component that renders the signin form
// type a const function to return signin form the background should be transparent

import "./signInPage.css";
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import logo from "./logo.png"

const SignInPage = () => {
    return (
        <div className="signin-page-wrapper">
            <div className="signin-page">

                <div className="signin-page-header-background">
                    <img src={logo} alt="logo" className="signin-page-logo"/>
                    <div className="signin-page-title">
                        Dear Diary
                    </div>
                </div>

                <div className="signin-page-form-wrapper">
                    <div className="sign-in-title">
                        <h2>Sign in</h2>
                    </div>

                    <form className="sign-in-form">
                        <TextField id="outlined-basic" label="name" variant="outlined"className="text-field-login"/>
                        <div className="random-button">
                            <Button>Random</Button>
                        </div>
                    </form>

                    <div className="signin-submit-button">
                        <Button>Continue</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;