import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button, Collapse} from "@mui/material";
import Textarea from "@mui/joy/Textarea";
// Add a second document with a generated ID.
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getMsgSuccess } from "../redux/messageRedux";


export default function Form() {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [fullText, setFullText] = React.useState(false);
  const distpatch = useDispatch();

  interface userState {
    user: { currentUser: any; isFetching: any; error: any };
  }
  interface msgData {
    name: string;
    title: string;
    description: string;
  }
  const user = useSelector((state: userState) => state.user);

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "messages"), {
        name: user.currentUser,
        title: title,
        description: description,
      });
      getMessages();
      setDescription("");
      setTitle("");
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const getMessages = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "messages"));
      var temp: msgData[];
      temp = [];
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().name}`);
        const name = doc.data().name;
        const title = doc.data().title;
        const description = doc.data().description;

        temp.push({ name, title, description });
      });

      distpatch(getMsgSuccess(temp));
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <Collapse in={fullText} collapsedSize={130}>
      <Box sx={{ margin: "20px" }}>
        <Typography
          variant="h3"
          sx={{
            color: "white",
            textAlign: "left",
            textDecorationColor: "white",
            margin: "10px",
          }}
          onClick={() => setFullText(false)}
        >
          HOME
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={10}>
            <Textarea
              minRows={1}
              placeholder="Title…"
              variant="solid"
              sx={{ backgroundColor: "lightblue", borderRadius: "40px" }}
              onClick={() => setFullText(true)}
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button
              sx={{
                width: 150,
                height: 40,
                borderRadius: "30px",
                backgroundColor: "lightblue",
              }}
              variant="contained"
              onClick={handleSubmit}
              // eslint-disable-next-line eqeqeq
              disabled={description == "" || title == "" ? true : false}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
        <Box
          sx={{
            py: 2,
            display: "grid",
            gap: 2,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Textarea
            minRows={4}
            placeholder="Type in here…"
            variant="solid"
            sx={{ backgroundColor: "lightblue" }}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </Box>
      </Box>
    </Collapse>
  );
}
