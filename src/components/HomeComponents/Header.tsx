import React, { useState } from "react";
import CropFreeIcon from "@mui/icons-material/CropFree";
import PersonIcon from "@mui/icons-material/Person";
import { IconButton } from "@mui/material";
import "./Header.css";

interface Props {
  handle: any;
}

function Header(props: Props) {
  const [fullScreen, setFullScreen] = useState(false);

  const handleClick = (func: any) => {
    setFullScreen(!fullScreen);
    if (fullScreen) {
      func.exit();
    } else {
      func.enter();
    }
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

      <IconButton className="icon-button" title="Profile">
        <PersonIcon fontSize="large" sx={{ p: 1 }} />
      </IconButton>
    </div>
  );
}

export default Header;
