import * as React from "react";
import Button from "@mui/material/Button";
import { TextField, Unstable_Grid2 } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { useNavigate } from "react-router-dom";
import { generateRandomName } from "../../Utility/utilityRandomName";
import { useDispatch } from "react-redux";
import { createUserName } from "../../Containers/SignInFiles/signInSlice";

export default function MyApp() {
  const navigate = useNavigate();
  const dispacth = useDispatch();

  const [randomName, setRandomName] = React.useState("");

  const handleClick = () => {
    navigate("/DiaryHome"); // Navigate to the "/other" route
    dispacth(createUserName(randomName));
  };

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setRandomName(event.target.value);
  };

  return (
    <form>
      <TextField
        id="outlined-basic"
        label="Your Nickname *"
        variant="outlined"
        value={randomName}
        onChange={handleChange}
        sx={{ width: "300px", marginRight: "5px", marginBottom: "10px" }}
      ></TextField>
      <Button
        variant="contained"
        sx={{ borderRadius: "20px" }}
        onClick={() => {
          const randomName = generateRandomName();
          setRandomName(randomName);
        }}
      >
        Random
      </Button>
      <div>
        <Button
          variant="contained"
          disabled={!randomName}
          endIcon={<ArrowForwardRoundedIcon />}
          onClick={handleClick}
        >
          Continue
        </Button>
      </div>
    </form>
  );
}
