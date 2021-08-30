import { Button, makeStyles, TextField } from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewCard } from "../../utils/state/action-creators/cardAction";

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

    const dispatch = useDispatch();

    const [input, setInput] = useState({
        id: 0,
        title: '',
        name: props.name,
        description: ''
    });

    const handleChange = (event) => {
        setInput(({
            ...input, id: props.id, [event.target.name]: event.target.value
        }));
    };

    const handleSubmit = () => {

        if (input.title && input.description) {
            dispatch(addNewCard(input))

            setInput({
                title: '',
                description: ''
            });
        } else {
            if (!input.title) {
                console.log("Missing title")
            }
            if (!input.description) {
                console.log("Missing description")
            }
        }
    };

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    className={classes.title}
                    id="outlined-basic"
                    value={input.title}
                    onChange={handleChange}
                    name="title"
                    label="Tite"
                    variant="outlined" />
                <TextField
                    className={classes.description}
                    id="outlined-multiline-static"
                    value={input.description}
                    onChange={handleChange}
                    name="description"
                    label="Description"
                    multiline
                    rows={5}
                    variant="outlined" />
            </form>
            <Button className={classes.button}
                onClick={handleSubmit}>
                SUBMIT
            </Button>
        </div>
    )
}

export default AddForm