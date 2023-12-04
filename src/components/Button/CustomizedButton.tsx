import { Button } from "@mui/material";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: React.ReactNode;
  secondary?: boolean;
}

export default function CustomizedButton({
  label,
  onClick,
  icon,
  secondary,
}: ButtonProps) {
  return (
    <>
      <Button
        variant="contained"
        endIcon={icon}
        sx={{ 
          background: secondary ? '#0092DD29': '#0092DD',
          textTransform: 'none', 
          color: secondary ? '#0092DD': '#FFFFFF',
          "&:hover": {background: secondary ? '#0092DD29': '#0092DD'} }}
        disableElevation
        autoCapitalize="false"
      >
        {label}
      </Button>
    </>
  );
}