import { styled as materialStyled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const MaterialStyledButton = materialStyled(Button)({
  background: "#24a0ed",
  height: 44,
  width: "130px",
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
    background: "#24a0ed",
  },
  "&:disabled": {
    background: "#24a0ed",
    opacity: 0.5,
    color: "#FFFFFF",
  },
});

interface Props {
  onClick?: VoidFunction | undefined;
}

export default function SubmitButton(props: Props) {
  const { onClick } = props;

  return (
    <MaterialStyledButton
      fullWidth
      variant="contained"
      type="button"
      onClick={onClick}
    >
      Random
    </MaterialStyledButton>
  );
}
