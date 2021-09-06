import { Container, Grid, makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddForm from '../../components/add-form/add-form';
import DiaryCard from '../../components/diary-card/diary-card';
import * as actions from '../../components/add-form/redux/actions'

const useStyles = makeStyles((theme) => ({
    page: {
        height: '100vh',
        backgroundColor: '#01b1d9'
    },
    main: {
        backgroundColor: '#01b1d9'
    },
    formContent: {
        padding: theme.spacing(4, 0, 0)
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    }
}));

function DiaryHome(props) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.requestCards())
    }, [])

    const classes = useStyles();
    const cards = useSelector((state) => state.card.cards);

    return (
        <div className={classes.page}>
            <main className={classes.main}>
                <div className={classes.formContent}>
                    <AddForm
                        name={props.name}
                        id={cards.length} />
                </div>
                <Container className={classes.cardGrid} maxWidth="xl">
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card.id} xs={12} sm={6} md={4} lg={3} xl={3}>
                                <DiaryCard
                                    title={card.title}
                                    name={props.name}
                                    description={card.description} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </div>
    )
}

export default DiaryHome