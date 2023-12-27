import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

interface snackBarProps {
  openSnackbar: boolean;
  handleCloseSnackbar: () => void;
  submissionTime: Date | null;
}

const SnackBar: React.FC<snackBarProps> = ({openSnackbar, handleCloseSnackbar, submissionTime})=> {
  return (
    <div>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={600000}
        onClose={handleCloseSnackbar}
        message={ <React.Fragment>
          <CheckOutlinedIcon color="success" fontSize="small" />
          {` Record saved successfully ${submissionTime ? `${Math.floor((new Date().getTime() - submissionTime.getTime()) / 60000)} mins ago` : ''}`}
        </React.Fragment>
      }
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseSnackbar}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        sx={
          {
            '& .MuiSnackbarContent-root': {
              backgroundColor: '#FFFFFF',
              color: '#000',
              borderRadius: '6px',              
            },
          }
          
        }
      />
    </div>
  )
}

export default SnackBar