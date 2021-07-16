import { makeStyles } from '@material-ui/core/styles';
import { TextField, InputBase, Button } from '@material-ui/core'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from './actions';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
    root: {
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10
    },

    inputField: {
        marginBottom: 20,
        borderRadius: 20,
    },
    area: {
        marginBottom: 20,
        borderRadius: 20,
    },
    button: {
        borderRadius: "5em",
        marginBottom: 20,
    },
    border: {
        borderRadius: 3,
    }

})


const DiaryHome = () => {
    const classes = useStyles()
    const [tittle, setTittle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
    const userName = useSelector(state => state.notes.name);

    const handleSubmit = (e) => {
        e.preventDefault()

        if (tittle === '') {
            console.log('Missing tittle')
            return
        }
        if (description === '') {
            console.log('Missing description')
            return
        }

        const id = Math.floor(Math.random() * 10000) + 1
        dispatch(addNote({ id, tittle, description, userName }))

        setTittle('')
        setDescription('')
    }

    return (
        <>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                <InputBase
                    onChange={(e) => setTittle(e.target.value)}
                    value={tittle}
                    className={classes.inputField}
                    placeholder=" Submit New"
                    inputProps={{ 'aria-label': 'naked' }}
                    style={{ backgroundColor: "#4da6ff", borderRadius: 10 }}
                    fullWidth
                />
                <TextField
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    className={classes.area}
                    placeholder="  Enter Description"
                    style={{ backgroundColor: "#4da6ff", borderRadius: 16 }}
                    multiline
                    rows={6}
                    fullWidth
                    InputProps={{
                        disableUnderline: true
                    }}
                />
                <Button
                    className={classes.button}
                    fullWidth
                    style={{ backgroundColor: "#4da6ff", color: 'black' }}
                    type="submit">
                    SUBMIT
                </Button>
            </form>
        </>
    );
}

export default DiaryHome
