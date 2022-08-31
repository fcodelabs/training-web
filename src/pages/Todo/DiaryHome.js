import React, { useState, useEffect } from "react";
import { addDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";
import Cart from "../../components/Cart/DiaryCard";
import Box from "@mui/material/Box";
import "./DiaryHome.css";
import { Button } from "@mui/material";
import Navbar from "../../components/Layout/Navbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
//import asyncAction from "../../features/todo/action";
import { useSelector, useDispatch } from "react-redux";
import todoSlice from "./todoSlice";
import { detailList } from "./todoSlice";
import allTodos from "../../utils/firebaseConfig";
import { useLocation } from "react-router-dom";

function Todo() {
  /*Redux Task*/
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target.title.value == "") {
      console.log("Missing title");
    }
    if (e.target.description.value == "") {
      console.log("Missing description");
    }

    if (e.target.title.value && e.target.description.value) {
      dispatch(
        todoSlice.actions.postAdded({
          title: e.target.title.value,
          description: e.target.description.value,
          name: location.state.inputname,
        })
      );

      console.log("Title", title);
    }
    setTitle("");
    setDescription("");
  };

  const dispatch = useDispatch();
  useEffect(() => {
    let todoArray = [];
    onSnapshot(allTodos, (snapshot) => {
      todoArray = [];
      snapshot.docs.forEach((element) => {
        todoArray.push(element.data());
        console.log("Array :", todoArray);
      });
      dispatch(todoSlice.actions.saveTodo(todoArray));
    });
  }, []);

  const todos = useSelector((state) => state.todo.todoList);
  return (
    <div>
      <Navbar />
      <Container>
        {/* Use redux */}

        <div className=" Details-header">
          <Box
            sx={{
              width: 500,
              height: 200,
              backgroundColor: "white",
              opacity: 0.7,
              borderRadius: "20px",
              boxShadow: 10,
              padding: "20px",
            }}
          >
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  id="ip2"
                  //onChange={handleChange}
                  label="Title"
                  name="title"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div>
                <input
                  type="text"
                  id="ip2"
                  // onChange={handleChange}
                  label="Description"
                  name="description"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <Button sx={{ m: 1 }} type="submit">
                Submit
              </Button>
            </form>
          </Box>
        </div>

        <Grid
          //item
          sx={{ m: 2 }}
          //className={classes.root}
          container
          justifyContent="center"
        >
          {/* container */}
          {todos.map((n) => (
            <Cart title={n.title} description={n.description} name={n.name} />
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Todo;
