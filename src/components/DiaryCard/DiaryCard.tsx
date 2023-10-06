import { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { normalCardColor, specialCardColor } from "../../theme/colors";

interface IDiaryCardProps {
  title: string;
  name: string;
  description: string;
}

const DiaryCard = (props: IDiaryCardProps) => {
  const [isView, setIsView] = useState<boolean>(false);
  return (
    <Grid
      item
      xs={10}
      sm={6}
      md={5}
      lg={3}
      sx={{
        background:
          localStorage.getItem("username") === props.name
            ? normalCardColor
            : specialCardColor,
        minHeight: 200,
        borderRadius: 2,
        p: 2,
      }}
    >
      <Box>
        <Typography variant="h6">{props.title}</Typography>
        <Typography variant="body2" sx={{ mb: 2 }} color={"GrayText"}>
          {props.name}
        </Typography>
        <Typography variant="body1" sx={{ wordWrap: "break-word" }}>
          {isView
            ? props.description
            : props.description.length > 5
            ? props.description.slice(0, 5) + "..."
            : props.description}
        </Typography>
        {props.description.length > 5 && (
          <Grid container justifyContent="flex-end">
            <Button
              sx={{ justifyContent: "end" }}
              variant="text"
              onClick={() => setIsView(!isView)}
            >
              {isView ? (
                <Typography color={"primary"} variant="body2">
                  View Less
                </Typography>
              ) : (
                <Typography color={"primary"} variant="body2">
                  View More
                </Typography>
              )}
            </Button>
          </Grid>
        )}
      </Box>
    </Grid>
  );
};

export default DiaryCard;
