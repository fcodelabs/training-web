import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import "./diaryHome.css";
import AddForm from "../../components/AddForm/AddForm.js";
import DiaryCard from "../../components/DiaryCard/DiaryCard.js";
import { useDispatch, useSelector } from "react-redux";
import { getAllDiaryCards } from "./DiaryHomeSlice";
import NavBar from "../../components/NavBar/NavBar";

const DiaryHome = () => {
  const cards = useSelector((state) => state.diaryCards.diaryCards);
  const error = useSelector((state) => state.diaryCards.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDiaryCards());
  }, []);

  return (
    <Grid container className="home-main-container">
      <Grid className="home-inner-container-bg-image">
        <Grid container className="home-inner-container">
          <NavBar />
          {error ? (
            <Grid
              style={{
                color: "red",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <h3>! ! {error}</h3>
            </Grid>
          ) : (
            ""
          )}
          <div className="home-text">
            <h1>Home</h1>
          </div>
          <AddForm />
          <Grid container spacing={1} className="submitted-cards">
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
