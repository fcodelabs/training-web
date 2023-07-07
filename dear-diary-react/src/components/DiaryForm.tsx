import {
  Box,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import { useState } from "react";

function DiaryForm() {
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  const handleChange = (event: { target: { value: any } }) => {
    setInputValue(event.target.value);
  };
  const handleChange2 = (event: { target: { value: any } }) => {
    setInputValue2(event.target.value);
  };
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // Do something with the input value
    console.log(inputValue);
    console.log(inputValue2);
    setInputValue("");
    setInputValue2("");
  };

  return (
    <Box
      sx={{
        border: 1,
        borderColor: "#3493eb",
        background: "linear-gradient(to right bottom, #3493eb, #34d0eb)",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex" }}>
          <TextField
            label="Submit New"
            value={inputValue}
            onChange={handleChange}
            sx={{
              flex: "1",
              marginRight: "10px",
              marginLeft: "20px",
              marginTop: "5px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
              },
              "& .MuiInputLabel-root": {
                borderRadius: "30px",
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              borderRadius: "30px",
              marginTop: "5px",
            }}
          >
            Submit
          </Button>
        </div>
        <TextField
          onChange={handleChange2}
          value={inputValue2}
          label="Enter Description"
          multiline
          rows={4}
          sx={{ width: "100%", marginTop: "10px" }}
        />
      </form>
    </Box>
  );
}

export default DiaryForm;
