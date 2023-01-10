import { useEffect, useState } from "react";
import NavigatiionBar from "../../components/NavigatiionBar";
import Titlebar from "../../components/Titlebar";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import { useLocation } from "react-router";
import DiaryCard from "../../components/DiaryCard";
import { UseAppSelector, useAppDispatch } from "../../hooks";
import {
  sendNewCard, getCards
} from "./diaryCardSlice";
import { colRef } from '../../utils/firebaseConfig'
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { FullScreen, useFullScreenHandle } from "react-full-screen";



const DiaryHome = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [width, setWidth] = useState("50vw");
  const [show, setShow] = useState(false);
  const location = useLocation();
  const subTitle = location.state.name;
  const handle = useFullScreenHandle();
  const [fullScreen, setFullScreen] = useState(false);

  const diaryCards = UseAppSelector((state) => {
    return state.diaryCard.diaryCards;
  });

  const color = "#B9E9FF";
  const dispatch = useAppDispatch();

  const handleClickAway = () => {
    if (title === "" && description === "") {
      setWidth("50vw");
      setShow(false);
    }
  };
  const handleOnClick = () => {
    setWidth("100vw");
    setShow(true);
  };

  useEffect(
    ()=>{
      dispatch(getCards());
    },[]
  );



  

  type DiaryCard = {
    title: string;
    subTitle: string;
    description: string;
    color: string;
  };




  // onSnapshot(colRef, (snapshot) => {

  //   console.log(snapshot.docChanges())
  //   let cards: DiaryCard[] = [];
    // snapshot.docs.forEach((doc) => {
    //   // books.push({ ...doc.data(), id: doc.id });
    //   const temp: DiaryCard = {
    //     title: doc.data().title,
    //     subTitle: doc.data().subTitle,
    //     description: doc.data().description,
    //     color: doc.data().color,
    //   };
    //   cards.push(temp);
    // });
    // console.log(cards);
    // dispatch(refreshCards(cards));
  // });

  return (
    <FullScreen handle={handle}>
      {/* Navigation bar */}
      <NavigatiionBar handler={handle} />
      {/* {!handle.active && (
        <button onClick={handle.enter}>Enter fullscreen</button>
      )}
      {handle.active && <button onClick={handle.exit}>Enter fullscreen</button>} */}

      {/* title bar */}
      <Titlebar />

      {/* submition */}
      <ClickAwayListener onClickAway={handleClickAway}>
        <Grid
          container
          spacing={1}
          display="flex"
          direction="row"
          justifyContent="center"
          alignItems="center"
          px={1}
          sx={{ width: { width } }}
        >
          <Grid item xs={12} sm={12} md={11}>
            <TextField
              fullWidth
              size="small"
              value={title}
              placeholder={"Submit new"}
              onClick={handleOnClick}
              onChange={(e) => {
                setTitle(e.currentTarget.value);
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
          {show && (
            <Grid item xs={12} sm={12} md={1} order={{ xs: 3, sm: 3, md: 2 }}>
              <Button
                variant="contained"
                sx={{
                  borderRadius: "25px",
                  width: "100%",
                }}
                onClick={() => {
                  if (title === "" && description === "") {
                    console.log("Missing title");
                    console.log("Missing description");
                  } else if (title === "") {
                    console.log("Missing title");
                  } else if (description === "") {
                    console.log("Missing description");
                  } else {
                    //add new card
                    dispatch(
                      sendNewCard({
                        title,
                        subTitle,
                        description,
                        color,
                      })
                    );
                  }

                  setDescription("");
                  setTitle("");
                  handleClickAway();
                }}
              >
                Submit
              </Button>
            </Grid>
          )}

          {show && (
            <Grid item xs={12} order={{ xs: 2, sm: 2, md: 3 }}>
              <TextField
                fullWidth
                multiline
                rows={4}
                value={description}
                onChange={(e) => {
                  setDescription(e.currentTarget.value);
                }}
                sx={{
                  "& fieldset": {
                    borderRadius: "20px",
                    border: "none",
                    backgroundColor: "#9971E14D",
                  },
                }}
              />
            </Grid>
          )}
        </Grid>
      </ClickAwayListener>

      {/* cards */}
      <Grid container spacing={1} px={1} columns={{ xs: 4, sm: 8, md: 16 }}>
        {diaryCards.map((card, i) => {
          return (
            <Grid item xs={4} sm={4} md={4} key={i}>
              <DiaryCard
                key={i}
                title={card.title}
                subTitle={card.subTitle}
                description={card.description}
                cardColor={card.color}
              />
            </Grid>
          );
        })}
      </Grid>
    </FullScreen>
  );
};

export default DiaryHome;
