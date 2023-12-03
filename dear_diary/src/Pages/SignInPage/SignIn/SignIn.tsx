import React from "react";
import { Card } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./SignIn.css";
import Logo from "./Logo.png";
import { TextField, Button } from "@mui/material";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function SignIn() {
  return (
    
    <div className="card_div">
      <Card className="card">
      <CardHeader 
      title={
        <Typography variant="h5" className="headingTypography">
          Dear Diary
        </Typography>
      }
      className="header1" 
      avatar={<Avatar alt="Logo" src={Logo} className="logo_image" />}
      >
      </CardHeader>

      <CardContent className="header2">
      <div className="frame">
        <div className="frame1">
        <Typography
              variant="h5"
              className="sign_in_text "
              style={{
                fontFamily: 'Public Sans, sans-serif',
                fontSize: '36px',
                fontWeight: 700,
                lineHeight: '24px', 
                letterSpacing: '0px',
                textAlign: 'center',
                color: '#0092DD',
              }}
            >
              Sign In
            </Typography>
        </div>  
        <div className="frame2">
          <div>
          <form className="formContainer">
      <TextField
        label="Your Nickname*"
        variant="outlined"
        fullWidth
        size="small"
        className="nameInput"
      />
      <Button type="submit" variant="contained" color="primary" className="submitButton">
        Random
      </Button>
      </form>
          <div className="continue">
          <Button type="button" variant="contained" className="secondButton">
          Another Button
          </Button>
          </div>  
          </div>
        </div>
      </div>
      </CardContent>
    </Card>
    </div>
  );
}

export default SignIn;