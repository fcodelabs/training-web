import React, { useState } from "react";
import Cart from "../../components/Cart/DiaryCard";
import Box from "@mui/material/Box";
import "./DiaryHome.css";
import { Button } from "@mui/material";
import Navbar from "../../components/Layout/Navbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";

import { useSelector, useDispatch } from "react-redux";
import { detailList } from "../../features/todo/todoSlice";

function Todo(props) {
  /*Redux Task*/

  const Title = useSelector((state) => state.todo.title);
  const Description = useSelector((state) => state.todo.desc);

  //console.log("Redux",Title,Description)
  
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");

  //console.log("Value",title,description)

  const values = {
    t: title,
    d: description,
  };

  /* Hooks task*/

  // const [details, setDetails] = useState({
  //   title: "",
  //   description: "",
  // });

  // const [todos, setTodos] = useState([]);

  // const handleChange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;

  //   setDetails((prev) => {
  //     return { ...prev, [name]: value };
  //   });
  // };


  // Use Redux

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(details);
    if (Title == "") {
      console.log("Missing title");
    }
    if (Description == "") {
      console.log("Missing description");
    }

    // if (details.title != "" && details.description != "") {
    //   todos.push(details);
    //   setDetails({
    //     title: "",
    //     description: "",
    //   });
    // }
  };

  // const todolistcomponet = () => {
  //   return todos.map((todo) => (
  //     <Cart title={todo.title} description={todo.description} />
  //   ));
  // };

  // const cartlistcomponet = () => {
  //   return title.map((n) => (
  //     // <Cart title={todo.title} description={todo.description} />
  //     <Cart title={Title[n]} description={Description[n]} />

  //   ));
  // };

  return (
    <Container>
      <Navbar />

      {/* Use redux */}

      <div className="Details  Details-header">
        <Box
          sx={{
            width: 500,
            height: 200,
            backgroundColor: "white",
            opacity: 0.7,
            borderRadius: "20px",
            boxShadow: 10,
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
                onChange={(e) => setdescription(e.target.value)}
              />
            </div>

            {/* <Button sx={{ m: 1 }} type="submit">
              Submit
            </Button> */}
            <Button
              sx={{ m: 1 }}
              type="submit"
              onClick={() => {
                dispatch(detailList(values));
                //console.log("DESC", values)
              }}
            >
              Submit
            </Button>
          </form>
        </Box>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Grid container spacing={2}>
          {/* {todolistcomponet()} */}
         
          
          {Title.map((n, i) => (
            <Cart title={n} description={Description[i]} />
          ))}
          
        </Grid>
      </div>
    </Container>
  );
}

export default Todo;
