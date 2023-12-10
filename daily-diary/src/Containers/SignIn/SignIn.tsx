import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, useMediaQuery } from "@mui/material";
import randomNameGenerator from "../../utility";

const backgroundImage: string =
  process.env.PUBLIC_URL + "Images/backgroundImage.png";
const Logo: string = process.env.PUBLIC_URL + "Images/Logo.png";

const signInPageStyles = {
  rootStyles: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
  },
  containerStyles: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "public sans",
  },
  cardContentStyles: {
    width: "auto",
    height: "auto",
  },
  dearDiaryTextStyles: {
    width: "642px",
    height: "24px",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "24px",
    lineHeight: "24px",
  },
  secondContainerStyles: { mb: "10px" },
  signInTextStyles: {
    fontWeight: 700,
    fontSize: "36px",
    fontFamily: "public sans",
  },
  randomButtonStyles: {
    backgroundColor: "rgba(0, 146, 221,0.16)",
    color: "rgba(0, 146, 221)",
    typography: {
      fontFamily: "public sans",
      textTransform: "none",
      fontSize: "15px",
      fontWeight: 500,
    },
    "&:hover": {
      color: "white",
    },
  },
  continueButtonStyles: {
    backgroundColor: "rgba(0, 146, 221,0.65)",
    typography: {
      fontFamily: "public sans",
      textTransform: "none",
      fontSize: "15px",
      fontWeight: 500,
    },
  },
};



const SignIn: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 400px)");
  const navigate = useNavigate();
  const [text, setText] = useState<string>("");
  const [textError, setTextError] = useState<boolean>(false);

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleRandomButtonClick = () => {
    setText(randomNameGenerator());
  };
  const handleContinueButtonClick = () => {
    setTextError(false);
    if (text === "") {
      setTextError(true);
    }
    if (text) {
      navigate("/home", { state: { nickname: text } });
    }
  };

  return (
    <div style={signInPageStyles.rootStyles}>
      <Container sx={signInPageStyles.containerStyles}>
        <Card>
          <CardContent sx={signInPageStyles.cardContentStyles}>
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
                sx={signInPageStyles.dearDiaryTextStyles}
              >
                Dear Diary
              </Typography>
            </Box>
            <Container
              maxWidth="sm"
              sx={signInPageStyles.secondContainerStyles}
            >
              <Typography
                variant="h4"
                color="#0092DD"
                textAlign="center"
                sx={signInPageStyles.signInTextStyles}
              >
                Sign In
              </Typography>
            </Container>
            <Stack
              component="form"
              direction={isMobile ? "column" : "row"}
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
                fullWidth={isMobile}
                placeholder="Your Nickname*"
                onChange={handleTextChange}
                required
                error={textError}
                sx={isMobile ? { width: "100%" } : { width: "50%" }}
              ></TextField>
              <Button
                variant="contained"
                onClick={handleRandomButtonClick}
                fullWidth={isMobile}
                disableElevation
                sx={signInPageStyles.randomButtonStyles}
              >
                Random
              </Button>
            </Stack>
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
                fullWidth={isMobile}
                endIcon={<ArrowForwardIcon />}
                onClick={handleContinueButtonClick}
                disableElevation
                sx={signInPageStyles.continueButtonStyles}
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
