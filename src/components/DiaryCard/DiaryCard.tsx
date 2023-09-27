import { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { DiaryCardProps } from "../../types/DiaryCardProps";

export default function DiaryCard(props: DiaryCardProps) {
  const { title, name, description } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  const limitedText = isExpanded
    ? description
    : description.slice(0, 100) + "...";

  function toggleExpansion() {
    setIsExpanded(!isExpanded);
  }

  return (
    <Card
      variant="outlined"
      sx={{
        margin: "25px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "30px",
        backgroundColor: "#F4F2FD",
        opacity: "0.8",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        width: "calc(70vw / 4)",
        "@media (max-width: 1024px)": {
          width: "calc(70vw / 3)",
        },
        "@media (max-width: 768px)": {
          width: "calc(70vw / 2)",
        },
        "@media (max-width: 518px)": {
          width: "calc(70vw / 1)",
        },
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {name}
        </Typography>
        <Typography variant="body2">{limitedText}</Typography>
      </CardContent>
      <CardActions>
        {description.length > 100 && (
          <Button onClick={toggleExpansion} size="small">
            {isExpanded ? "Hide" : "Show More"}
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
