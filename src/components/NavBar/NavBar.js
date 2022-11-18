import { Button, Grid } from "@mui/material";
import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  removeDiaryCards,
  removeNickname,
} from "../../pages/DiaryHome/DiaryHomeSlice";

const NavBar = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  return (
    <Grid
      style={{
        width: "100%",
        height: "10vh",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <Button
        variant="contained"
        style={{
          backgroundColor: "transparent",
          borderRadius: "5px",
          borderColor: "gray",
          color: "white",
          boxShadow: "1px 2px 2px 1px rgba(0, 0, 0, 0.16)",
        }}
        onClick={() => {
          localStorage.removeItem("nickname");
          dispatch(removeNickname());
          dispatch(removeDiaryCards());
          navigate("/");
        }}
        endIcon={<LogoutIcon />}
      >
        LogOut
      </Button>
    </Grid>
  );
};

export default NavBar;
