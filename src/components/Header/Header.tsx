import { Box, Typography } from "@mui/material";
import { headerColor } from "../../theme/colors";

const Header = () => {
  return (
    <Box
      sx={{
        height: 60,
        background: headerColor,
        position: "sticky",
        top: 0,
        zIndex: 100,
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: "white",
          textAlign: "center",
          py: 2,
        }}
      >
        Dear Diary
      </Typography>
    </Box>
  );
};

export default Header;
