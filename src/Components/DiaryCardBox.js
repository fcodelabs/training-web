import React, { useState } from "react";
import { Paper } from "@material-ui/core";

function DiaryCardBox({ name, description }) {
  const paperStyle = {
    padding: 10,
    height: "20vh",
    width: "30vh",
    margin: "5px",
  };

  return (
    <Paper elevation={10} style={paperStyle}>
      <div>
        <h5>Title: {name}</h5>
      </div>
      <div>
        <h5>Description: {description}</h5>
      </div>
    </Paper>
  );
}

export default DiaryCardBox;
