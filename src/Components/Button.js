import React from "react";
import PropTypes from "prop-types";
import Button1 from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const Button = ({ color, text, onClick, startIcon }) => {
  const classes = useStyles();
  return (
    <div>
      <Button1
        className={classes.root}
        startIcon={startIcon}
        onClick={onClick}
        variant="contained"
      >
        {text}
      </Button1>
    </div>
  );
};
const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg , #FE6B8B , #FF8E53)",
    border: 0,
    marginBottom: 15,

    borderRadius: 15,
    color: "white",
    padding: "5px 30px",
  },
});

Button.defaultProps = {
  color: "steelblue",
  text: "buton name",
};
Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
