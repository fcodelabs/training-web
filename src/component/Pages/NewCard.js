import React, { useState } from "react";
import { Paper, TextField, Container, Grid } from "@material-ui/core";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
//import Diary from "./Diary";
import { Link } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
    Box,
    Card,
    CardContent,
    Typography,
    CardActions,
  } from "@material-ui/core";
  import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

  
const useStyles = makeStyles((theme) =>
createStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(3),
    },
  },
})
);

const NewCard = () => {
  const paperStyle = {
    padding: 20,
    height: "100vh",
    width: "175vh",
  };

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleArray, setTitleArray] = useState([]);
  const [error,seterror] = useState({
    titlerror:"",descriptionerror:""
  });

  const submitHandler = (e) => {
    e.preventDefault();
    if (title==="" && description==="") {
      seterror({
        titlerror:"Title is Empty",descriptionerror:"Description is Empty"

      })
    }
    else if (description==="") {
      seterror({
        descriptionerror:"Description is Empty"
        
      })
    }
    else if (title==="") {
      seterror({
        titlerror:"Title is Empty"
        
      })
    }
    else{
    
    let arr = [...titleArray];
    arr.push({ name: title, description: description });
    
    setTitleArray(arr);
    
    setTitle("");
    setDescription("");
    }
    console.log("arr" + titleArray);
    console.log(title);
    console.log(description);
    console.log(titleArray);
  };
  const classes = useStyles();
  const isEmpty = str => !str.trim().length;


  return (
    <Container>
      <form>
        <Paper elevation={10} style={paperStyle}>
         

          <div>
            <h1>Dear Diary</h1>
          </div>

          <TextField
            className="Title"
            style={{ marginRight: "5px", marginBottom: "5px" }}
            id="title"
            label="Title"
            variant="outlined"
            required
            size="small"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}

          />
          <span>
            {
              error.titlerror
            }
          </span>

          <div>
            <div>
              <TextField
                className="Description"
                // style={{ marginRight: "5px", marginBottom: "5px" }}
                multiline
                rows={4}
                id="description"
                label="Description"
                variant="outlined"
                required
                // size="small"
                fullWidth
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <span>
            {
              error.descriptionerror
            }
          </span>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={submitHandler}
              >
                Submit
              </Button>
              
              
            
            </div>
          </div>

          <div>
      </div>

      <div>
        {
       titleArray.map(data => 
        <div>
            <Box className={classes.root}>
                <Card>
                    <CardContent>
                    <Typography variant="h3">{data.name}</Typography>
                    </CardContent>
                    <CardActions>
                    <Button>{data.description}</Button>
                    </CardActions>
                </Card>
            </Box>
        </div> 
        )}
       
        </div>


        
        
          
        
     
          {/* <Grid container spacing={2}>
            {titleArray.map((e) => (
              <Grid xs={3}>
                <Diary name={e.name} description={e.description} />
              </Grid>
            ))}
          </Grid> */}
        </Paper>
      </form>
        
    </Container>
  );
};



export default NewCard;



