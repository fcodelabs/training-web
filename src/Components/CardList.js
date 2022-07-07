import { Box, Grid, Stack } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import DearDiaryCard from './DearDiaryCard'


function CardList({ todos }) {
  //use Selector to bring the initialstate values 
  todos = useSelector(state => state.todos);
  return (
    <div>
      {/* Adding alignItems */}
      <Grid container >
        {todos.map(todo => (
          <Grid item key={todo.title} xs={12} md={6} lg={4} my={4}>

            <DearDiaryCard todo={todo} />
          </Grid>
        ))
        }
      </Grid>
    </div>


  )
}

export default CardList