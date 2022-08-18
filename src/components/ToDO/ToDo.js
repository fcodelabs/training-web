import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
 
  
} from '@mui/material'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';






export const MuiNavbar = () => {
  const [toDoList ,setDotoList] = useState();
  const dummyToDO = {title : " title 01",
                      description : "description 01"}


  const addToDO = () =>{
    const neToDo = {
      title : "tile 01",
      description : "description 01"
    }
    setDotoList(neToDo)

  };
 

  return (
<div>
  
<AppBar position='static' color='transparent'>
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
         
        </IconButton>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          Dear Diary
        </Typography>
        <Stack direction='row' spacing={2}>
              <SearchIcon />
          <CircleNotificationsIcon/>
          <AccountCircleIcon/>
        </Stack>
      </Toolbar>
    </AppBar>
    <div>
      <form>
        <div>
        <TextField fullWidth className='textf' id="outlined-basic" label="Title" variant="outlined" required/>
        </div>
       
        <div>
        <TextField fullWidth className='textf' id="outlined-basic" label="Body" variant="outlined" required/>
        </div>
        <Button onClick={addToDO} variant="contained">Submit</Button>
        
      </form>
    </div>
    <h1> show 
      {dummyToDO.title}
    </h1>
</div>
    
  )
}

export default MuiNavbar;