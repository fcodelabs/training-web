import { Avatar, Box, Grid, Typography } from "@mui/material";
import { IoIosLogOut } from "react-icons/io";
import { BsBookHalf } from "react-icons/bs";
import { Link } from "react-router-dom";
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
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        height="100%"
        px={5}
      >
        <Box display="flex" columnGap={1} alignItems={"center"}>
          <BsBookHalf size={20} color="white" />
          <Typography variant="h6" color="white">
            Dear Diary
          </Typography>
        </Box>
        <Box display="flex" columnGap={1} alignItems={"center"}>
          <Avatar sx={{ width: 30, height: 30 }} />
          <Typography variant="body2" color={"white"}>
            {localStorage.getItem("username")}
          </Typography>
          <Link to={`/`}>
            <IoIosLogOut size={30} color="white" />
          </Link>
        </Box>
      </Grid>
    </Box>
  );
};

export default Header;
