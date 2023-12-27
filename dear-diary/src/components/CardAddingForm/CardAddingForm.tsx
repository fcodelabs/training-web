import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { collectionRef } from "../../configs/firebase";
import { addDoc } from "firebase/firestore";
import { useDispatch} from "react-redux";
import {

  setSubmitTrue,
} from "../../redux/slices/cardSubmitSlice";


const cardAddingFromStyles = {
  iconButtonStyles: {
    backgroundColor: "rgba(75,70,92,0.16)",
    color: "#4B465C",
    borderRadius: "6px",
    width: "31px",
    height: "31px",
    marginY: "30px",
  },
  typographyStyles: { fontFamily: "public sans", marginY: "30px" },
  textFieldStyles: {
    fontFamily: "public sans",
    marginTop: "20px",
    marginBottom: "20px",
  },
  buttonStyles: {
    fontFamily: "public sans",
    backgroundColor: "#0092DD",
    textTransform: "none",
  },
};

interface CardAddingFormProps {
  onClose: () => void;
  username: string;
}

const CardAddingForm: React.FC<CardAddingFormProps> = ({
  onClose,
  username,
}) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [titleError, setTitleError] = useState<boolean>(false);
  const [descriptionError, setDescriptionError] = useState<boolean>(false);

  const dispatch = useDispatch();

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
    setTitleError(false);
    setDescriptionError(false);

    if (title === "") {
      setTitleError(true);
    }
    if (description === "") {
      setDescriptionError(true);
    }
    if (title && description) {
      try {
        addDoc(collectionRef, { username, title, description });
      } catch (error) {
        console.error(error);
      }
      setTitle("");
      setDescription("");
      dispatch(setSubmitTrue());
      onClose();
    }
  };

  const handleCancle = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setTitle("");
    setDescription("");
    onClose();
  };

  return (
    <Container sx={{ zIndex: "2" }}>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h5" sx={cardAddingFromStyles.typographyStyles}>
          Submit New
        </Typography>
        <IconButton
          aria-label="close"
          size="small"
          onClick={onClose}
          sx={cardAddingFromStyles.iconButtonStyles}
        >
          <CloseIcon />
        </IconButton>
      </Stack>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Typography fontFamily="public sans">Title</Typography>
        <TextField
          value={title}
          onChange={handleTitleChange}
          label="Title"
          variant="outlined"
          fullWidth
          required
          error={titleError}
          helperText={titleError ? "Title is Required" : ""}
          sx={cardAddingFromStyles.textFieldStyles}
        ></TextField>
        <Typography fontFamily="public sans">Description</Typography>
        <TextField
          value={description}
          onChange={handleDescriptionChange}
          label="Description"
          variant="outlined"
          fullWidth
          required
          error={descriptionError}
          helperText={descriptionError ? "Description is required" : ""}
          multiline
          rows={10}
          sx={cardAddingFromStyles.textFieldStyles}
        ></TextField>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            type="submit"
            disableElevation
            sx={cardAddingFromStyles.buttonStyles}
          >
            Submit
          </Button>
          <Button
            onClick={handleCancle}
            variant="contained"
            type="button"
            disabled={title === "" || description === "" ? true : false}
            disableElevation
            sx={cardAddingFromStyles.buttonStyles}
          >
            Cancle
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default CardAddingForm;
