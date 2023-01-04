import Grid from "@mui/material/Grid";
import NavigatiionBar from "../components/NavigatiionBar";
import Titlebar from "../components/Titlebar";
import Button from "@mui/material/Button";
import { TextareaAutosize, TextField } from "@mui/material";
import { useState, useEffect } from "react";


const DiaryHome = () => {
  const [title, setTitle] = useState("");
  const [display, setDisplay] = useState("none");
  const [buttonClicked, setButtonClicked] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [titleFocused, setTitleFocused] = useState(false);
  const [descriptionFocused, setDescriptionFocused] = useState(false);
  const [width, setWidth] = useState("25vw");
  const [description, setDescription] = useState("");
  useEffect(() => {
    if (titleFocused || descriptionFocused) {
      setWidth("85vw");
      setHidden(false);
      setDisplay("block");
    } else {
      if (title === "" && description === "") {
        setWidth("25vw");
        setHidden(true);
        setDisplay("none");
      }
    }
  }, [titleFocused, descriptionFocused,buttonClicked]);

  return (
    <div>
      {/* Navigation bar */}
      <NavigatiionBar />
      {/* title bar */}
      <Titlebar />

      {/* submition bar */}
      <Grid
        container
        spacing={2}
        display="flex"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item mx={2}>
          <TextField
            size="small"
            value={title}
            placeholder={"Submit new"}
            onChange={(e) => {
              setTitle(e.currentTarget.value);
            }}
            autoFocus={false}
            onFocus={() => {
              setTitleFocused(true);
            }}
            onBlur={() => {
              setTitleFocused(false);
            }}
            sx={{
              "& fieldset": {
                borderRadius: "30px",
                border: "none",
                backgroundColor: "#9971E14D",
                width: { width },
              },
            }}
          />
        </Grid>

        <Grid item sx={{ marginRight: "2vw" }}>
          <Button
            variant="contained"
            onClick={() => {
              setButtonClicked(true);
              console.log(`title:${title}`);
              console.log(`Description:${description}`);
              setDescription("");
              setTitle("");
              setWidth("25vw");
              setHidden(true);
              setDisplay("none");
            }}
            sx={{ borderRadius: "25px", display: { display } }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
      {/* discription box */}

      <Grid
        container
        spacing={2}
        display="flex"
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          
          <TextareaAutosize
            hidden={hidden}
            aria-label="minimum height"
            minRows={6}
            placeholder="Enter Description"
            name="description"
            value={description}
            onChange={(e) => {
              setDescription(e.currentTarget.value);
            }}
            onFocus={(e) => {
              setDescriptionFocused(true);
            }}
            onBlur={(e) => {
              setDescriptionFocused(false);
            }}
            style={{
              width: "93.5vw",
              borderRadius: "15px",
              border: "none",
              backgroundColor: "#9971E14D",
              padding: "2vw",
              marginTop: "2vw",
              outline:"none",
              fontSize:"18px"
            }}
          />
        </Grid>
      </Grid>

      {/* card set */}
    </div>
  );
};

export default DiaryHome;
