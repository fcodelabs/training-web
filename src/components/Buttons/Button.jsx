import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function Buttons(props) {
  return (
    <Stack  direction="row" style={props.style1} spacing={2}>
      <Button 
      disabled={props.disabled}
      style={props.style2} 
      variant={props.variant}
      onClick={props.onClick}
      >
        {props.placeHolder}
        </Button>
    </Stack>
  );
}