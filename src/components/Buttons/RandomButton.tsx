import { Button } from "@mui/material";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: React.ReactNode;
}

export default function RandomButton({
    label,
  onClick,
  icon,
}: ButtonProps
) {
  return (
    <>
      <Button
        variant="contained"
        endIcon={icon}
        sx={{ 
          background: '#0092DD29',
          textTransform: 'none', 
          color: '#0092DD',
          "&:hover": {background: '#0092DD29'} }}
        disableElevation
        autoCapitalize="false"
        onClick={onClick}
      >
        {label}
      </Button>
    </>
  )
}
