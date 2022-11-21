import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const DiaryCard = ({ cardData }) => {
  const [submitLabel, setSubmitLabel] = useState("SHOW MORE");
  const [visible, setVisible] = useState("none");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    if (cardData?.description.length <= 100) {
      setDesc(cardData.description);
      setVisible("none");
    } else {
      let temp = cardData.description.substring(0, 100) + "...";
      setDesc(temp);
      setVisible("block");
    }
  },[]);

  const showhide = () => {
    if (submitLabel === "SHOW MORE") {
      setDesc(cardData.description);
      setSubmitLabel("SHOW LESS");
    } else {
      let temp = cardData.description.substring(0, 100) + "...";
      setDesc(temp);
      setSubmitLabel("SHOW MORE");
    }
  };

  return (
    <Grid item xs={11} sm={5} md={4} lg={3}>
      <Card
        className="card-container"
        style={{
          backgroundColor: cardData.color,
          borderRadius: "20px",
          minWidth: "22vw",
        }}
      >
        <CardContent>
          <Typography variant="h5" component="div">
            {cardData.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {cardData.user}
          </Typography>
          <Typography variant="body2">{desc}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" style={{ display: visible }} onClick={showhide}>
            {submitLabel}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default DiaryCard;
