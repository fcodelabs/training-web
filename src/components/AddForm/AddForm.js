import React, { useState } from "react";
import { Grid, Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import "./addForm.css";
import { addDiaryCard } from "../../pages/DiaryHome/DiaryHomeSlice";

const AddForm = () => {
  const [ViewMode, setViewMode] = useState("0");

  const [titleInputValue, setTitleInputValue] = useState("");

  const [descInputValue, setDescInputValue] = useState("");

  const [error, seterror] = useState({
    titlerror: "",
    descriptionerror: "",
  });

  const user = useSelector((state) => state.diaryCards.nickname);


  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (titleInputValue === "" && descInputValue === "") {
      seterror({
        titlerror: "Title is Empty",
        descriptionerror: "Description is Empty",
      });
      console.log("Title is Empty, Description is Empty");
    } else if (descInputValue === "") {
      seterror({
        descriptionerror: "Description is Empty",
      });
      console.log("Description is Empty");
    } else if (titleInputValue === "") {
      seterror({
        titlerror: "Title is Empty",
      });
      console.log("Title is Empty");
    } else {
      const diaryCard = {
        title: titleInputValue,
        description: descInputValue,
        user: user,
        created: new Date(),
      };

      try {
        dispatch(addDiaryCard(diaryCard));
        setDescInputValue("");
        setTitleInputValue("");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Grid container className="submit-new-form-container">
      <div className="submit-new-form-title">
        <TextField
          id="title-input"
          placeholder="Submit New"
          value={titleInputValue}
          required
          onChange={(e) => {
            setTitleInputValue(e.target.value);
          }}
          className={
            ViewMode === "1"
              ? "submit-new-form-title-input-mode-1"
              : "submit-new-form-title-input"
          }
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}
          onFocus={() => {
            setViewMode("1");
          }}
        />
        <span>{error.titlerror}</span>
        <Button
          size="medium"
          className={
            ViewMode === "1"
              ? "view-mode-1-submit-btn"
              : "submit-new-submit-btn"
          }
          onClick={submitHandler}
        >
          {" "}
          SUBMIT{" "}
        </Button>
      </div>

      <div className={"submit-new-form-desc-container"}>
        <TextField
          multiline
          id="desc-input"
          placeholder="Enter Description"
          rows={4}
          required
          fullWidth
          value={descInputValue}
          onChange={(e) => {
            setDescInputValue(e.target.value);
          }}
          onFocus={() => {
            setViewMode("1");
          }}
          className={
            ViewMode === "1" ? "view-mode-1-desc" : "submit-new-form-desc-input"
          }
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}
        />
        <span>{error.descriptionerror}</span>
      </div>
    </Grid>
  );
};

export default AddForm;
