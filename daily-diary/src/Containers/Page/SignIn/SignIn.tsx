import React from "react";
import backgroundImage from "../../../Images/backgroundImage.png";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Logo from "../../../Images/Logo.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  fontFamily: "public sans",
};

const randomTextsArray: string[] = [
  "Williams",
  "Jhon",
  "Vihanga",
  "David",
  "Kane",
  "Warner",
  "Kate",
  "Jane",
];

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const [text, setText] = useState<string>("");

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleRandomButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * randomTextsArray.length);
    setText(randomTextsArray[randomIndex]);
  };
  const handleContinueButtonClick = () => {
    navigate("/home");
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Container style={containerStyle}>
        <Card>
          <CardContent
            sx={{
              width: "auto",
              height: "auto",
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              mb={3}
              padding="10px 10px 0px"
              gap="12px"
              flexDirection="row"
            >
              <img src={Logo} alt="Logo" />
              <Typography
                variant="subtitle1"
                color="#4B465C"
                fontFamily="public sans"
                sx={{
                  width: "642px",
                  height: "24px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "24px",
                  lineHeight: "24px",
                }}
              >
                Dear Diary
              </Typography>
            </Box>
            <Container maxWidth="sm" sx={{ mb: "10px" }}>
              <Typography
                variant="h4"
                color="#0092DD"
                fontFamily="public sans"
                textAlign="center"
                fontWeight="700"
                fontSize="36px"
              >
                Sign In
              </Typography>
            </Container>
            <Box
              component="form"
              display="flex"
              gap="12px"
              justifyContent="center"
              alignItems="center"
              padding="10px 20px"
            >
              <TextField
                id="textInput"
                value={text}
                variant="outlined"
                size="small"
                sx={{ flex: "0.75" }}
                placeholder="Your Nickname*"
                onChange={handleTextChange}
              ></TextField>
              <Button
                variant="contained"
                onClick={handleRandomButtonClick}
                sx={{
                  backgroundColor: "rgba(0, 146, 221,0.16)",
                  color: "rgba(0, 146, 221)",
                  typography: {
                    fontFamily: "public sans",
                    textTransform: "none",
                    fontSize: "15px",
                    fontWeight: "500",
                  },
                  "&:hover": {
                    color: "white", // Set your desired hover color
                  },
                }}
              >
                Random
              </Button>
            </Box>
            <Box
              component="form"
              display="flex"
              gap="12px"
              justifyContent="center"
              alignItems="center"
              padding="10px 20px"
            >
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                onClick={handleContinueButtonClick}
                sx={{
                  backgroundColor: "rgba(0, 146, 221,0.65)",
                  typography: {
                    fontFamily: "public sans",
                    textTransform: "none",
                    fontSize: "15px",
                    fontWeight: "500",
                  },
                }}
              >
                Continue
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default SignIn;
