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

const backgroundImage: string =
  process.env.PUBLIC_URL + "Images/backgroundImage.png";

const HomePage: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const location = useLocation();
  const nickname = location.state && location.state.nickname;
  const [showCardAddingForm, setShowCardAddingForm] = useState<boolean>(false);

  const handleShowForm = () => {
    setShowCardAddingForm(true);
  };
  const handleCloseForm = () => {
    setShowCardAddingForm(false);
  };

  return (
    <Box
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: isMobile ? "cover" : "cover",
        height: "100vh",
      }}
    >
      <Header name={nickname} />
      <Box
        alignItems={isMobile ? "center" : "flex-start"}
        sx={{
          paddingX: { xs: "16px", md: "24px" },
          paddingTop: "20px",
        }}
      >
        <Typography
          variant="h4"
          color="#4B465C"
          fontFamily="public sans"
          sx={{
            fontSize: { xs: "30px", md: "36px" },
            fontWeight: "700",
          }}
        >
          Home
        </Typography>
      </Box>
      <Stack
        direction={isMobile ? "column" : "row"}
        spacing={2}
        justifyContent="space-between"
        sx={{
          paddingX: { xs: "16px", md: "24px" },
          paddingY: { xs: "16px", md: "24px" },
        }}
      >
        <TextField
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
          sx={{
            width: { xs: "100%", sm: "60%", md: "40%", lg: "40%", xl: "28%" },
          }}
        />

        <Button
          variant="contained"
          disableElevation
          onClick={handleShowForm}
          sx={{ bgcolor: "#0092DD", borderRadius: "8px" }}
        >
          Submit New
        </Button>
      </Stack>
      {showCardAddingForm && (
        <>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              height: "100%",
              width: "100%",
              backgroundColor: "rgba(75,70, 92, 0.68)",
            }}
          ></div>
          <Box
            sx={{
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
            }}
          >
            <CardAddingForm onClose={handleCloseForm} />
          </Box>
        </>
      )}
    </Box>
  );
};

export default HomePage;
