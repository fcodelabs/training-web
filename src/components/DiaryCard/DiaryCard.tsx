import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";

interface IDiaryCardProps {
  title: string;
  username: string;
  description: string;
}

const DiaryCard: React.FC<IDiaryCardProps> = ({
  title,
  username,
  description,
}) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{
          backgroundColor: "#0xD4E6F1",
          borderRadius: "10px",
          opacity: "0.8",
          margin: "10px",
          height: "80%",
        }}
      >
        <CardContent>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="subtitle1">{username}</Typography>
          <TextField
            sx={{
              width: "100%",
              border: "none",
              borderColor: "white",
              fontSize: "0.9em",
              resize: "inline",
              fontWeight: "bold",
            }}
            multiline={true}
            rows={showMore ? 5 : 3}
            value={showMore ? description : `${description.slice(0, 100)} ...`}
            variant="filled"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            {!showMore && description.length > 5 && (
              <Button color="primary" onClick={toggleShowMore}>
                Show More
              </Button>
            )}
            {showMore && (
              <Button color="primary" onClick={toggleShowMore}>
                Hide
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default DiaryCard;
