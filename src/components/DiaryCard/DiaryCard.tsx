import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

interface DiaryCardProps {
  title: string;
  username: string;
  description: string;
}

const DiaryCard: React.FC<DiaryCardProps> = ({
  title,
  username,
  description,
}) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const cardStyle: React.CSSProperties = {
    width: "345px",
    margin: "10px",
    backgroundColor: "#0xD4E6F1",
    borderRadius: "10px",
    opacity: "0.8",
  };

  const textareaStyle: React.CSSProperties = {
    width: "100%",
    border: "none",
    borderColor: "white",
    fontSize: "0.9em",
    resize: "inline",
    fontWeight: "bold",
  };

  const buttonContainerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  };

  return (
    <Card style={cardStyle}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="subtitle1">{username}</Typography>
        <textarea
          style={textareaStyle}
          readOnly={!showMore}
          rows={4}
          value={showMore ? description : description.slice(0, 5) + " ......"}
        />
        <div style={buttonContainerStyle}>
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
  );
};

export default DiaryCard;
