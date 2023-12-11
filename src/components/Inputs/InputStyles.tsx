import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      height: "35px",
      backgroundColor: "white",

      "& fieldset": {
        borderColor: "#DBDADE",
      },
      "&:hover fieldset": {
        borderColor: "#DBDADE",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#0092DD",
      },
      "&.MuiInputBase-input": {
        fontSize: "10px",
        color: "#0092DD",
      },
    },
  },
  customLabel: {
    fontSize: "10px",
    transform: "translateY(80%)",
    paddingLeft: "45px",
  },
  multilineColor: {
    color: "#4B465C",
  },
});

export default useStyles;
