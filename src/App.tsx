import { Box } from "@mui/material";
import imageURL from "./assets/img/bg.jpg";

function App() {
  return (
    <Box
    sx={{
      width: "100vw",
      height: "100vh",
      backgroundImage: `url(${imageURL})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    
  </Box>
  );
}

export default App;
