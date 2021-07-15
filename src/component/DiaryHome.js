import React, { useState,useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch,useSelector } from "react-redux";
import { getCards ,addCard} from '../redux/DiaryAction'
import { useHistory } from "react-router-dom";
import DiaryCard from "./DiaryCard";
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { TextField, Button, TextareaAutosize, Box } from "@material-ui/core";

function DiaryHome () {
  const classes = useStyles();
  const dispatch = useDispatch();
  const cards = useSelector(state => state.cards)
  const history = useHistory();
  
  //const node = useRef();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [add, setAdd] = useState(false);
  
useEffect(() => {
    dispatch(getCards())
    if(!localStorage.getItem("nickName")){
      console.log("Name")
        history.push("/")
    }
})    

  const onClick = (e) => {
    e.preventDefault();
    if (!title) {
      console.log("Missing Title");
      alert("Missing Title");
      return;
    }
    if (!description) {
      alert("Missing Description");
      console.log("Missing Description");
      return;
    }else{
      dispatch(addCard({"title":title,"description":description,"subtitle":localStorage.getItem("nickName")})) 
    setDescription("")
    setTitle("")
    setAdd(false);
  }}

  return (
    <div className={classes.root}>
       <h1 className="h1">HOME</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <Box m={2} pt={2} flexDirection="column">
          <TextField
            id="standard-basic"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onFocus={() => {
              setAdd(true);
            }}
          />
        </Box>

        <Box m={2} pt={2} flexDirection="column">
          {add && (
            <TextareaAutosize
              className={classes.textArea}
              aria-label="minimum height"
              rowsMin={4}
              placeholder="Enter Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          )}
        </Box>

        <Button className={classes.btn} size="small" onClick={onClick}>
          SUBMIT
        </Button>
      </form>

      
      <div>
      <Grid container spacing={1}>
      <div className={classes.cardsList}>
        <Box
          display="flex"
          p={2}
          m={2}
          css={{ minWidth: 300 }}
          flexWrap="wrap"
          className={classes.container}
        >
         {cards.length > 0 ? (
            cards.map((card) => (
              <Grid item xs>
              <Box p={2} m={2}>
                <DiaryCard
                  title={card.title}
                  subtitle={card.nickName}
                  description={card.description}
                />
              </Box>
              </Grid>
            ))
          ) : (
            <Box p={2} m={2}>
              <DiaryCard
                title="Nothing to Show"
                subtitle="Nothing to Show"
                description={""}
              />
            </Box>
          )}
        </Box>
      </div>
      </Grid>
      </div>
    </div>
  );
};

DiaryHome.propTypes = {
  cards:PropTypes.array,
  addCard:PropTypes.func
};

const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(50deg ,#ffffff ,#4169e1)",
    margin: 15,
    borderRadius: 15,
    color: "white",
    padding: "5px 30px",
  },
  textArea: {
    background: "linear-gradient(50deg ,#ffffff ,#4169e1)",
    borderRadius: 15,
    width: "95%",
  },
  btn: {
    background: "linear-gradient(120deg, #615259 , #975474)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 35,
    padding: "5px 30px",
  },
  cardsList: {
    width: "100%",
    minHeight: "100px",
  },
}));

export default DiaryHome;
