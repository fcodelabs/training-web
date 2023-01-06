import { Box } from "@mui/system";
import NavBar from "../../components/NavBar/NavBar";
import Masonry from "../../components/DiaryMasonry/Masonry";
import Form from "../../components/DiaryForm/Form";
import React from "react";


export default function HomePage() {
 const [fullText, setFullText] = React.useState(false);
  return (
    <Box >
      <NavBar />
      <Box sx={{ height: "60px" }}></Box>
      <Form fullText={fullText} setFullText={setFullText}/>
      <Masonry setFullText={setFullText}/>
    </Box>
  );
}
