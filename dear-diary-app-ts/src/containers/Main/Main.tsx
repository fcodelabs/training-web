import React, { ReactElement, useEffect } from 'react';
import Appbar from '../../components/Appbar/Appbar';
import TodoForm from '../../components/TodoForm/TodoForm';
import TodoCard from '../../components/TodoCard/TodoCard';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, addTodo } from '../../redux/todoSlice';
import { RootState } from '../../redux/store';
import db from '../../config/firebase';
import { collection, addDoc } from 'firebase/firestore/lite';

interface Todo {
  todo: string;
  userName: string;
  description: string;
}




function Main(): ReactElement {

  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todo.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  // handle add task function to database and redux 
  const handleAddTodo = async (todoName: string, desc: string): Promise<void> => {
    const name = localStorage.getItem("name")
    const newTodo: Todo = { todo: todoName, userName: name || '', description: desc };
    try {
       await addDoc(collection(db, "todos"), newTodo);
      
      // Dispatch the addTodo action
      dispatch(addTodo(newTodo));
    } catch (error) {
      console.log('Error adding todo:', error);
    }
  };

  return (
    <div className="App">
      {/* top header component navigation */}
      <Appbar />

      {/* todo form component */}
      <TodoForm addTodoDb={handleAddTodo} />

      {/* todo card component */}
      <Grid container spacing={3}>

        {/* loop all todos and create card component for each todo task */}
        {todos.map((todo, index) => (
          <Grid item xs key={index}>
            <TodoCard todo={todo} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Main;


