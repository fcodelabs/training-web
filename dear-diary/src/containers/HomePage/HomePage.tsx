import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Header from "../../components/Header/Header";
import Stack from "@mui/material/Stack";
import { Alert, Snackbar, useMediaQuery } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useLocation } from "react-router-dom";
import CardAddingForm from "../../components/CardAddingForm/CardAddingForm";
import DiaryCard from "../../components/DiaryCard/DiaryCard";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { getCard } from "../../redux/slices/addCardSlice";
import { setSubmitFalse } from "../../redux/slices/cardSubmitSlice";
import CheckIcon from "@mui/icons-material/Check";
import TimeStamp from "../../components/TimeStamp/TimeStamp";
import { setFalse } from "../../redux/slices/loginStateSlice";

const backgroundImage: string =
  process.env.PUBLIC_URL + "Images/backgroundImage.png";

const homepageStyles = {
  rootStyles: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    overflowY: "auto",
  },
  boxStyles: {
    paddingX: { xs: "16px", md: "24px" },
    paddingTop: "20px",
  },
  homeTextStyles: {
    color: "#4B465C",
    fontFamily: "public sans",
    fontSize: { xs: "30px", md: "36px" },
    fontWeight: 700,
  },
  stackStyles: {
    paddingX: { xs: "16px", md: "24px" },
    paddingY: { xs: "16px", md: "24px" },
  },
  searchBoxStyles: {
    width: { xs: "100%", sm: "60%", md: "40%", lg: "40%", xl: "28%" },
    backgroundColor: "white",
    shadow: "0",
  },
  submitNewButtonStyles: {
    bgcolor: "#0092DD",
    borderRadius: "8px",
    typography: { fontFamily: "public sans", textTransform: "none" },
  },
  gridStyles: { padding: { xs: "16px", md: "24px" } },
  divStyles: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(75,70, 92, 0.68)",
  },
  secondBoxStyles: {
    position: "fixed",
    top: 0,
    right: 0,
    height: "100%",
    width: {
      xs: "100%",
      sm: "40%",
      md: "30%",
      lg: "30%",
      xl: "21%",
    },
    backgroundColor: "white",
    overflowY: "auto",
  },
  loginAlertStyles: {
    fontFamily: "public Sans",
    fontSize: "15px",
    borderRadius: "6px",
    fontWeight: 600,
    boxShadow: "0px 4px 16px 0px rgba(165, 163, 174, 0.45);",
  },
  recordAlertStyles: {
    borderRadius: "6px",
    boxShadow: "0px 4px 16px 0px rgba(165, 163, 174, 0.45);",
  },
};

const HomePage: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const location = useLocation();
  const dispatch = useDispatch();
  const nickname = location.state && location.state.nickname;
  const [showCardAddingForm, setShowCardAddingForm] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");
  const isOpen = useSelector((state: RootState) => state.login.isLoggedIn);
  const isSubmitted = useSelector((state: RootState) => state.submit.isSubmit);

  useEffect(() => {
    dispatch(getCard(nickname));
  }, [dispatch, nickname]);

  const cards = useSelector((state: RootState) => {
    if (searchText === "") {
      return state.addingCards.cards;
    }
    return state.addingCards.cards.filter((card) =>
      card.title.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  const handleShowForm = () => {
    setShowCardAddingForm(true);
  };
  const handleCloseForm = () => {
    setShowCardAddingForm(false);
  };

  const handleCloseSnack = () => {
    dispatch(setSubmitFalse());
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <Box sx={homepageStyles.rootStyles}>
      <Header name={nickname} />
      <Box
        alignItems={isMobile ? "center" : "flex-start"}
        sx={homepageStyles.boxStyles}
      >
        <Typography variant="h4" sx={homepageStyles.homeTextStyles}>
          Home
        </Typography>
      </Box>
      <Stack
        direction={isMobile ? "column" : "row"}
        spacing={2}
        justifyContent="space-between"
        sx={homepageStyles.stackStyles}
      >
        <TextField
          value={searchText}
          onChange={handleSearchChange}
          id="outlined-search"
          variant="outlined"
          type="search"
          size="small"
          fullWidth={isMobile}
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlinedIcon />
              </InputAdornment>
            ),
          }}
          sx={homepageStyles.searchBoxStyles}
        />

        <Button
          variant="contained"
          disableElevation
          onClick={handleShowForm}
          sx={homepageStyles.submitNewButtonStyles}
        >
          Submit New
        </Button>
      </Stack>

      {cards.length === 0 ? (
        <Typography
          justifyContent="center"
          sx={{
            fontFamily: "public sans",
            fontSize: isMobile ? "24px" : "36px",
            textAlign: "center",
            color: "GrayText",
          }}
        >
          No cards found
        </Typography>
      ) : (
        <Grid container spacing={2} sx={homepageStyles.gridStyles}>
          {cards.map((card) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={2}
              xl={2}
              key={cards.indexOf(card)}
            >
              <DiaryCard title={card.title} description={card.description} />
            </Grid>
          ))}
        </Grid>
      )}
      {isOpen && (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={isOpen}
          autoHideDuration={5000}
          onClose={() => dispatch(setFalse())}
          sx={{ mr: isMobile ? 0 : 3 }}
        >
          <Alert
            severity="success"
            sx={homepageStyles.loginAlertStyles}
            onClose={() => dispatch(setFalse())}
            icon={<CheckIcon fontSize="inherit" sx={{ color: "#28C76F" }} />}
          >
            Login Successful
          </Alert>
        </Snackbar>
      )}
      {isSubmitted && (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={isSubmitted}
          onClose={handleCloseSnack}
          sx={{
            mr: 0,
            mt: isMobile ? 6 : 7,
          }}
        >
          <Alert
            onClose={handleCloseSnack}
            icon={<CheckIcon fontSize="inherit" sx={{ color: "#28C76F" }} />}
            sx={homepageStyles.recordAlertStyles}
          >
            <Stack
              direction="row"
              spacing={isMobile ? 3 : 6}
              justifyContent="space-between"
            >
              <Typography
                sx={{
                  fontFamily: "public Sans",
                  fontSize: isMobile ? "13px" : "15px",
                  fontWeight: 600,
                  color: "#4B465C",
                }}
              >
                Record Saved successfully.
              </Typography>
              <TimeStamp />
            </Stack>
          </Alert>
        </Snackbar>
      )}

      {showCardAddingForm && (
        <>
          <Box sx={homepageStyles.divStyles}></Box>
          <Box sx={homepageStyles.secondBoxStyles}>
            <CardAddingForm onClose={handleCloseForm} username={nickname} />
          </Box>
        </>
      )}
    </Box>
  );
};

export default HomePage;
