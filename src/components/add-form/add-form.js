import { Button, makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '90%',
        }
    },
    card: {
        backgroundColor: "#b3e9fe"
    },
    title: {
        backgroundColor: '#2e94de'
    },
    description: {
        backgroundColor: '#149fdd'
    },
    button: {
        backgroundColor: '#0074eb',
        width: '90%'
    }
}));

function AddForm(props) {

    const classes = useStyles();

    return (
        <div className={classes.card}>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    className={classes.title}
                    id="outlined-basic"
                    value={props.input.title}
                    onChange={props.handleChange}
                    name="title"
                    label="Outlined"
                    variant="outlined" />
                <TextField
                    className={classes.description}
                    id="outlined-multiline-static"
                    value={props.input.description}
                    onChange={props.handleChange}
                    name="description"
                    label="Multiline"
                    multiline
                    rows={5}
                    variant="outlined" />
            </form>
            <Button className={classes.button}
                onClick={() => props.handleSubmit()}
                >
                SUBMIT
            </Button>
        </div>
    )
}

export default AddForm