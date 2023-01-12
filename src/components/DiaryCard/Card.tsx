import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Collapse, IconButton } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";



export default function Card(_props: {
  name: string;
  description: string;
  title: string;
  colour:string;
}) {
  const [fullText, setFullText] = React.useState(false);

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: _props.colour,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

  return (
    <Grid item xs={2} sm={4} md={4}>
      <Collapse in={fullText} collapsedSize={150}>
        <Item
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <Typography variant="h5">{_props.title}</Typography>
          <Typography variant="overline">{_props.name}</Typography>
          <Typography variant="body2" sx={{ textAlign: "justify" }}>
            {_props.description}
          </Typography>
        </Item>
      </Collapse>
      {_props.description.length > 100 ? (
        <IconButton
          sx={{ color: "white", backgroundColor: "black", top: -10 }}
          onClick={() => setFullText(!fullText)}
        >
          {!fullText ? (
            <KeyboardDoubleArrowDownIcon />
          ) : (
            <KeyboardDoubleArrowUpIcon />
          )}
        </IconButton>
      ) : (
        ""
      )}
    </Grid>
  );
}
