import { Button, TextField, Box, FormGroup } from "@mui/material";
import { useState } from "react";

const AddCardForm = () => {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
                "& .MuiTextField-root": {
                    ml: 4,
                    mt: 2,
                    width: "100vw",
                    display: "block",
                },
            }}
        >
            <FormGroup>
                <TextField
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            borderRadius: 10,
                            backgroundColor: "#2E9FDB",
                            width: "80%",
                        },
                    }}
                    placeholder="Title"
                    variant="outlined"
                    value={title}
                    onFocus={() => {
                        console.log("Expand form fields on focus");
                    }}
                    onChange={handleTitleChange}
                />
                <TextField
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            borderRadius: 3,
                            backgroundColor: "#2E9FDB",
                            width: "80%",
                        },
                    }}
                    placeholder="Description"
                    variant="outlined"
                    value={description}
                    onChange={handleDescriptionChange}
                    multiline
                    minRows={4}
                />
            </FormGroup>
            <Button
                sx={{
                    ml: 3,
                    mt: 2,
                    borderRadius: 5,
                    pl: 5,
                    pr: 5,
                    color: "black",
                    backgroundColor: "#2E9FDB",
                }}
                type="Submit"
                variant="outlined"
                onClick={(event) => {
                    event.preventDefault();
                    console.log("Title -", title);
                    console.log("Description -", description);
                }}
            >
                Add New
            </Button>
        </Box>
    );
};

export default AddCardForm;
