import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import './App.css';
import DiaryCard from './components/DiaryCard';
import DiaryHome from './components/DiaryHome';



function App() {
  const[ notes , setNotes ] = useState([
    // {
    //   tittle: 'This is task 1',
    //   description: 'this is the descriptin of task 1'
    // },
    // {
    //   tittle: 'Task2',
    //   description: 'this is the description of task 2'
    // }
  ]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000)+1
    const newTask = {id, ...task}
    setNotes([...notes, newTask])
  }

  return (
    <container>
      <DiaryHome onAdd={addTask}/>
      {notes.length > 0 ?
      (<Grid container spacing={1}>
        {notes.map((note)=>(
          <Grid item xs={12} md={6} lg={4}>
            <DiaryCard tittle={note.tittle} description={note.description} subtitle='Ashen' color='cyan'/>
          </Grid>
        ))}
      </Grid>) : ('No Notes to show')}
    </container>
  );
}

export default App;
