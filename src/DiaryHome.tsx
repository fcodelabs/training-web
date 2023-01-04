import {ChangeEvent,ChangeEventHandler, FC, FormEvent, useEffect, useState} from "react";
import {Button, FormControl, Grid, TextareaAutosize, TextField, Typography} from '@mui/material';
import './DiaryHome.scss'
import {deepPurple} from "@mui/material/colors";
import {Link} from "react-router-dom";
import DiaryCard from "./DiaryCard";

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

        <Link to="/" className={"link-back"} >Back</Link>

        <Grid container className={"input-diary-title"} >
            <Grid item xl={10} lg={12} sm={12} xs={12}>
                <Typography className={"input-diary-title-text"}>Home</Typography>
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

        <Grid container className={"diary-card-view"} columnSpacing={2} rowSpacing={2}>
            <Grid item  xl={3} md={4} lg={3} sm={6} xs={12} key={0}>
                <DiaryCard
                    title={`Title 0`}
                    description={"Description"}
                    color={"#96dbe0"}
                    subtitle={`SubTitle 0`}
                />
            </Grid>
            {
                [1,2,3,4,5,6,7,8,9,10].map(i=>(
                    <Grid item  xl={3} md={4} lg={3} sm={6} xs={12} key={i}>
                        <DiaryCard
                            title={`Title ${i}`}
                            description={"Description ".repeat(150)}
                            color={"#96dbe0"}
                            subtitle={`SubTitle ${i}`}
                        />
                    </Grid>
                ))
            }


        </Grid>



    </div>
}

export default DieryHome;