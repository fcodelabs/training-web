import { useSelector } from 'react-redux';
import React, { useState, useEffect} from "react";
import { Button, Container, TextField } from "@mui/material";
import DiaryCard from '../../components/DiaryCard/DiaryCard';
import { useDispatch } from 'react-redux';
import {cardsActions} from '../../redux/store';
import app from "../../config/firebase"
import { getFirestore, collection, query, orderBy, onSnapshot } from 'firebase/firestore';

const db = getFirestore(app);

//add css to textField
const rounded = {
  borderRadius: "20px",
  height: "43px",
  width: "70vw",
  marginRight: "10px",
};

//set interface to accept cardData
interface CardData {
  id:string
  user: string;
  title: string;
  description: string;
}
function DiaryHome() {
  const dispatch = useDispatch();
  
  useEffect(() =>{
    //fetch realtime card data from the db
    onSnapshot(query(collection(db, 'cards'), orderBy("timeFormatted")), (snapShot) =>{
      const cardsDocs = snapShot.docs.map(doc =>{
        const { id,user,title, description } = doc.data();
         return { id, user, title, description };
      })
        dispatch(cardsActions.getCards(cardsDocs))
    })
  },[]);
  
  //get user name
  const user = useSelector((state: {user:string} ) => state.user);
  const fetchCards = useSelector((state: {cards:CardData[]} ) => state.cards);
  console.log(user);

  //set variables to textfields and card values states
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  //onclick listenere to get textfields value when click on submit button
  function formSubmitHandler() {
    if(title === ""){//show an alert if the title is empty
      alert("Your title field is empty. Please  fill and try again")
    }else if(message === ""){//show an alert if the description is empty
      alert("Your message field is empty. Please  fill and try again")
    }
    else{
      //create an id to card
      const randomIndex = Math.floor(Math.random() * 1000000);
      const userId = randomIndex + user;
      dispatch(cardsActions.saveCard(
        {
          id :userId,
          user: user,
          title: title,
          description: message
        }
      ));
      setTitle("");
      setMessage("");
    }
  }

  //update input value with userState
  function onchangeTitle(event: { target: { value: any } }) {
    setTitle(event.target.value);
  }

  //update input value with userState
  function onchangeMessage(event: { target: { value: any } }) {
    setMessage(event.target.value);
  }
  
  return (
    <React.Fragment>
      <Container
      maxWidth="xl"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection:"column",
        alignItems: "center",
        justifyContent: "start",
      }}>
      <Container sx={{padding:"40px 0"}}>
        <TextField
          value={title}
          onChange={onchangeTitle}
          placeholder="Enter Title"
          InputProps={{ style: rounded }}
        ></TextField>
        <Button
          onClick={formSubmitHandler}
          sx={{ width: "10vw" }}
          size="large"
          variant="contained"
        >
          {" "}
          Submit{" "}
        </Button>
        <TextField
          value={message}
          onChange={onchangeMessage}
          InputProps={{ sx: { borderRadius: "20px" } }}
          fullWidth
          multiline
          margin="normal"
          rows={4}
          placeholder="Enter Description"
          variant="outlined"
        ></TextField>
      </Container>
      <Container maxWidth="xl" sx={{display:"grid", justifyItems:"center",gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gridGap: "10px"}}>
      {fetchCards.map(card => (
        <DiaryCard key={card.id} title={card.title} subTitle={card.user} description={card.description}
        />
      ))}
      </Container>
      </Container>
    </React.Fragment>
  );
}
export default DiaryHome;
