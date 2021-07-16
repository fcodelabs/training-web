import { makeStyles } from '@material-ui/core/styles';

export const useStyle = makeStyles((themes) => ({

    form: {
        textAlign: "center",
        backgroundColor: "#bbdefb",
        margin: "auto",
        padding: "50px",
        borderRadius: "20px",
        marginTop: "150px"
    },
    Button: {
        marginLeft: "0px",
        marginTop: "30px",
        borderRadius: "50px",
        [themes.breakpoints.up('md')]: {
            marginLeft: "50px",
            marginTop: "7px",
        }

    },
    Button1: {
        marginLeft: "0px",
        marginTop: "30px",
        [themes.breakpoints.up('md')]: {
            marginLeft: "50px",
            marginTop: "50px",
        }

    }
}))