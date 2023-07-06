import * as React from "react";
import Button from "@mui/material/Button";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

export default function MyApp() {
  return (
    <div>
      <Button
        variant="contained"
        disabled
        endIcon={<ArrowForwardRoundedIcon />}
      >
        Continue
      </Button>
    </div>
  );
}
