import { makeStyles } from "@material-ui/core/styles";
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';

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

export const Textarea = styled(BaseTextareaAutosize)(
  ({ theme }) => `
    width: 320px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    background: white;
    border: 1px solid #DBDADE;

    &:focus {
      border: 2px solid #0092DD !important;
    }
  `,
);


