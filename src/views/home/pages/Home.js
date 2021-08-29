import React, {useState} from "react";
import AppMenuBar from "../../../components/layouts/app_menu_bar/AppMenuBar";
import DiaryHome from "../../../components/diary_home/DiaryHome";
import DiaryCardContainer from "../../../components/diary_card_container/DiaryCardContainer";
import {useDispatch} from "react-redux";
import {submitCard} from "../redux/homeAction";
import {Box} from "@material-ui/core";

function Home() {
  //states
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  //dispatcher
  const dispatch = useDispatch();

  //title onchange handler
  function titleHandler(event) {
    setTitle(event.target.value);
  }

  //description onchange handler
  function descriptionHandler(event) {
    setDescription(event.target.value);
  }

  //submit button handler
  function submitHandler() {
    //check if title & description is not empty
    if (title.length > 0 && description.length > 0) {
      //add data to reducer
      dispatch(
          submitCard({
            title: title,
            description: description,
          })
      );

      //clear text fields
      setTitle("");
      setDescription("");
    } else {
      if (title.length <= 0) {
        console.log("Missing title");
      }
      if (description.length <= 0) {
        console.log("Missing description");
      }
    }
  }

  return (
      <Box>
        <AppMenuBar/>
        <DiaryHome
            title={title}
            titleHandler={titleHandler}
            description={description}
            descriptionHandler={descriptionHandler}
            submitHandler={submitHandler}
        />
        <DiaryCardContainer/>
      </Box>
  );
}

export default Home;
