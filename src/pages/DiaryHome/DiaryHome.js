import React, { useState } from "react";
import { Grid } from "@mui/material";
import "./diaryHome.css";
import AddForm from "../../components/AddForm/AddForm.js";
import DiaryCard from "../../components/DiaryCard/DiaryCard.js";
import { TryOutlined } from "@mui/icons-material";

const DiaryHome = () => {
  const [Cards, setCards] = useState([]);

  const setDetails = (new_card_details) => {
    let temp = Cards.slice();
    temp.push({
      title: new_card_details.title,
      subtitle: "Noah",
      description: new_card_details.desc,
      color: "lightskyblue",
    });
    setCards(temp);
  };

  return (
    <Grid container className="home-main-container">
      <div className="home-inner-container">
        <div className="home-text">
          <h1>Home</h1>
        </div>
        <AddForm passfunction={setDetails} />
        <div className="submitted-cards">
          {Cards.map((item) => (
            <DiaryCard cardData={item} />
          ))}
          {}
        </div>
      </div>
    </Grid>
  );
};

export default DiaryHome;
