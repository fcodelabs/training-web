import {ChangeEvent,ChangeEventHandler, FC, FormEvent, useEffect, useState} from "react";
import {Button, FormControl, Grid, TextareaAutosize, TextField, Typography} from '@mui/material';
import './DiaryHome.scss'
import {deepPurple} from "@mui/material/colors";
import {Link} from "react-router-dom";
import DiaryCard from "../../components/DiaryCard/DiaryCard";
import {RootState, store} from "../../store";
import {useDispatch, useSelector} from "react-redux";
import {set} from "../SignInForm/userSlice";
import {add} from "./cardsSlice";
import {db} from '../../utils/firebaseConfig';
import {onSnapshot, query,collection, Firestore, getDocs, doc, setDoc, addDoc, DocumentData, orderBy} from "firebase/firestore";
import {addId} from "./cardIdsSlice";

type DiaryEntry = {
    title: string,
    subtitle: string,
    description: string,
    color: string
}

const DieryHome: FC = () => {

    const [inputCardTitle, setInputCardTitle] = useState<string>('');
    const [inputCardDescription, setInputCardDescription] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    let cards = useSelector((state: RootState) => state.cards.value);

    let cardIds = useSelector((state: RootState) => state.cardIds.value);

    async function getCards(db: Firestore) {
        const q = query(collection(db, "Cards"), orderBy("timestamp", "asc"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let cardList: {
                title: string,
                subtitle: string,
                description: string,
                color: string
            }[] = []
            querySnapshot.forEach((doc) => {
                cardList.push({
                    title: doc.data().title,
                    subtitle: doc.data().subtitle,
                    description: doc.data().description,
                    color: doc.data().color
                })
            });
            dispatch(add(cardList))
        });
    }

    const dispatch = useDispatch()
    const user = useSelector((state: RootState) => state.user.value);


    useEffect(() => {
        document.title = 'Dear Diary - Home Page';
         getCards(db).then(r => {setLoading(false)}).catch((error)=>console.log(error));
    }, []);

    const handleSubmit = async (event: FormEvent<HTMLButtonElement>): Promise<void> => {
        event.preventDefault();
        let invalid: boolean = inputCardTitle.length == 0 || inputCardDescription.length == 0;
        if (inputCardTitle.length == 0) {
            console.log("Missing title");
        }
        if (inputCardDescription.length == 0) {
            console.log("Missing description");
        }
        if (!invalid) {
            console.log(`input-card-title: ${inputCardTitle}`);
            console.log(`Description: ${inputCardDescription}`);
            const docRef = await addDoc(collection(db, "Cards"), {
                    title: inputCardTitle,
                    subtitle: user,
                    description: inputCardDescription,
                    color: "#96dbe0",
                    timestamp: Date.now()
            });
            console.log("Document written with ID: ", docRef.id);
            setInputCardTitle('');
            setInputCardDescription('');
        }
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



    </div>
}

export default DieryHome;