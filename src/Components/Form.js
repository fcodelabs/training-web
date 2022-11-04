import React from "react";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

export default function Form() {
  const [extractedInput, setExtractedInput] = React.useState(false);

  const handleExtractInput = (e) => {
    setExtractedInput(true);
  };

  return (
    <Box sx={{ width: "90%", ml: "30px", mt: "30px", mb: "50px" }}>
      <Box component="form" noValidate autoComplete="off" sx={{ mb: "30px" }}>
        <FormControl
          sx={{
            width: extractedInput ? 4 / 5 : 2 / 5,
            borderRadius: "16px",
            backgroundColor: "#87CEEB",
            opacity: 0.8,
            border: "none",
            "& fieldset": { border: "none" },
          }}
        >
          <OutlinedInput
            placeholder="Title"
            sx={{ color: "black" }}
            onClick={handleExtractInput}
          />
        </FormControl>
        <Button
          variant="contained"
          sx={{
            width: "10%",
            ml: "70px",
            mt: "10px",
            borderRadius: "16px",
            backgroundColor: "#0097A7",
            ":hover": { backgroundColor: "#0097A7" },
            display: extractedInput ? "" : "none",
          }}
        >
          Submit
        </Button>
      </Box>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ backgroundColor: "#87CEEB" }}
      >
        <FormControl
          sx={{
            width: 1,
            borderRadius: "16px",
            border: "none",
            opacity: 0.8,
            "& fieldset": { border: "none" },
            display: extractedInput ? "block" : "none",
          }}
        >
          <OutlinedInput placeholder="Description" multiline rows={5} sx={{width: 1}}/>
        </FormControl>
      </Box>
    </Box>
  );
}
