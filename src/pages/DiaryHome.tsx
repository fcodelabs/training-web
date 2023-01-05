import Grid from "@mui/material/Grid";
import NavigatiionBar from "../components/NavigatiionBar";
import Titlebar from "../components/Titlebar";
import Button from "@mui/material/Button";
import { TextareaAutosize, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import DiaryCard from "../components/DiaryCard";


const DiaryHome = () => {
  const [title, setTitle] = useState("");
  const [display, setDisplay] = useState("none");
  const [buttonClicked, setButtonClicked] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [titleFocused, setTitleFocused] = useState(false);
  const [descriptionFocused, setDescriptionFocused] = useState(false);
  const [width, setWidth] = useState("25vw");
  const [description, setDescription] = useState("");

  const desc: string =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  useEffect(() => {
    if (titleFocused || descriptionFocused) {
      setWidth("98vw");
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
        spacing={1}
        display="flex"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ width: { width }, mx: "1px" }}
      >
        <Grid item md={11} sx={{width:"98%"}}>
          <TextField
            fullWidth
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
                
              },
            }}
          />
        </Grid>

        <Grid item md={1} order={{ xs: 3, sm: 3,md:2 }}>
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
            sx={{ borderRadius: "25px", display: { display }, width: {xs:"94vw" ,md:"100px"} }}
          >
            Submit
          </Button>
        </Grid>

        {/* discription box */}
      
        
          <Grid item sx={{width:"98vw"}} order={{xs:2,sm:2,md:3}} >
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
                width: "95%",
                borderRadius: "15px",
                border: "none",
                backgroundColor: "#9971E14D",
                padding: "2vw",
                marginTop: "2vw",
                outline: "none",
                fontSize: "18px",
              }}
            />
          
        </Grid>
      </Grid>

      {/* card set */}

      <Grid container spacing={1} columns={{ xs: 4, sm: 8, md: 16 }}>
        <Grid item xs={4} sm={4} md={4}>
          <DiaryCard
            title={"Title 01"}
            subTitle="SubTitle 01"
            description={desc}
            cardColor="#B9E9FF"
          />
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <DiaryCard
            title={"Title 01"}
            subTitle="SubTitle 01"
            description={desc.slice(0, 50)}
            cardColor="#B9E9FF"
          />
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <DiaryCard
            title={"Title 01"}
            subTitle="SubTitle 01"
            description={desc}
            cardColor="#B9E9FF"
          />
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <DiaryCard
            title={"Title 01"}
            subTitle="SubTitle 01"
            description={desc}
            cardColor="#B9E9FF"
          />
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <DiaryCard
            title={"Title 01"}
            subTitle="SubTitle 01"
            description={desc}
            cardColor="#B9E9FF"
          />
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <DiaryCard
            title={"Title 01"}
            subTitle="SubTitle 01"
            description={desc}
            cardColor="#B9E9FF"
          />
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <DiaryCard
            title={"Title 01"}
            subTitle="SubTitle 01"
            description={desc}
            cardColor="#B9E9FF"
          />
        </Grid>
        
      </Grid>
    </div>
  );
};

export default DiaryHome;
