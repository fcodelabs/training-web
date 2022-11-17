import React, { useEffect } from "react";
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
import {
  descVisiilityInline,
  descVisiilityNone,
  btnVisibilityEnable,
  btnVisibilityDisable,
  txtAreaStyleToLarge,
  txtAreaStyleToSmall,
  textFieldLengthToLong,
  textFieldLengthToShort,
  durationNow,
  setTitle,
  setDescription,
  fetchAllCard,
  addNewCard,
} from "./DiaryHomeSlice";
import { Container } from "@mui/material";
//import { Container } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  //backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  //...theme.typography.body2,
  //padding: theme.spacing(1),
  //textAlign: 'center',
  //color: theme.palette.text.secondary,
  maxWidth: 345,
}));
const Item2 = styled(Paper)(({ theme }) => ({
  //maxWidth:'100%',
  //height:'9rem',
  backgroundColor: "#09aee8",
}));

const DiaryHome = () => {
  //(global state(redux))====================
  const descVisiility = useSelector((state) => state.diaryHome.descVisiility);
  const btnVisibility = useSelector((state) => state.diaryHome.btnVisibility);
  const txtAreaStyle = useSelector((state) => state.diaryHome.txtAreaStyle);
  const textFieldLength = useSelector(
    (state) => state.diaryHome.textFieldLength
  );
  const duration = useSelector((state) => state.diaryHome.duration);
  const title = useSelector((state) => state.diaryHome.title);
  const description = useSelector((state) => state.diaryHome.description);
  const card = useSelector((state) => state.diaryHome.cards);
  const data = useSelector((state) => state.signInPage.userName);
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
  }, []);

  //expand
  function expandField() {
    dispatch(descVisiilityInline());
    dispatch(btnVisibilityEnable());
    dispatch(txtAreaStyleToLarge());
    dispatch(textFieldLengthToLong());
    dispatch(durationNow());
  }

  //collaps
  function collapsField() {
    dispatch(descVisiilityNone());
    dispatch(btnVisibilityDisable());
    dispatch(txtAreaStyleToSmall());
    dispatch(textFieldLengthToShort());
    dispatch(durationNow());
  }

  //btn function
  function submitNewCard() {
    dispatch(descVisiilityNone());
    dispatch(btnVisibilityDisable());
    dispatch(txtAreaStyleToSmall());
    dispatch(textFieldLengthToShort());
    dispatch(durationNow());

    console.log(data);

    if (title === "") {
      console.log("Missing title");
    } else if (description === "") {
      console.log("Missing description");
    } else {
      //createPost();
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

  // const createPost = async () => {
  //   //firestore db=======
  //   let id = card == null ? 0 : card.length;
  //   await addDoc(userCollectionRef, {
  //     id:id,
  //     name: data,
  //     title: title,
  //     description: description,
  //   });

  //   //realtime  db=======
  //   let id = card == null ? 0 : card.length;
  //   let cards = {
  //     id: id,
  //     title: title,
  //     name: data,
  //     description: description,
  //   };
  //   set(ref(db, "Users/" + id), cards);

  //   dispatch(setTitle(""));
  //   dispatch(setDescription(""));
  // };

  return (
    <Grid top="0vh">
      <Container className="container" maxWidth="xl" style={{ padding: "0" }}>
        {/* header bar */}
        <Grid container className="mainGrid" item lg={12}>
          <Item>
            <HeaderBar className="navBar" />
          </Item>
        </Grid>

        {/* main grid */}
        <Grid
          className="DiaryHome"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Grid
            style={{ margin: "2rem", position: "relative" }}
            container
            spacing={1}
          >
            {/* text input area */}
            <Grid
              className="textInputArea"
              item
              xs={12}sm={12}md={12}lg={12}
            >
              <Item2
                className="content"
                style={{
                  height: txtAreaStyle,
                  transition: "all",
                  transitionDuration: duration,
                }}
              >
                <h1
                  onClick={() => collapsField()}
                  style={{ display: "flex", color: "white" }}
                >
                  Home
                </h1>

                <Grid  xs={12}sm={12}md={12}lg={12}>
                <TextField
                  style={{
                    display: "flex",
                    width: "98%",
                    height: "5rem",
                    borderRadius: "10px",
                    backgroundColor: "#09aee8",
                    border: "1px solid transparent",
                    color: "black",
                    fontSize: "18px",
                    position: "relative",
                    left: "1rem",
                  }}
                  style2={{
                    width: textFieldLength,
                    transition: "all",
                    transitionDuration: duration,
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
                    top: "9rem",
                    position: "absolute",
                    left: "80rem",
                    display: btnVisibility,
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

                  <Grid  xs={12}sm={12}md={12}lg={12}>
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={3}
                  placeholder="Enter Description"
                  style={{
                    width: "98%",
                    height: "10rem",
                    borderRadius: "10px",
                    backgroundColor: "rgb(80 198 239)",
                    border: "1px solid transparent",
                    color: "black",
                    fontSize: "18px",
                    display: descVisiility,
                  }}
                  value={description}
                  onChange={(e) => {
                    dispatch(setDescription(e.target.value));
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
