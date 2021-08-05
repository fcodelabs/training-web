import React from "react";
import "./CardForm.css";
import DiaryCard from "./Diarycard";

export function CardForm() {
  // const id = card && card.id ? card.id : undefined

  const [cards, setCards] = React.useState([]);
  const [title, setTitle] = React.useState("");
  const [definition, setDefinition] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert("Title: " +title + " Description: " +definition)
    console.log(cards);
    title || definition == " "
      ? console.log("Missing title or Missing description")
      : console.log("");
    setCards([...cards, { title: title, definition: definition }]);
    clearForm();
    // console.log(term)
    // console.log(definition)
  };

  function clearForm() {
    setTitle("");
    setDefinition("");
  }
  return (
    <div>
      <div className="formcard-container">
        <form onSubmit={handleSubmit}>
          <div>
            <textarea
              id="card_term"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Submit New"
            />
          </div>
          <div>
            <textarea
              id="card_definition"
              value={definition}
              onChange={(event) => setDefinition(event.target.value)}
              placeholder="Enter Description"
              rows={5}
            />
          </div>
          <div className="buttons">
            <button
              className="primary"
              type="submit"
              // onClick={() => handleSubmit()}
            >
              Submit
            </button>
          </div>
        </form>
        {[...cards].map((card) => (
          <DiaryCard
            title={card.title}
            subTitle="card Subtitle"
            body={card.definition}
            color="royalblue"
          />
        ))}
      </div>
      <div></div>
    </div>
  );
}
