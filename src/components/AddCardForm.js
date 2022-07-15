import { Box, Button, TextField } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { addCard } from "../redux/diarySlice";
import { db } from "../services/firebase";

const AddCardForm = (userName) => {
    const backgroundColor = "#B3E9FE";
    const dispatch = useDispatch();
    const [showCollapsed, setShowCollapsed] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    //on form submit
    const handleSubmit = (event) => {
        event.preventDefault();

        if (title === "") {
            console.log("Enter Title");
            return;
        } else if (description === "") {
            console.log("Enter Description");
            return;
        } else {
            //adding card to cardList
            addDiaryEntry(
                title,
                description,
                userName.userName,
                backgroundColor
            );
        }

        setTitle("");
        setDescription("");
    };

    const addDiaryEntry = async (
        name,
        description,
        userName,
        backgroundColor
    ) => {
        try {
            const docRef = await addDoc(collection(db, "diaryEntries"), {
                name: name,
                description: description,
                userName: userName,
                backgroundColor: backgroundColor,
            });
            dispatch(
                addCard({
                    title: title,
                    description: description,
                    userName: userName,
                    backgroundColor: backgroundColor,
                })
            );
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };
    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
                alignItems: "center",
                "& .MuiTextField-root": {
                    mt: "1%",
                    width: "100%",
                    display: "flex",
                },
            }}
        >
            <TextField
                sx={{
                    "& .MuiOutlinedInput-root": {
                        borderRadius: 10,
                        backgroundColor: "#ffffff",
                        fontSize: 16,
                        pl: "2%",
                        mx: "7%",
                        mt: "2%",
                        width: "40%",
                    },
                }}
                placeholder="Enter Title"
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
                                backgroundColor: "#ffffff",
                                fontSize: 16,
                                pl: "2%",
                                mx: "7%",
                            },
                        }}
                        placeholder="Description"
                        variant="outlined"
                        value={description}
                        onChange={handleDescriptionChange}
                        multiline
                        minRows={3}
                    />
                    <Button
                        sx={{
                            borderRadius: 5,
                            mt: 2,
                            mx: "7%",
                            pl: 5,
                            pr: 5,
                            color: "#fff",
                            backgroundColor: "#0A0812",
                            fontWeight: 600,
                        }}
                        type="Submit"
                        variant="outlined"
                        onClick={handleSubmit}
                    >
                        ADD
                    </Button>
                </>
            ) : null}
        </Box>
    );
};

export default AddCardForm;
