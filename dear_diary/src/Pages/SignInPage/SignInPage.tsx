import React, { useEffect } from "react";
import { Card,CardContent,CardHeader, TextField, Button,Typography} from "@mui/material";
import Avatar from "@mui/material/Avatar";
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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setNickname } from "../../redux/slices/userSlice";

function SignInPage() {
  const dispatch = useDispatch();
  const nickname = useSelector((state: RootState) => state.user.nickname);
  const user = useSelector((state: RootState)=> state.user);
  const [random, setRandom] = useState("")
  
  

  const handleRandomButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setRandom(randomNickname());
    

    
  };
  const handleContinueButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
   
      dispatch(setNickname(random));
      try{
        localStorage.setItem("userState", JSON.stringify({nickname:random}));
      } catch (error) {
        console.error("Error saving user state to localStorage:", error);
      }
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
          <div className="formContainer"
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
                value = {random} //set the value of the input to the random state
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRandom(e.target.value)}//set the random state to the value of the input

              />
              </div>
              <Button 
              type="button" 
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
              
              </div>
            
          
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
            onClick={handleContinueButtonClick}
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