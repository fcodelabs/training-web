import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Card from "./Card";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getMsgSuccess } from "../redux/messageRedux";

interface msgData {
  name: string;
  title: string;
  description: string;
}
interface msgsData {
  message: { messages: any; isFetching: any; error: any };
}

export default function Masonry(_props: {
  setFullText: (message: boolean) => void;
}) {
  const distpatch = useDispatch();

  const messages1 = useSelector((state: msgsData) => state.message.messages);

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
  React.useEffect(() => {
    getMessages();
  }, []);
  return (
    <Box sx={{ margin: "20px" }}>
      <Grid
        onClick={() => _props.setFullText(false)}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 12, md: 16 }}
      >
        {messages1.map(
          ({ name, title, description }: msgData, index: React.Key) => (
            <Card
              key={index}
              name={name}
              title={title}
              description={description}
            />
          )
        )}
      </Grid>
    </Box>
  );
}

