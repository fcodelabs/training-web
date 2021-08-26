import React, { useState } from "react";
import AppMenuBar from "../components/layouts/AppMenuBar";
import DiaryHome from "../components/DiaryHome";
import DiaryCardContainer from "../components/DiaryCardContainer";

function Home() {
  //states
  const [tempData, setTempData] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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
      console.log(`title: ${title}`);
      console.log(`description: ${description}`);

      //set data to temp array
      setTempData((oldData) => {
        return [
          ...oldData,
          {
            title: title,
            description: description,
          },
        ];
      });

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
    <div>
      <AppMenuBar />
      <DiaryHome
        title={title}
        titleHandler={titleHandler}
        description={description}
        descriptionHandler={descriptionHandler}
        submitHandler={submitHandler}
      />
      <DiaryCardContainer tempData={tempData} />
    </div>
  );
}

export default Home;
