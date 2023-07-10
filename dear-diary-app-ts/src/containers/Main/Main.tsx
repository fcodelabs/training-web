import React, { ReactElement, useState } from 'react';
import Appbar from '../../components/Appbar';
import TodoForm from '../../components/TodoForm';
import TodoCard from '../../components/TodoCard';
import Grid from '@mui/material/Grid';

interface Todo {
  todo: string;
  userName:string
  description: string;
}

interface MainProps {
  name: string;
}



function Main({ name }: MainProps): ReactElement {

  // save to state todo tasks 
  const [todos, setTodos] = useState<Todo[]>([]);


  // set and add todo to state 
  function addTodo(todoName: string, desc: string) {
    const newTodo: Todo = { todo: todoName, userName: name, description: desc };
    // console.log("54763245",todoName," ",name," ",desc);
    setTodos([...todos, newTodo]);
  }

  return (
    <div className="App">
      {/* top header component navigation */}
      <Appbar />

      {/* todo form component */}
      <TodoForm addTodo={addTodo} />

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
