import React from 'react'
import { AppBar,Toolbar,Typography} from '@mui/material'
import './Navbar.css'
import LowPriorityIcon from '@mui/icons-material/LowPriority';


export default function Navbar() {
  return (
    <div >
        <AppBar position="static"  style={{ background: 'transparent', boxShadow: 'none'}}>
            <Toolbar>
                <LowPriorityIcon/>
            <Typography>Todo</Typography>

            </Toolbar>
            
        </AppBar>
    </div>
  )
}
