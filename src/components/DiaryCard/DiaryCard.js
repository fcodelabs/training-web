import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


export default function DiaryCard({name, title, description}) {
  const [handleDescriptionLineClamp, setHandleDescriptionLineClamp] =
    React.useState(3);

  const handleDescription = () => {
    if (handleDescriptionLineClamp === 3) {
      setHandleDescriptionLineClamp(100);
    } else {
      setHandleDescriptionLineClamp(3);
    }
  };

  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: 375,
        borderRadius: "15px",
        opacity: 0.94,
        mx: "20px",
        my: "20px",
      }}
    >
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5, fontSize: "13px", fontStyle:"italic" }} color="text.secondary">
          {name}
        </Typography>
        <Box variant="body2">
          <Typography
            sx={{
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: handleDescriptionLineClamp,
              WebkitBoxOrient: "vertical",
              opacity: 0.7,
            }}
          >
            {description}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleDescription} sx={{color:"#0097A7", fontWeight:"bold"}}>
          {handleDescriptionLineClamp === 3 ? "Show More" : "Show Less"}
        </Button>
      </CardActions>
    </Card>
  );
}
