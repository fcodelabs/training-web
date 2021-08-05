import React from "react";
import "./CardForm.css";
import DiaryCard from "./Diarycard";

export function CardForm() {
  // const id = card && card.id ? card.id : undefined

  // const [cards, setCards] = React.useState([]);
  const [title, setTitle] = React.useState("");
  const [definition, setDefinition] = React.useState("");

  const handleSubmit = (event) => {
    // event.preventDefault()
    // alert("Title: " +title + " Description: " +definition)
    // console.log(cards);
    // setCards([...cards, { title: title, definition: definition }]);
    clearForm()
    console.log(title)
    console.log(definition)
  };

  function clearForm() {
    setTitle("");
    setDefinition("");
  }
  return (
    <div>
      <div className="formcard-container">
        {/* <h4>{id ? 'Update Card' : 'Add Card'}</h4> */}
        <form onSubmit={handleSubmit} >
          <div>
            {/* <label htmlFor="card_term">term</label> */}
            <textarea
              id="card_term"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Submit New"
            />
          </div>
          <div>
            {/* <label htmlFor="card_definition">definition</label> */}
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
        {/* {[...cards].map((card) => (
          <DiaryCard
            title={card.title}
            subTitle="card Subtitle"
            body="A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovelyIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a doc"
            color="royalblue"
          />
        ))} */}
      </div>
      <div></div>
    </div>
  );
}
