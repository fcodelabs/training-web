import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import { Button, TextField, Grid } from "@mui/material";
import { addDoc } from "firebase/firestore";
import { diaryCollectionRef } from "../lib/firestore-collections";
import { useSelector } from "react-redux/es/hooks/useSelector";

function AddCard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [expand, setExpand] = useState(false);
  const user = useSelector((state: any) => state.user);
  const name = user.username;

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (e.target.id === "outlined-basic") return;
      setExpand(false);
    };
    document.addEventListener("click", handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) return;
    addDoc(diaryCollectionRef, {
      name,
      title,
      description,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleExpand = (e: React.MouseEvent) => {
    setExpand(true);
  };

  return (
    <Container>
      <form>
        <Grid container spacing={2}>
          <Grid item md={10} lg={10} xs={12}>
            <TextField
              type="text"
              id="outlined-basic"
              onChange={(e) => setTitle(e.target.value)}
              onClick={(e) => handleExpand(e)}
              name="title"
              placeholder="Submit New"
              variant="outlined"
              fullWidth
              sx={{
                m: 1,
                ml: 3,
              }}
              size="small"
            />
          </Grid>

          <Grid item md={2} lg={2} xs={12}>
            {expand && (
              <Button
                variant="contained"
                sx={{ m: 1, ml: 3 }}
                onClick={(e) => handleSubmit(e)}
              >
                Submit
              </Button>
            )}
          </Grid>
          {expand && (
            <TextField
              type="text"
              id="outlined-basic"
              name="discription"
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              sx={{ borderRadius: 10, m: 1, ml: 5, mr: 15 }}
            />
          )}
        </Grid>
      </form>
    </Container>
  );
}

export default AddCard;
