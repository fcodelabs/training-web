import { Typography } from "@mui/material";
import React from "react";

type Props = {
  title: string;
  author: string;
  description: string;
};

function TodoCard(props: Props) {
  return (
    <div
      style={{
        backgroundColor: "#2A2E34",
        color: "#fff",
        // width: "100%",
        borderRadius: "10px",
        wordWrap: "break-word",
        margin: "0px 10p",
        padding: "10px",
        position: "relative", // Add the position property
      }}
    >
      <Typography>{props.title}</Typography>
      <Typography>{props.description}</Typography>
      <Typography
        style={{
          position: "absolute", // Add the position property
          bottom: "10px", // Add the bottom property
          right: "10px", // Add the right property
        }}
      >
        {props.author}
      </Typography>
    </div>
  );
}

export default TodoCard;
