import React, { useState } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

interface DiaryCardProps {
  title: string;
  description: string;
}

const DiaryCard: React.FC<DiaryCardProps> = ({ title, description }) => {
  const [expanded, setExpanded] = useState(false);

  const handleShowMore = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "271px", md: "271px" },
        margin: { xs: "16px", md: "24px" },
        borderRadius: "6px",
      }}
    >
      <CardContent
        sx={{
          padding: { xs: "16px", md: "20px" },
        }}
      >
        <Typography
          variant="h5"
          component="h2"
          sx={{
            marginBottom: "6px",
            color: "#4B465C",
            fontFamily: "public sans",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "24px",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{
            marginBottom: "16px",
            fontFamily: "public sans",
            fontSize: "15px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "22px",
          }}
        >
          {expanded ? description : `${description.slice(0, 100)}...`}
        </Typography>
        <Button
          onClick={handleShowMore}
          sx={{
            padding: "0px",
            typography: {
              color: "#0092DD",
              fontFamily: "public sans",
              fontSize: "15px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "18px",
            },
          }}
        >
          {expanded ? "Show Less" : "Show More"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default DiaryCard;
