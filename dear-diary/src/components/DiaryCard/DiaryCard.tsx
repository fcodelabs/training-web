import React, { useState } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

const diaryCardStyles = {
  titleStyles: {
    marginBottom: "6px",
    color: "#4B465C",
    fontFamily: "public sans",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "24px",
  },
  descriptionStyles: {
    marginBottom: "16px",
    fontFamily: "public sans",
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "22px",
    textOverflow: "ellipsis",
    whiteSpace: "normal",
    // wordBreak: "break-all",
  },
  descriptionStylesForOneWord: {
    marginBottom: "16px",
    fontFamily: "public sans",
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "22px",
    textOverflow: "ellipsis",
    whiteSpace: "normal",
    wordBreak: "break-all",
  },
  buttonStyles: {
    padding: "0px",
    typography: {
      color: "#0092DD",
      fontFamily: "public sans",
      fontSize: "15px",
      fontStyle: "normal",
      fontWeight: 600,
      textTransform: "none",
      lineHeight: "18px",
    },
  },
  cardStyles: {
    borderRadius: "6px",
    boxShadow: "0px 4px 18px 0px rgba(75, 70, 92, 0.10)",
  },
};
interface DiaryCardProps {
  title: string;
  description: string;
}

const DiaryCard: React.FC<DiaryCardProps> = ({ title, description }) => {
  const [expanded, setExpanded] = useState(false);
  const longWordsRegex = /\b\w{35,}\b/g;
  const longWords = description.match(longWordsRegex);

  const handleShowMore = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={diaryCardStyles.cardStyles}>
      <CardContent>
        <Typography
          variant="h5"
          component="h2"
          sx={diaryCardStyles.titleStyles}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={
            longWords === null
              ? diaryCardStyles.descriptionStyles
              : diaryCardStyles.descriptionStylesForOneWord
          }
        >
          {description.length <= 100 || expanded
            ? description
            : `${description.slice(0, 100)}...`}
        </Typography>
        {description.length > 100 && (
          <Button onClick={handleShowMore} sx={diaryCardStyles.buttonStyles}>
            {expanded ? "Hide" : "Show More"}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default DiaryCard;
