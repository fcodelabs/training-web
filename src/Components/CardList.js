import { Box, Grid, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DearDiaryCard from './DearDiaryCard'
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { get_Todo_Start, get_Todo_Success, update_Todos } from '../Redux-Store/Actions/Action';
import { onSnapshot } from 'firebase/firestore';
import collectionRef, { firestoreDB } from '../Config/fbConfig';



function CardList() {

  const [newTodos, setNewTodos] = useState([])

  const todos = useSelector(state => state.todos.todos);
  console.log("Todos State", todos)

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(get_Todo_Start());

  }, [dispatch]);
  
 
  console.log("new", newTodos)
  //dispatching the realtime update event from firebase.
  useEffect(() => {
    onSnapshot(collectionRef, (snapshot) => {
      let newtodos = []
      snapshot.docs.forEach((doc) => {
        newtodos.push({ ...doc.data(), id: doc.id })
      })
      setNewTodos({ newTodos: newtodos })
      dispatch(update_Todos(newTodos))
      dispatch(get_Todo_Start())
    })
    
    
    console.log(todos)
  }, [onSnapshot])
  
  

  return (
    <div>

      <Grid container >
        {/* mapping the todos array */}
        {todos && todos.map((todo) => (
          <Grid item key={todo.id} xs={12} md={6} lg={4} my={4}>

            <DearDiaryCard
              title={todo.title} description={todo.description} header={todo.name} length={todo.description.split(' ').length}> </DearDiaryCard>
          </Grid>
        )
        )}
      </Grid>
    </div>
  )
}

export default CardList