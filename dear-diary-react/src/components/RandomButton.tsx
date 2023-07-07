import * as React from "react";
import Button from "@mui/material/Button";
import { TextField, Unstable_Grid2 } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { useNavigate } from "react-router-dom";

export default function MyApp() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Cards"); // Navigate to the "/other" route
  };

  const [rname, setrname] = React.useState("");

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setrname(event.target.value);
  };

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Your Nickname *"
        variant="outlined"
        value={rname}
        onChange={handleChange}
        sx={{ width: "300px", marginRight: "5px", marginBottom: "10px" }}
      ></TextField>
      <Button
        variant="contained"
        sx={{ borderRadius: "20px" }}
        onClick={() => {
          const randomName = generateRandomName();
          setrname(randomName);
        }}
      >
        Random
      </Button>
      <div>
        <Button
          variant="contained"
          disabled={!rname}
          endIcon={<ArrowForwardRoundedIcon />}
          onClick={handleClick}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}

const names = [
  "Liam",
  "Olivia",
  "Noah",
  "Emma",
  "Oliver",
  "Charlotte",
  "James",
  "Amelia",
  "Elijah",
  "Sophia",
  "William",
  "Isabella",
  "Henry",
  "Ava",
  "Lucas",
  "Mia",
  "Benjamin",
  "Evelyn",
  "Theodore",
  "Luna",
];

export const generateRandomName = function () {
  const i = getRandomInt(19);
  return names[i];
};

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
