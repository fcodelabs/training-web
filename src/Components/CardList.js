import { Box } from '@mui/material'
import React from 'react'
import DearDiaryCard from './DearDiaryCard'


function CardList({ todos }) {
  return (
    <Box component="div" sx={{ display: 'inline' }}>

      <div>
        {todos.map(todo => {
          return (
            <div style={{ display: 'inline' }}><DearDiaryCard key={todo.description} todo={todo} /></div>

          )
        })}

      </div>
    </Box>
  )
}

export default CardList