import React, { useEffect } from "react";
import classes from "./HomePage.module.css";
import DiaryCardList from "../DiaryCard/DiaryCardList";
import { useDispatch, useSelector } from "react-redux";
import { fetchDiaryData } from "../DiaryCard/redux/SubmitDataAction";

function AllDiary() {
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
    <div className={classes.main}>
      <DiaryCardList dcards={submitDiaryData} />
    </div>
  );
}

export default AllDiary;
