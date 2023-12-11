import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Header from "../../Components/Header/Header";
import Stack from "@mui/material/Stack";
import { useMediaQuery } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useLocation } from "react-router-dom";
import CardAddingForm from "../../Components/CardAddingForm/CardAddingForm";
import DiaryCard from "../../Components/DiaryCard/DiaryCard";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

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
};

const HomePage: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const location = useLocation();
  const nickname = location.state && location.state.nickname;
  const [showCardAddingForm, setShowCardAddingForm] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");

  const cards = useSelector((state: RootState) => {
    if (searchText === "") {
      return state.addCard.cards;
    }
    return state.addCard.cards.filter(
      (card) =>
        card.title.toLowerCase().includes(searchText.toLowerCase()) ||
        card.description.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  const handleShowForm = () => {
    setShowCardAddingForm(true);
  };
  const handleCloseForm = () => {
    setShowCardAddingForm(false);
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

      <Grid container spacing={3} sx={homepageStyles.gridStyles}>
        {cards.map((card) => (
          <Grid item xs={12} sm={6} md={3} lg={2} xl={2}>
            <DiaryCard title={card.title} description={card.description} />
          </Grid>
        ))}
      </Grid>
      {showCardAddingForm && (
        <>
          <Box sx={homepageStyles.divStyles}></Box>
          <Box sx={homepageStyles.secondBoxStyles}>
            <CardAddingForm onClose={handleCloseForm} />
          </Box>
        </>
      )}
    </Box>
  );
};

export default HomePage;
