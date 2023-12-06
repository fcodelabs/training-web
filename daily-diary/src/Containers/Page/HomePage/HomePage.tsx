import React from "react";
import backgroundImage from "../../../Images/backgroundImage.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Header from "../../../Components/Header/Header";
// import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { useMediaQuery } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const HomePage: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Box
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: isMobile ? "cover" : "cover",
        height: "100vh",
      }}
    >
      <Header />
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
            width: { xs: "100%", sm: "75%", md: "35%" },
          }}
        />

        <Button
          variant="contained"
          disableElevation
          sx={{ bgcolor: "#0092DD", borderRadius: "8px" }}
        >
          Submit New
        </Button>
      </Stack>
    </Box>
  );
};

export default HomePage;
