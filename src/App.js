import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import DiaryCard from '../src/Components/DiaryCard';
import DiaryHome from "./Components/DiaryHome";


function App() {

  //read input data
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");


  //Dispatch
  const dispatch = useDispatch();

  //Subscribe
  const cards = useSelector(state => state.cards);

  function onClick(e) {
    e.preventDefault();

    if (newTitle.trim().length === 0) {
      console.log("Title is missing");
      return
    }
    if (newDescription.trim().length === 0) {
      console.log("Description is missing")
      return
    }
    else {
      dispatch({ type: "addNew", sendTitle: newTitle, sendDescription: newDescription, status: true });
      setNewTitle("");
      setNewDescription("")
    }
  }

  return (
    <div className="App">

      <DiaryHome
        onChangeTitle={(e) => { setNewTitle(e.target.value) }}
        onChangeDescription={(e) => { setNewDescription(e.target.value) }}
        title={newTitle}
        description={newDescription}
        onClick={onClick}
      />
      {
        cards.map((cards, index) => {
          
          return (

            <DiaryCard key={index + 1} title={cards.title} description={cards.description} color={"#bbdefb"} />

          )
        })
      }

    </div>
  );
}


export default App;

