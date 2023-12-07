import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import InputAdornment from '@mui/material/InputAdornment';

interface InputProps {
  label: string;
  icon: React.ReactNode;
}

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      width: "395px",
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
    paddingLeft: "45px",
  },
  multilineColor : {
    color: "#4B465C"
  }
});

export default function IconInput({ label,icon }: InputProps) {
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
        label= {!isFocused ? (label) : ""}
        variant="outlined"
        className={classes.root}
        InputLabelProps={{
          shrink: false,
          classes: {
            root: classes.customLabel,
          },
        }}
        InputProps={{
          className: classes.multilineColor,
          startAdornment: (
            <InputAdornment position="start">
              {icon}
            </InputAdornment>
          ),
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
       
      />
    </>
  );
}
