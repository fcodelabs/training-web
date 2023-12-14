import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";

interface CardAddingFormProps {
  onClose: () => void;
}

const CardAddingForm: React.FC<CardAddingFormProps> = ({ onClose }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (title && description) {
      console.log(title);
      console.log(description);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <Container>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h5" sx={{ marginY: "30px" }}>
          Submit New
        </Typography>
        <IconButton
          aria-label="close"
          size="small"
          onClick={onClose}
          sx={{
            backgroundColor: "rgba(75,70,92,0.16)",
            color: "#4B465C",
            borderRadius: "6px",
            width: "31px",
            height: "31px",
            marginY: "30px",
          }}
        >
          <CloseIcon />
        </IconButton>
      </Stack>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          value={title}
          onChange={handleTitleChange}
          label="Title"
          variant="outlined"
          fullWidth
          required
          sx={{ marginTop: "20px", marginBottom: "20px" }}
        ></TextField>
        <TextField
          value={description}
          onChange={handleDescriptionChange}
          label="Description"
          variant="outlined"
          fullWidth
          required
          multiline
          rows={10}
          sx={{ marginTop: "20px", marginBottom: "20px" }}
        ></TextField>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            type="submit"
            disableElevation
            sx={{ backgroundColor: "#0092DD" }}
          >
            Submit
          </Button>
          <Button
            variant="contained"
            type="button"
            disabled={title === "" || description === "" ? true : false}
            disableElevation
            sx={{ backgroundColor: "#0092DD" }}
          >
            Cancle
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default CardAddingForm;
