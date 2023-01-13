import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import React, { FunctionComponent, useState } from "react";

interface DiaryCardProps {
  title: String;
  subTitle: String;
  description: String;
  cardColor: String;
}

const DiaryCard: FunctionComponent<DiaryCardProps> = ({
  title,
  subTitle,
  description,
  cardColor,
}) => {

    const showingDescription = description.length > 100 ? description.slice(0, 100)+"..." : description;
    const [showDesc, setShowDesc] = useState(showingDescription);
    const [btnName, setBtnName] = useState("Show More")
    const btnVisibility = description.length>100

    const handler = () => {
      if (btnName === "Show More") {
        setBtnName("Show Less");
        setShowDesc(description);
      } else {
        setBtnName("Show More");
        setShowDesc(showingDescription);
      }
    };

  return (
    <Card
      sx={{
        borderRadius: "15px",
        m: 1,
        bgcolor: `${cardColor}`,
      }}
    >
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography
          variant="subtitle1"
          component="div"
          color={"text.secondary"}
        >
          {subTitle}
        </Typography>
        <Typography variant="body1">{showDesc}</Typography>
      </CardContent>
      <CardActions>
        {btnVisibility && (
          <Button
            size="small"
            sx={{
              p: 1,
              color: "black",
              "&:hover": {
                color: "black",
                borderRadius: "25px",
              },
            }}
            onClick={handler}
          >
            {btnName}
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default DiaryCard;
