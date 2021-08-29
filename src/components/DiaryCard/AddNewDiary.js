import React, { useState } from "react";
import classes from "./AddNewDiary.module.css";
import Card from "@material-ui/core/Card";
import { useDispatch, useSelector } from "react-redux";
import { submitAction } from "./redux/SubmitDataAction";
import { useHistory } from "react-router";

function AddNewDiary() {
  //states
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [isShowCard, setIsShowCard] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();
  const submitDiaryData = useSelector((state) => state.submitDataReducer.title);
  console.log(submitDiaryData);

  function submitDataHandler(event) {
    event.preventDefault();
    if (title === "") {
      console.log("Title Missing");
    } else if (description === "") {
      console.log("Description Missing");
    } else {
      dispatch(submitAction(title, description));
      setTitle("");
      setDescription("");
      setTimeout(history.replace("/all-diary"), 3000);
    }
    console.log(submitDiaryData);
  }


  //functions for get  values
  function titleValueHandler(event) {
    setTitle(event.target.value);
  }

  function descriptionValueHandler(event) {
    setDescription(event.target.value);
  }

  return (
    <div>
      <Card className={classes.card}>
        <form className={classes.form} onSubmit={submitDataHandler}>
          <div className={classes.control}>
            <label htmlFor="title"> Topic </label>
            <input
              placeholder="Topic"
              type="text"
              value={title}
              required
              id="title"
              onChange={titleValueHandler}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="description"> Description </label>
            <textarea
              placeholder="Description"
              id="description"
              value={description}
              required
              rows="5"
              onChange={descriptionValueHandler}
            > </textarea>
            <div className={classes.actions}>
              <button>Add Your Diary</button>
            </div>
          </div>
        </form>
      </Card>
      {/*{isShowCard && <DiaryCard description={description} title={title} />}*/}
    </div>
  );
}

export default AddNewDiary;
