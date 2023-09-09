import React, { ReactNode } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

type Props = {
  children: ReactNode;
};

export default function BasicCard(props: Props) {
  return (
    <Card
      sx={{ minWidth: 275 }}
      variant="outlined"
      style={{
        backgroundColor: "#A854F7",
        padding: "20px",
        color: "white",
        borderRadius: "10px",
      }}
    >
      <CardContent>{props.children} </CardContent>
    </Card>
  );
}
