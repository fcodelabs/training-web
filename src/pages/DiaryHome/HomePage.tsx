import { Box } from "@mui/system";
import NavBar from "../../components/NavBar/NavBar";
import Masonry from "../../components/DiaryMasonry/Masonry";
import Form from "../../components/DiaryForm/Form";
import React from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

export default function HomePage() {
 const [fullText, setFullText] = React.useState(false);
const handle = useFullScreenHandle();
  return (
 <FullScreen handle={handle}>
    <Box sx={{backgroudcolour:"blue"}}>
      <NavBar handle={handle}/>
      <Box sx={{ height: "60px" }}></Box>
      <Form fullText={fullText} setFullText={setFullText}/>
      <Masonry setFullText={setFullText}/>
    </Box>
</FullScreen>
  );
}
