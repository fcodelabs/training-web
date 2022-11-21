import * as React from "react";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./DiaryCard.css";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function DiaryCard(props) {

  const titleText = props.title;
  const name = props.name;
  const [description, setDiscription] = useState("");
  const [lable, setLable] = useState("show");
  const [expandMore, setExpandMore] = useState("none");
  const [expanded, setExpanded] = useState(false);


  useEffect(() => {

    var tempDiscription= props.description;
    if (tempDiscription.length > 100) {
      setExpandMore("block");
      setDiscription(tempDiscription.substring(0, 80) + "...");
    } else {
      setDiscription(tempDiscription);
    }
  }, [props.description]);

  
  const handleExpandClick = () => {
    if (lable === "show") {
      setExpanded(true);
      setDiscription(props.description);
      setLable("hide");
    } else {
      setExpanded(false);
      setDiscription(props.description.substring(0, 80) + "...");
      setLable("show");
    }
  };

  return (
    <Card sx={{ maxWidth: 345 }} className="DiaryCard">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={titleText}
        subheader={name}
      />

      <CardContent>
        <Typography className="mainText" variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          style={{ display: expandMore }}
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
    </Card>
  );
}
