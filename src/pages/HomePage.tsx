import { Box } from "@mui/system";
import NavBar from "../components/NavBar";
import Masonry from "../components/Masonry";
import Form from "../components/Form";

export default function HomePage() {

  return (
    <Box>
      <NavBar />
      <Box sx={{ height: "60px" }}></Box>
      <Form />
      <Masonry />
    </Box>
  );
}
