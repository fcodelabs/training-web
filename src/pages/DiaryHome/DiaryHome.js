import React, { useState } from "react";
import { Grid } from "@mui/material";
import "./diaryHome.css";
import AddForm from "../../components/AddForm/AddForm.js";
import DiaryCard from "../../components/DiaryCard/DiaryCard.js";
import { useSelector } from "react-redux";

const DiaryHome = () => {
  const name = useSelector((state) => state.nickname.nickname);

  const [Cards, setCards] = useState([]);

  const setDetails = (new_card_details) => {
    let temp = Cards.slice();
    temp.push({
      title: new_card_details.title,
      subtitle: name,
      description: new_card_details.desc,
      color: "lightskyblue",
    });
    setCards(temp);
  };

  return (
    <Grid container className="home-main-container">
      <Grid container className="home-inner-container">
        {/* <div></div> */}
        <div className="home-text">
          <h1>Home</h1>
        </div>
        <AddForm passfunction={setDetails} />
        <Grid className="submitted-cards">
          {Cards.map((item, index) => (
            <DiaryCard key={index + 1} cardData={item} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DiaryHome;
