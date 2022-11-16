import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import "./diaryHome.css";
import AddForm from "../../components/AddForm/AddForm.js";
import DiaryCard from "../../components/DiaryCard/DiaryCard.js";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { getAllDiaryCards } from "./DiaryHomeSlice";

const DiaryHome = () => {
  const cards = useSelector((state) => state.diaryCards.diaryCards);
  // const user = useSelector((state) => state.diaryCards.nickname);

  // let navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    // if (user === "") {
    //   navigate("/");
    // }
    dispatch(getAllDiaryCards());
    

    
  }, []);

  return (
    <Grid container className="home-main-container">
      <Grid className="home-inner-container-bg-image">
        <Grid container className="home-inner-container">
          <div className="home-text">
            <h1>Home</h1>
          </div>
          <AddForm />
          <Grid className="submitted-cards">
            {cards?.map((item) => (
              <DiaryCard key={item.id} cardData={item} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DiaryHome;
