import Grid from '@material-ui/core/Grid';
import DiaryCard from '../../components/DiaryCard';
import DiaryHome from '../../components/DiaryHome';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';



const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: "GET_LISTS"
        })
    });


    const notes = useSelector(state => state.notes.notes)





    return (

        <container style={{ margineLeft: 10 }}>
            <DiaryHome />
            {notes.length > 0 ?
                (<Grid container spacing={1}>
                    {notes.map((note) => (
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <DiaryCard tittle={note.tittle} description={note.description} subtitle={note.userName} color='#e6e6e6' />
                        </Grid>
                    ))}
                </Grid>) : ('No Notes to show')}
        </container>


    );
}

export default Home;
