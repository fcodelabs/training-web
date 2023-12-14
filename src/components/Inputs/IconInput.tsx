import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import InputAdornment from '@mui/material/InputAdornment';

interface InputProps {
  label: string;
  width: string | number; 
  icon: React.ReactNode;
}

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      
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
    paddingLeft: "35px",
  },
  multilineColor : {
    color: "#4B465C"
  }
});

export default function IconInput({ label,width,icon }: InputProps) {
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
       size="small"
        id="outlined-basic"
        label= {!isFocused ? (label) : ""}
        variant="outlined"
        className={classes.root}
        InputLabelProps={{
          shrink: true,
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
        style={{
          width: (width),
        }}

      />
    </>
  );
}
