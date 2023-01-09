import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Card from "../DiaryCard/Card";

import { useDispatch, useSelector } from "react-redux/es/exports";
import { getMsgStart } from "../../pages/DiaryHome/DiaryHomeSlice";

interface msgData {
  Id: string;
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
  React.useEffect(() => {
    distpatch(getMsgStart());
  }, [distpatch]);

  return (
    <Box sx={{ margin: "20px" }}>
      <Grid
        onClick={() => _props.setFullText(false)}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 12, md: 16 }}
      >
        {messages1.map(({ Id, name, title, description }: msgData) => (
          <Card key={Id} name={name} title={title} description={description} />
        ))}
      </Grid>
    </Box>
  );
}
