import { Button, makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '90%',
        }
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
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    className={classes.title}
                    id="outlined-basic"
                    value={props.input.title}
                    onChange={props.handleChange}
                    name="title"
                    label="Tite"
                    variant="outlined" />
                <TextField
                    className={classes.description}
                    id="outlined-multiline-static"
                    value={props.input.description}
                    onChange={props.handleChange}
                    name="description"
                    label="Description"
                    multiline
                    rows={5}
                    variant="outlined" />
            </form>
            <Button className={classes.button}
                onClick={() => props.handleSubmit()}>
                SUBMIT
            </Button>
        </div>
    )
}

export default AddForm