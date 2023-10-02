import { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { diaryCardColor } from "../../theme/colors";

export type DiaryCardProps = {
  title: string;
  name: string;
  description: string;
};

const DiaryCard = (props: DiaryCardProps) => {
  const [isView, setIsView] = useState<boolean>(false);
  return (
    <Grid
      item
      xs={10}
      sm={6}
      md={5}
      lg={3}
      sx={{
        background: diaryCardColor,
        minHeight: 200,
        borderRadius: 2,
        p: 2,
      }}
    >
      <Box>
        <Typography variant="h6" color={"white"}>
          {props.title}
        </Typography>
        <Typography variant="body2" color={"whitesmoke"}>
          {props.name}
        </Typography>
        <Typography variant="body1" color={"AppWorkspace"}>
          {isView
            ? props.description
            : props.description.length > 5
            ? props.description.slice(0, 5) + "..."
            : props.description}
        </Typography>
        {props.description.length > 5 && (
          <Button
            fullWidth
            sx={{ justifyContent: "end" }}
            variant="text"
            onClick={() => setIsView(!isView)}
          >
            {isView ? (
              <Typography color={"secondary"} variant="body2">
                View Less
              </Typography>
            ) : (
              <Typography color={"secondary"} variant="body2">
                View More
              </Typography>
            )}
          </Button>
        )}
      </Box>
    </Grid>
  );
};

export default DiaryCard;
