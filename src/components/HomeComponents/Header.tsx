import React, { useState } from "react";
import CropFreeIcon from "@mui/icons-material/CropFree";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { logout } from "../../Pages/DiaryHome/userRedux";

interface Props {
  handle: any;
}

function Header(props: Props) {
  const [fullScreen, setFullScreen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (func: any) => {
    setFullScreen(!fullScreen);
    if (fullScreen) {
      func.exit();
    } else {
      func.enter();
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="header">
      <IconButton
        onClick={() => {
          handleClick(props.handle);
        }}
        title={fullScreen ? "Exit Full Screen" : "Enter Full Screen"}
      >
        <CropFreeIcon fontSize="large" sx={{ p: 1 }} />
      </IconButton>

      <IconButton
        className="icon-button"
        title="Logout"
        onClick={() => handleLogout()}
      >
        <PowerSettingsNewIcon fontSize="large" sx={{ p: 1 }} />
      </IconButton>
    </div>
  );
}

export default Header;
