import React from "react";
import Logo from "../../Images/Logo.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Avatar from "../../Images/Avatar.png";
interface headerProps {
  name: string;
}
const Header: React.FC<headerProps> = (props) => {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          paddingX: { xs: "16px", md: "24px" },
        }}
      >
        <img src={Logo} alt="Logo" />
        <Typography
          variant="subtitle1"
          color="#4B465C"
          fontFamily="public sans"
          sx={{
            flex: 1,
            fontSize: { xs: "20px", md: "24px" },
            lineHeight: { xs: "24px", md: "32px" },
          }}
        >
          Dear Diary
        </Typography>
      </Box>
      <Stack
        direction="column"
        spacing={-1}
        sx={{
          alignItems: "center",
          gap: "12px",
          paddingX: { xs: "16px", md: "24px" },
          paddingTop: { xs: "16px", md: "24px" },
        }}
      >
        <img
          src={Avatar}
          style={{ width: "40px", height: "40px" }}
          alt="Avatar"
        />
        <Typography
          variant="subtitle1"
          color="#4B465C"
          fontFamily="public sans"
          sx={{
            fontSize: { xs: "14px", md: "16px" },
            lineHeight: { xs: "16px", md: "24px" },
            fontWeight: "500",
            letterSpacing: "0.43px",
          }}
        >
          {props.name}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Header;
