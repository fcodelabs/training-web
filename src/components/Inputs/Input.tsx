import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";


interface InputProps {
  label: string;
  width: string | number;
  value?: string | number; 
}


const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      // width: "395px",
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
    fontSize: "13px",
    transform: "translateY(80%)",
    paddingLeft: "10px",
    color: "#4B465C"
  },
  multilineColor : {
    color: "#4B465C"
  }
});

export default function Input({ label,width,value }: InputProps) {
  const classes = useStyles();
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <>
      <TextField
        id="outlined-basic"
        label={!isFocused ? (label) : ""}
        variant="outlined"
        className={classes.root}
        InputLabelProps={{
          classes: {
            root: classes.customLabel,
          },
          style: {
            paddingLeft: isFocused ? "45px" : "5px",
          },
          
        }}
      />
    </>
  );
}
