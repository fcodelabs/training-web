import React, { useEffect } from "react";
import DiaryCard from "./DiaryCard";
import classes from "./DiaryCardList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchDiaryData } from "./redux/SubmitDataAction";

function DiaryCardList(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDiaryData());
  }, [dispatch]);

  const submitDiaryData = useSelector(
    (state) => state.submitDataReducer.allDiary
  );

  console.log("Test");
  console.log(submitDiaryData);

  return (
    <div className={classes.cards}>
      {props.dcards.map((card, index) => (
        <DiaryCard
          key={index}
          id={card.id}
          title={card.title}
          //author={card.author}
          description={card.description}
        />
      ))}
    </div>
  );
}

export default DiaryCardList;
