import React, { useState } from "react";
import DiaryCard from "./Components/DiaryCard";
import DiaryHome from "./Components/DiaryHome";

function App() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  //State for show new card
  const [card, setCard] = useState(false);

  //Object Array to map cards
  const [cards, setCards] = useState([])

  function onClick(e) {
    e.preventDefault();

    if (title.trim().length === 0) {
      console.log("Title is missing");
      return
    }
    if (description.trim().length === 0) {
      console.log("Description is missing")
      return
    }

    else {
      let newCardData = { "title": title, "description": description }
      setCards([...cards, newCardData]);
      setCard(true);
      setTitle("");
      setDescription("")
    }
  }

  return (
    <div className="App">

      <DiaryHome
        onClick={onClick}
        onChangeTitle={(e) => { setTitle(e.target.value) }}
        onChangeDescription={(e) => { setDescription(e.target.value) }}
        title={title}
        description={description} />

      {card ?
        cards.map((cards, index) => {
          return (
            <div key={index}>
              <DiaryCard title={cards.title} description={cards.description} subtitle="Akash" color="#e3f2fd" />
            </div>
          )
        })

        :
        <div><h5>Nothing to Show</h5></div>}
    </div>
  );
}

export default App;

