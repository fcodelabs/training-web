import React, { useEffect, useState, } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

import "./DiaryHome.css";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import DiaryCard from "../../components/DiaryCard/DiaryCard";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import Button from "../../components/Buttons/Button";
import TextField from "../../components/TextField/TextField";
//for realtime db -->
//import { ref, set, onValue } from "firebase/database";

//for realtime db -->
//import { getDocs, collection, addDoc } from "firebase/firestore/lite";

import { useSelector, useDispatch } from "react-redux";
import { setTitle,setDescription,fetchAllCard, addNewCard } from "./DiaryHomeSlice";
import { Container } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  //backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  //...theme.typography.body2,
  //padding: theme.spacing(1),
  //textAlign: 'center',
  //color: theme.palette.text.secondary,
  maxWidth: 345,
  
}));
const Item2 = styled(Paper)(({ theme }) => ({
 
  backgroundColor: "white",
  height:'10rem'
}));

const DiaryHome = () => {
  //(local state)====================

  const [Styletype, setStyleType] = useState('collaps');

  //(global state(redux))====================
  const title = useSelector((state) => state.diaryHome.title);
  const description = useSelector((state) => state.diaryHome.description);
  const card = useSelector((state) => state.diaryHome.cards);
  const data = useSelector((state) => state.signInPage.userName);
  const error=useSelector((state) => state.diaryHome.cardFailures)
  const dispatch = useDispatch();


  useEffect(() => {
    //firestore databse======================
    // const getUsers = async () => {
    //   const data = await getDocs(userCollectionRef);
    //  dispatch(setCard(data.docs.map((docs) => ({ ...docs.data(), id: docs.id }))));
    // };
    // getUsers();

    //realtime databse======================

    // const getPost = async () => {
    //   const dbRef = ref(db, "Users/");
    //   onValue(dbRef, (snapshot) => {
    //     const data = snapshot.val();
    //     dispatch(setCard(data));
    //   });
    // };
    // getPost();

    //saga calling 1
    dispatch(fetchAllCard());
  },[]);

  useEffect(() => {
    if(error!==''){
      console.log("Error Error :-"+ error);
    }
  },[error]);

  //expand
  function expandField() {
    setStyleType("expand")
  }

  //collaps
  function collapsField() {
    setStyleType("collaps")
  }

  //btn function
  function submitNewCard() {
    setStyleType("collaps")


    if (title === "") {
      console.log("Missing title");
    } else if (description === "") {
      console.log("Missing description");
    } else {
      const newCard = {
        time: new Date(),
        name: data,
        title: title,
        description: description,
      };
      //saga calling 2
      dispatch(addNewCard(newCard));

      dispatch(setTitle(""));
      dispatch(setDescription(""));
    }
  }

  return (
    <Grid top="0vh">
      <Container className="container" maxWidth="xl" style={{ padding: "0" }}>
        {/* header bar */}
        <Grid container className="mainGrid" item lg={12}>
          <Item>
            <HeaderBar className="navBar" />
          </Item>
        </Grid>

        {/* cards grid */}
        <Grid className="DiaryHome">

          <Grid className="cardsGrid" container spacing={1} >

            {/* text input area */}
            <Grid className="textInputArea" item xs={12}sm={12}md={12}lg={12}>

              <Item2 className="item2Content"
                style={{height:Styletype ==='collaps' ?'10rem' : '21rem',transition: "all",transitionDuration: '1s',
                }}
              >
                <h1 className="pageText"onClick={() => collapsField()}> {"error :"+error} </h1>
              

                <Grid>
                  <TextField
                    style={{
                      display: "flex",
                      width: "98%",
                      height: "5rem",
                      borderRadius: "10px",
                      backgroundColor: "white",
                      border: "1px solid transparent",
                      color: "black",
                      fontSize: "18px",
                      position: "relative",
                      left: "1rem",
                    }}
                    style2={{
                      width: Styletype ==='collaps' ?'25rem' : '75rem',
                      transition: "all",
                      transitionDuration: '1s',
                    }}
                    onClick={(e) => {
                      expandField();
                    }}
                    hintText="Type"
                    className="textField"
                    placeHolder="Submit New"
                    value={title}
                    onChange={(e) => {
                      dispatch(setTitle(e.target.value));
                    }}
                  />

                  <Button
                    variant="contained"
                    style1={{
                      top: "10rem",
                      position: "absolute",
                      left: "80rem",
                      display:Styletype ==='collaps' ?'none' : 'block',
                    }}
                    style2={{
                      border: " 1px solid transparent",
                      borderRadius: "25px",
                      top: "-2rem",
                      height: "2rem",
                    }}
                    className="submitBtn"
                    placeHolder="SUBMIT"
                    onClick={() => {
                      submitNewCard();
                    }}
                  />
                </Grid>

                <Grid>
                  <TextareaAutosize
                    aria-label="minimum height"
                    minRows={3}
                    placeholder="Enter Description"
                    style={{
                      width: "98%",
                      height: "10rem",
                      borderRadius: "10px",
                      backgroundColor: "white",
                      border: "1px solid #1976d2",
                      color: "black",
                      fontSize: "18px",
                      display: Styletype ==='collaps' ?'none' : 'inline',
                    }}
                    value={description}
                    onChange={(e) => {
                      dispatch( setDescription(e.target.value));
                    }}
                  />
                </Grid>
              </Item2>
            </Grid>

            {/*cards*/}

            {card.map((card) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={card.time}>
                <Item>
                  <DiaryCard
                    title={card.title}
                    name={card.name}
                    description={card.description}
                  />
                </Item>
              </Grid>
            ))}

          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};


export default DiaryHome;
