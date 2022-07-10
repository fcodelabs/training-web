import { Button, TextField, Box } from "@mui/material";
import { useState } from "react";

const AddCardForm = () => {
    const [showCollapsed, setShowCollapsed] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (title === "") {
            console.log("Enter Title");
            return;
        }
        if (description === "") {
            console.log("Enter Description");
            return;
        }

        setTitle("");
        setDescription("");
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
            <TextField
                sx={{
                    "& .MuiOutlinedInput-root": {
                        borderRadius: 10,
                        backgroundColor: "#2E9FDB",
                        minWidth: "40%",
                    },
                }}
                placeholder="Title"
                variant="outlined"
                value={title}
                onClick={() => setShowCollapsed(true)}
                onChange={handleTitleChange}
            />
            {showCollapsed ? (
                <>
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
                        onClick={handleSubmit}
                    >
                        Add New
                    </Button>
                </>
            ) : null}
        </Box>
    );
};

export default AddCardForm;
