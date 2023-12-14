import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const Logo: string = process.env.PUBLIC_URL + "Images/Logo.png";
const Avatar: string = process.env.PUBLIC_URL + "Images/Avatar.png";

const headerStyles = {
  boxStyles: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    paddingX: { xs: "16px", md: "24px" },
  },
  dearDiaryTextStyles: {
    flex: 1,
    fontSize: { xs: "20px", md: "24px" },
    color: "#4B465C",
    fontFamily: "public sans",
    lineHeight: { xs: "24px", md: "32px" },
  },
  stackStyles: {
    alignItems: "center",
    gap: "12px",
    paddingX: { xs: "16px", md: "24px" },
    paddingTop: { xs: "16px", md: "24px" },
  },
  avatarStyles: { width: "40px", height: "40px" },
  profileNameStyles: {
    color: "#4B465C",
    fontFamily: "public sans",
    fontSize: { xs: "14px", md: "16px" },
    lineHeight: { xs: "16px", md: "24px" },
    fontWeight: "500",
    letterSpacing: "0.43px",
  },
};

interface headerProps {
  name: string;
}
const Header: React.FC<headerProps> = (props) => {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Box sx={headerStyles.boxStyles}>
        <img src={Logo} alt="Logo" />
        <Typography variant="subtitle1" sx={headerStyles.dearDiaryTextStyles}>
          Dear Diary
        </Typography>
      </Box>
      <Stack direction="column" spacing={-1} sx={headerStyles.stackStyles}>
        <img src={Avatar} style={headerStyles.avatarStyles} alt="Avatar" />
        <Typography variant="subtitle1" sx={headerStyles.profileNameStyles}>
          {props.name}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Header;
