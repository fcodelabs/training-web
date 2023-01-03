import {ChangeEvent,ChangeEventHandler, FC, FormEvent, useEffect, useState} from "react";
import {Button, FormControl, Grid, TextareaAutosize, TextField, Typography} from '@mui/material';
import './DiaryHome.scss'
import {deepPurple} from "@mui/material/colors";

const DieryHome: FC  = () => {

    useEffect(() => {
        document.title = 'Dear Diary - Home Page';
    }, []);

    const [inputCardTitle, setInputCardTitle] = useState<string>('');
    const [inputCardDescription, setInputCardDescription] = useState<string>('');

    const handleSubmit = (event: FormEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        console.log(`input-card-title: ${inputCardTitle}`);
        console.log(`Description: ${inputCardDescription}`);
        setInputCardTitle('');
        setInputCardDescription('');
    };

    return <div className={"diary-home"}>

        <Grid container className={"diary-title"} >
            <Grid item xl={10} lg={12} sm={12} xs={12}>
                <Typography className={"diary-title-text"}>Home</Typography>
            </Grid>
            <Grid item xl={1} lg={12} sm={12} xs={12}>
                <Typography className={"you-are-here"}>You are here. Home</Typography>
            </Grid>
        </Grid>

            <Grid container className={"add-card-form"} columnSpacing={4}>
                <Grid item xl={10} md={10} lg={10} sm={10} xs={12}>
                    <Grid item xs={12} lg={12}>
                        <TextField
                            variant={"outlined"}
                            fullWidth={true}
                            className="input-card-title"
                            placeholder="Submit New"
                            value={inputCardTitle}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setInputCardTitle(event.target.value)}
                            InputProps={{
                                style: {
                                    borderRadius: '50px',
                                    backgroundColor: "#4284f5",
                                    borderColor: "red"
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} lg={12}>
                        <TextField
                            fullWidth={true}
                            variant={"outlined"}
                            className="input-card-description"
                            placeholder="Enter Description"
                            multiline
                            rows={5}
                            value={inputCardDescription}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setInputCardDescription(event.target.value)}
                            InputProps={{
                                style: {
                                    borderRadius: '10px',
                                    backgroundColor: "#42adf5"

                                },
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid item xl={2} md={2} lg={2} sm={2} xs={12}>
                    <Button type="submit" onClick={handleSubmit} className="add-card-submit-button" >
                    SUBMIT
                    </Button>
                </Grid>
            </Grid>




    </div>
}

export default DieryHome;