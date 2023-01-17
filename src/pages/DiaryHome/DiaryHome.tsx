import {ChangeEvent,FC, FormEvent, useEffect, useState} from "react";
import {Button, Grid, TextField, Typography} from '@mui/material';
import './DiaryHome.scss'
import {useNavigate} from "react-router-dom";
import DiaryCard from "../../components/DiaryCard/DiaryCard";
import {RootState} from "../../store";
import {useDispatch, useSelector} from "react-redux";
import {fetchCardList} from "./cardsSlice";
import {addCard} from "./addCardSlice";
import PrimarySearchAppBar from "../../components/NavBar/NavBar";

const DieryHome: FC = () => {

    const [inputCardTitle, setInputCardTitle] = useState<string>('');
    const [inputCardDescription, setInputCardDescription] = useState<string>('');
    const [showDescription, setShowDescription] = useState(false);
    const [mouseDown, setMouseDown] = useState(false);

    let cards = useSelector((state: RootState) => state.cards.value);

    const navigate = useNavigate()

    const dispatch = useDispatch()
    const user = useSelector((state: RootState) => state.user.value);


    useEffect(() => {
        if(user.length === 0){
            alert('Not logged in')
            navigate('/')
        }
        document.title = 'Dear Diary - Home Page';
        dispatch(fetchCardList())
    }, []);

    const handleSubmit = async (event: FormEvent<HTMLButtonElement>): Promise<void> => {
        event.preventDefault();
        let invalid: boolean = inputCardTitle.length === 0 || inputCardDescription.length === 0;
        if (inputCardTitle.length === 0) {
            alert("Missing title");
        }
        if (inputCardDescription.length === 0) {
            alert("Missing description");
        }
        if (!invalid) {
            console.log(`input-card-title: ${inputCardTitle}`);
            console.log(`Description: ${inputCardDescription}`);
            dispatch(addCard({
                title: inputCardTitle,
                subtitle: user,
                description: inputCardDescription,
                color: "#96dbe0"
            }))
            setInputCardTitle('');
            setInputCardDescription('');
        }
    };

    return <div className={"diary-home"}>

        {user.length !==0 && <div>
            <PrimarySearchAppBar />
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
                            onFocus={() => setShowDescription(true)}
                            onBlur={() => !mouseDown && setShowDescription(false)}
                            onMouseDown={() => setMouseDown(true)}
                            onMouseUp={() => setMouseDown(false)}
                            InputProps={{
                                style: {
                                    borderRadius: '50px',
                                    backgroundColor: "#4284f5",
                                    borderColor: "red"
                                },
                            }}
                        />
                    </Grid>
                    {showDescription && <Grid item xs={12} lg={12}>
                        <TextField
                            fullWidth={true}
                            variant={"outlined"}
                            className="input-card-description"
                            placeholder="Enter Description"
                            multiline
                            rows={5}
                            value={inputCardDescription}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setInputCardDescription(event.target.value)}
                            onMouseDown={() => setMouseDown(true)}
                            onMouseUp={() => setMouseDown(false)}
                            InputProps={{
                                style: {
                                    borderRadius: '10px',
                                    backgroundColor: "#42adf5"

                                },
                            }}
                        />
                    </Grid>}
                </Grid>
                <Grid item xl={2} md={2} lg={2} sm={2} xs={12}>
                    <Button type="submit" onClick={handleSubmit} className="add-card-submit-button" >
                        SUBMIT
                    </Button>
                </Grid>
            </Grid>

            <Grid container className={"diary-card-view"} columnSpacing={2} rowSpacing={2}>
                {

                    cards.map((value, key)=>(
                        <Grid item  xl={3} md={4} lg={3} sm={6} xs={12} key={key}>
                            <DiaryCard
                                title={value.title}
                                description={value.description}
                                color={value.color}
                                subtitle={value.subtitle}
                            />
                        </Grid>
                    ))
                }


            </Grid>
        </div>}
    </div>
}

export default DieryHome;