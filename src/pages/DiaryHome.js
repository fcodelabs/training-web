import { Box, Button, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import DiaryCard from "../components/DiaryCard";

const DiaryHome = () => {
    //logged user name
    const userName = "Owin";

    const [showCollapsed, setShowCollapsed] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [cardList, setCardList] = useState([
        <DiaryCard
            title="Test Title"
            subTitle="Name"
            description="This is a text description for the card. It is hard coded. It is supposed to display only 100 characters. If number of characters is more than that the excess characters should be hidden till you click the show more button."
            backgroundColor="#B3E9FE"
        />,
    ]);

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
            const card = (
                <DiaryCard
                    title={title}
                    description={description}
                    subTitle={userName}
                    backgroundColor="#B3E9FE"
                />
            );
            //adding card to cardList
            setCardList(() => cardList.concat(card));
        }

        setTitle("");
        setDescription("");
    };
    return (
        <div className="DiaryHome">
            {/* Start add new card form*/}
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
            <Grid container>
                {cardList.map((card, index) => {
                    return (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                            {card}
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
};

export default DiaryHome;
