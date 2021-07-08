import Grid from '@material-ui/core/Grid';
import './App.css';
import DiaryCard from './components/DiaryCard';
import DiaryHome from './components/DiaryHome';
import {useSelector} from 'react-redux';



function App() {

  const notes = useSelector(state=>state.notes)
  return (
    <container>
      <DiaryHome />
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
