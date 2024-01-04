import { Alert, AlertColor, Snackbar } from "@mui/material";

interface CustomSnackbarProps {
  open: boolean;
  message: string;
  severity: AlertColor;
  onClose: () => void;
}

export default function CustomSnackbar(
    {
        open,
        message,
        severity,
        onClose,
      }:CustomSnackbarProps
) {
  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={onClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={onClose}
          severity={severity}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}