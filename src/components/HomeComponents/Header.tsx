import React, { useState } from "react";
import CropFreeIcon from "@mui/icons-material/CropFree";
import PersonIcon from "@mui/icons-material/Person";
import { IconButton } from "@mui/material";

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
    <div
      style={{
        position: "fixed",
        left: "0",
        right: "0",
        backgroundColor: "#0081C9",
        zIndex: "1",
      }}
    >
      <IconButton
        onClick={() => {
          handleClick(props.handle);
        }}
        title={fullScreen ? "Exit Full Screen" : "Enter Full Screen"}
      >
        <CropFreeIcon fontSize="large" sx={{ p: 1 }} />
      </IconButton>

      <IconButton title="Profile" style={{ float: "right" }}>
        <PersonIcon fontSize="large" sx={{ p: 1 }} />
      </IconButton>
    </div>
  );
  //not implement
}

export default Header;
