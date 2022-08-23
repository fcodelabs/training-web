import React, { useState } from "react";
import Cart from "../../components/Cart/DiaryCard";
import Box from "@mui/material/Box";
import "./DiaryHome.css";
import { Button } from "@mui/material";
import Navbar from "../../components/Layout/Navbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import { getDetails } from "../../actions/User";//for redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

export default function Todo() {
  const [details, setDetails] = useState({
    title: "",
    description: "",
  });

  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
    if (details.title == "") {
      console.log("Missing title");
    }
    if (details.description == "") {
      console.log("Missing description");
    }

    if (details.title != "" && details.description != "") {
      todos.push(details);
      setDetails({
        title: "",
        description: "",
      });
    }
  };

  const todolistcomponet = () => {
    return todos.map((todo) => (
      <Cart title={todo.title} description={todo.description} />
    ));
  };

  return (
    <Container>
      <Navbar />
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
                onChange={handleChange}
                label="Title"
                name="title"
                placeholder="Title"
              />
            </div>

            <div>
              <input
                type="text"
                id="ip2"
                onChange={handleChange}
                label="Description"
                name="description"
                placeholder="Description"
              />
            </div>

            <Button sx={{ m: 1 }} type="submit">
              Submit
            </Button>
            <Button > Test_Redux</Button>
          </form>
        </Box>
      </div>

      <div style={{display:'flex',flexWrap:'wrap'}} >
        <Grid container spacing={2}>
        {todolistcomponet()}

        </Grid>
      

      </div>
      
          
       
    </Container>
  );
}


function matchDispatchToProps(dispatch){
  return bindActionCreators({getDetails:getDetails},dispatch)

}


//export defult connect()