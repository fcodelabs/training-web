import React from "react";
import { Card,CardContent,CardHeader, TextField, Button,Typography} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import "./SignInPage.css";
import Logo from "../../Public/Logo.png";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ArrowForward } from "@mui/icons-material";
import { useState } from "react";
import randomNickname from "../../utility/randomNickname";
import LayoutBackground from "../../Components/LayoutBackground/LayoutBackground";
import { Link } from "react-router-dom";

function SignInPage() {
  
  const [nickname, setNickname] = useState("");

  const handleRandomButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); //prevent the form from submitting
    setNickname(randomNickname());
  };

  return (
    <LayoutBackground>
    <div 
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    }}
    >
      <Card 
      style={{
        width: "742px",
        alignSelf: "center",
        borderRadius: "6px"}}
      >
      <CardHeader 
      title={
        <Typography variant="h5" 
        style={{
          fontFamily: "public sans, sans-serif",
          fontSize: "24px",
          fontWeight: 500,
          lineHeight: "24px",
          textAlign: "left",
        }}
        >
          Dear Diary
        </Typography>
      } 
      style={{
        padding: "24px 24px 0px 24px",
        gap: "12px"
      }}
      avatar={<Avatar alt="Logo" src={Logo} style={{width: "40px",
        height: "40px"}}/>}
      >
      </CardHeader>

      <CardContent 
      style={{
        padding: "24px",
      }}
      >
      <div 
      style={{
        width: "694px",
        display: "flex",
        flexDirection: "column",
        gap: "24px"
      }}
      >
        <div className="frame1"
        style={{
          width: "694px",
          height: "39px"
        }}
        >
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
        <div className="frame2"
        style={{
          width: "694px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          alignItems: "center",
          padding: "0px 40px 0px 40px"
        }}
        >
          <form className="formContainer"
          style={{
            width: "515px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px"
          }}
          >
            <div className="frame3">
              <TextField
                label="Your Nickname*"
                variant="outlined"
                fullWidth
                size="small"
                className="nameInput"
                style={{
                  width: "395px",
                  color: "#DBDADE",
                  border: "1px",
                  borderColor: "#DBDADE",
                  borderRadius: "4px",
                  padding: "7px, 10px, 7px, 10px"

                }}
                value={nickname}//set the value of the input to the nickname state
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNickname(e.target.value)}//set the nickname state to the value of the input

              />
              </div>
              <Button 
              type="submit" 
              variant="contained"
              className="submitButton"
              style={{
                padding: "10px, 20px",
                background: '#0092DD29',
                color: '#0092DD',
              }}
              onClick={handleRandomButtonClick}
              >
                Random
              </Button>
              
              </form>
            
          
          <div className="continue"
          style={{
            width: "614px",
            height: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "24px"
          }}
          >
          <Link to="/diary-home">
          <Button 
            type="button" 
            variant="contained" 
            className="secondButton"
            
            style={{
              backgroundColor: "#0092DD",
            }}
            endIcon={<ArrowForward />}
            >
          Continue
          </Button>
          </Link>
          </div>  
        </div>
      </div>
      </CardContent>
    </Card>
    </div>
    </LayoutBackground>
  );
}



export default SignInPage;