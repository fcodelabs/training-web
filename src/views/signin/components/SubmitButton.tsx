import { styled as materialStyled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const MaterialStyledButton = materialStyled(Button)({
  background: "#37A794",
  height: 44,
  width: "50%",
  borderRadius: 12,
  fontFamily: "Nunito",
  fontStyle: "normal",
  fontWeight: 800,
  fontSize: 16,
  lineHeight: "150%",
  textAlign: "center",
  letterSpacing: "-0.02em",
  textTransform: "capitalize",
  "&:hover": {
    background: "#37A794",
  },
  "&:disabled": {
    background: "#37A794",
    opacity: 0.5,
    color: "#FFFFFF",
  },
});

interface Props {
  disabled?: boolean;
}

export default function SubmitButton(props: Props) {
  const { disabled } = props;

  return (
    <MaterialStyledButton
      fullWidth
      variant="contained"
      type="submit"
      disabled={disabled}
    >
      Login
    </MaterialStyledButton>
  );
}

SubmitButton.defaultProps = {
  disabled: false,
  onClick: undefined,
};
