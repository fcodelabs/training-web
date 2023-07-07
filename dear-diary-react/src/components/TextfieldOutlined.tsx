import * as React from "react";
import TextField from "@mui/material/TextField";
import { generateRandomName } from "./RandomButton";
import { useState } from "react";
import RandomButton from "./RandomButton";

export default function MyApp() {
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Your Nickname *"
        variant="outlined"
        sx={{ width: "300px" }}
        value={RandomButton}
      />
    </div>
  );
}
